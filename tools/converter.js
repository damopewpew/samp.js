var funcReg = /native (\w*.)(\w*)\((.*)\);/;
var defineReg = /#define\s+(\w+)[^\S\n]+(.*)/;
var sizeofReg = /sizeof\s*\(?\s*(\w*)\s*\)?/;


var fs = require('fs');

var output = "";

var files = ['a_actor.inc', 'a_http.inc', 'a_npc.inc', 'a_objects.inc', 'a_players.inc', 'a_samp.inc', 'a_sampdb.inc', 'a_vehicles.inc'];

var ignoreFuncs = ["print"];

function template(name, params, param) {
    var prms = [];
    var callback = false;
    var callback_info = [];
    var comments = "/**\n * " + name + "\n";

    var prm = "";
    for (var i in params) {
        if (params[i].name == "function") params[i].name = "func";
        if (params[i].reference) {
            callback = true;
            callback_info.push(params[i]);

        } else {
            if (!params[i].ignore) {
                comments += " * @param {";
                switch (params[i].type) {
                case 'i':
                    {
                        comments += "Number";
                    }
                    break;
                case 'f':
                    {
                        comments += "Number";
                    }
                    break;
                case 's':
                    {
                        comments += "String";
                    }
                    break;
                }
                comments += "} " + params[i].name + "\n";

                prms.push(params[i].name);
            }
        }

        if (!params[i].ignore) prm += params[i].type;
    }

    var extra = "";
    var cb = "";
    if (callback) {
        //  prms.push("callback");
        //  cb = "/* callback( "+callback_info.join(', ')+" ) */ ";

        if (callback_info.length > 1) {
            var arr = [];
            comments += " * @return {{";
            for (var i in callback_info) {
                comments += " " + callback_info[i].name + ": ";
                switch (callback_info[i].type) {
                case 'I':
                case 'F':
                    comments += "Number, ";
                    break;
                case 'S':
                    {
                        comments += "String, ";
                    }
                    break;
                }
                arr.push('"' + callback_info[i].name + '"');
            }
            extra = ", [ " + arr.join(', ') + " ]";
            comments = comments.substring(0, comments.length - 2);
            comments += " }}\n";
        } else {
            comments += " * @return " + ((callback_info[0].type == 'S') ? '{String}' : '{Number}') + " " + callback_info[0].name + "\n";
        }


    } else comments += " * @return {Number} retval\n";
    comments += "*/\n";

    prms = prms.join(', ');

    var out = "";
    out += comments;
    if (prms == "") out += "function " + name + "(){\n\tCallNative( \"" + name + "\" );\n}\n";
    else {
        out += "function " + name + "( " + prms + " " + cb + "){\n";
        for(var i in params) {
            if(params[i].hasDefaultValue) {
                out += "\t"+params[i].name+" = typeof "+params[i].name+" !== 'undefined' ? "+params[i].name+" : "+params[i].defaultValue+";\n";
            }
        }
        out += "\treturn CallNative( \"" + name + "\", \"" + prm + "\", " + prms + extra + " );\n}\n";
    }
    return out;
}

function invokeTemplate(name, params) {
    var param = [];
    for (var i in params) {
        var p = params[i];
        var tmp = '';
        switch (p.type) {
        case 's':
            {
                tmp = '""';
            }
            break;
        case 'S':
            {
                tmp = 'Str';
            }
            break;
        case 'i':
            tmp = '0';
            break;
        case 'f':
            tmp = '0.0';
            break;
        case 'I':
            tmp = 'iVar';
            break;
        case 'F':
            tmp = 'fVar';
            break;
        }
        if (p.tag) tmp = p.tag + ':' + tmp;
        param.push(tmp);
    }


    if (params.length == 0) param = "";
    else param = param.join(', ');
    var out = "\t" + name + "( " + param + " );\n";

    return out;
}

function checkFunc(func) {
    var param = '';
    for (var i in func.params) {
        if (func.params[i].type == 's') {
            if (func.params[(i * 1) + 1] && func.params[(i * 1) + 1].name == 'len') {
                func.params[i].type = 'S';
                func.params[i].reference = true;
                func.params[(i * 1) + 1].ignore = true;
            }


        }
        param += func.params[i].type;
    }
    func.param = param;
    return func;
}

for (var j in files) {
    var file = fs.readFileSync('pawno/include/' + files[j], 'utf8');

    var lines = file.split('\n');


    var funcs = [];
    var defines = [];
    for (var i in lines) {
        var matches = lines[i].match(defineReg);
        if(matches) {
            var definition = {
                name: matches[1],
                value: matches[2].trim()
            };
            // Ignore definitions with arguments (%1, %2 etc)
            if(definition.value.length > 0 && definition.value.indexOf("%") == -1) defines.push(definition);
        }
        matches = lines[i].match(funcReg);
        if (matches) {

            var func = {
                func: matches[1],
                params: [],
                return: 'i',
                param: '',
                tag: '',
                ignore: false
            };
            if (ignoreFuncs.indexOf(func.func) > -1) {} else {
                if (matches[2]) {
                    if (matches[1] == 'Float') func.return = 'f';
                    func.func = matches[2];
                }


                if (matches[3]) {

                    var params = matches[3].split(',');


                    for (var k in params) {
                        var p = {
                            type: 'i',
                            reference: false,
                            hasDefaultValue: false,
                            defaultValue: 0,
                            name: ''
                        };
                        var param = params[k].trim();


                        if (param[0] == '&') {

                            p.reference = true;
                            param = param.substring(1);

                        }

                        if (param[0] == '{') break; // Varadic funcs, deal with them later
                        param = param.split('=');
                        if(param[1] != null) {
                            var value = param[1].trim();
                            p.hasDefaultValue = true;
                            // Catch 
                            if(value.indexOf("sizeof") > -1) {
                                p.defaultValue = 0;
                                sizeofMatches = value.match(sizeofReg);
                                // Set reference to true for the referenced value
                                for(var i in func.params) {
                                    if(func.params[i].name == sizeofMatches[1]) {
                                        func.params[i].reference = true;
                                        func.params[i].type = "S"; // would be .toUpperCase but this will only ever be strings
                                        break;
                                    }
                                }
                            }
                            else p.defaultValue = value;
                        }
                        param = param[0].trim();
                        var sp = param.split(':');
                        if (sp.length > 1) {
                            if (sp[0] == 'Float') p.type = 'f';
                            else p.tag = sp[0];
                            p.name = sp[1];
                        } else {
                            if (sp[0].substring(sp[0].length - 1) == ']') {
                                p.type = 's';
                                p.name = sp[0].substr(0, sp[0].length - 2);
                            } else p.name = sp[0];
                        }

                        var c = p.type;
                        if (p.reference) c = c.toUpperCase();
                        p.type = c;
                        p.name = p.name.replace('const ', '');
                        func.param += c;
                        func.params.push(p);
                    }
                }


                funcs.push(func);
            }


        }
    }
    var output = "";

    for(var i in defines) {
        var d = defines[i];
        if(d.value.length > 0) output += "const "+d.name+" = "+d.value+";\n";
    }

    var invoke = "forward Invoke_" + files[j].replace('.', '') + "();\npublic Invoke_" + files[j].replace('.', '') + "(){\n";
    invoke += "\tnew Str[256];\n\tnew iVar;\n\tnew Float:fVar;\n\n";
    for (var i in funcs) {
        funcs[i] = checkFunc(funcs[i]);
        output += template(funcs[i].func, funcs[i].params, funcs[i].param);
        invoke += invokeTemplate(funcs[i].func, funcs[i].params);

    }

    invoke += "\t#pragma unused iVar, fVar, Str\n";

    invoke += "}\n";

    fs.writeFile('scriptfiles/js/include/' + files[j] + '.js', output, 'utf8');
    fs.writeFile('include/js/sampJS.' + files[j], invoke, 'utf8');

}