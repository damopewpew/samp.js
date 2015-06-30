
/**
 * FileSystem Class - Use $fs
 * Wraps ArrayBuffers in Buffer helper class
 * 
 * @example // In samp.js $fs is an instance of FileSystem
 * $fs = new FileSystem();
 * 
 * // Opens myfile.txt and reads 1000 bytes of it
 * let fd = $fs.open("myfile.txt");
 * let buf = $fs.read(fd,0,1000); 
 * $fs.close(fd);
 * 
 * let str = buf.toString();
 */
class FileSystem {
	
/**
 * Opens a file
 * @param {string} filename - The path/filename you want to open
 * @returns {object} File descriptor 
 */
	open(filename){
		return this.internal.open(filename);	
	}
	
/**
 * Closes a previously opened file
 * @param {Object} fd File descriptor returned from open()
 */
	close(fd){
		this.internal.close(fd);		
	}
	
	
/**
 * Reads from a file
 * @param   {Object} fd     File descriptor returned from open()
 * @param   {Number} offset Offset in bytes to start reading at
 * @param   {Number} length Length in bytes of how much to read
 * @returns {Buffer} Returns a buffer object ( ArrayBuffer wrapper )
 */
	read(fd,offset,length){
		var buffer =  new Buffer(this.internal.read(fd,offset,length));
		return buffer;
	}
	
/**
 * readFile callback
 * @callback readFileCallback
 * @param {$buffer} buffer Buffer Object ( ArrayBuffer wrapper )
 */
	
/**
 * Reads an entire file into a buffer
 * @param   {String}                  filename   - Filename you want to read
 * @param	{function(data: Buffer)}  [callback] - when a callback is supplied file will be read asyncronously  
 * @returns {Buffer|boolean}          Return a buffer object (ArrayBuffer wrapper) / True/False in async mode
 * @example // Read file asyncronously and fire callback when finished
 * $fs.readFile("myfile.txt", function(buffer){
 *     print(buffer.toString());
 * });
 * 
 * // Read file syncronously
 * print($fs.readFile("myfile.txt").toString());
 */
	readFile(filename){
		if(arguments.length > 1){
			var callback = arguments[1];
			this.internal.readFile(filename, "raw", function(data){
				callback.call(null,new Buffer(data));
			});
		} else {
			return new Buffer(this.internal.readFile(filename));	
		}
	}
	
/**
 * Writes data to a file
 * @param   {String}  filename The file you want to write to
 * @param   {String}  data     The data you want to write
 * @returns {Boolean} True on success False on failure	
 */
	writeFile(filename, data){
		return this.internal.writeFile(filename,data);
	}
	
/**
 * Appends data to a file. Creates new file if it does not exist
 * @param {String}  filename The file you want to write to
 * @param {String}  data     The data you want to append
 * @returns {Boolean} True on success false on failure
 */
	appendFile(filename, data){
		return this.internal.appendFile(filename, data);	
	}
	
/**
 * Checks if a file/path exists
 * @param   {String}  path Filename/Directory
 * @returns {Boolean} True if it exists False if it does not exist		
 */
	exits(path){
		return this.internal.exists(path);	
	}
	
/**
 * Renames a file
 * @param   {String}  filename    File you want to rename
 * @param   {String}  newfilename Name you want to rename it to
 * @returns {Boolean} True on success false on failure	
 */
	rename(filename,newfilename){
		return this.internal.rename(filename,newfilename);	
	}
	
/**
 * Deletes a file ( alias for unlink )
 * @param   {String}  filename Filename you want to delete
 * @returns {Boolean} True on success, false on failure		
 */
	delete(filename){
		return this.internal.unlink(filename);	
	}
	
/**
 * Deletes a file
 * @param   {String}  filename File you want to delete
 * @returns {Boolean} True on success, false on failure	
 */
	unlink(filename){
		return this.internal.unlink(filename);
	}
	
/**
 * Removes a directory
 * @param   {String}  directory Path of the directory you want to remove
 * @returns {Boolean} True on success, false on failure		
 */
	rmdir(directory){
		return this.internal.rmdir(directory);	
	}
	
/**
 * Makes a new directory
 * @param   {String}  directory Name of directory you want to create
 * @returns {Boolean} True on success, false on failure
 */
	mkdir(directory){
		return this.internval.mkdir(directory);	
	}
	
/**
 * Reads a directory listing into an array
 * @param   {String} directory Directory you want to read
 * @returns {Array}  Array of filenames and directory names ( directories end with / )
 */
	readdir(directory){
		return this.internal.readdir(directory);
	}
};



