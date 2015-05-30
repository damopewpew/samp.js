/**
 *	$fs - FileSystem
 **/
$fs = {
	/** 
	 * Renames a file/directory
	 * @param {String} old_path - The file you want to change
	 * @param {String} new_path - The name you want to change it to
	 * @returns {Boolean} true on success, false on failure                      
	 */
	rename: function(old_path, new_path){},
	
	/** 
	 * Removes a file
	 * @param {String} path - path to the file you want to remove
	 * @returns {Boolean} True on success, false on failure
	 */
	unlink: function(path){return false;},
	
	/** 
	 * Removes a file - alias for unlink
	 * @param {String} path - path to the file you want to remove
	 * @returns {Boolean} True on success, false on failure
	 */
	remove: function(path){ return false; },
	
	/**
	 * Removes a directory/folder
	 * @param {String} path - Path to the directory to be removed
	 *                      @returns {Boolean} True on success, False on failure
	 */
	rmdir: function(path){return false;},
	
	/**
	 * Creates a new directory/folder
	 * @param {String}  path Path/Name of the directory you want to create
	 * @returns {Boolean}	True on success, False on failure
	 *                       
	 */
	mkdir: function(path){return false;},
	
	/**
	 * Reads the contents of a directory into an array
	 * @param {String} path Path to the directory you want to read
	 * @returns {Boolean|Array} False on failure, Array of strings of filenames and directorys, directories end with
	 */
	readdir: function(path){return false;},
	
	/**
	 * Reads the contents of a file
	 * @param {String} path Path to the file you want to read
	 * @returns {String|Boolean} Contents of file into a string or false on failure
	 */
	readFile: function(path){return false;},
	
	/**
	 * Writes data to a file
	 * If the file doesn't exist it will create it
	 * If the file does exist it will overwrite the previous content
	 * @param {String} path Path to the new file you want to write/create
	 * @param {String} data Data you want to write
	 * @returns {Boolean} True on success, false on failure
	 *                      
	 */
	writeFile: function(path, data){return false;},
	
	/**
	 * Appends content to a file
	 * If the file doesn't exist it will create it
	 * If the file does exist it will append the content to the end of the file
	 * @param {String} path The path to the file you want to write to
	 * @param {String} data The data you want to append to the file
	 * @returns {Boolean} True on success, false on failure
	 */
	appendFile: function(path, data){return false;},
	
	/**
	 * Checks if a file/folder exists
	 * @param {String} path The path to the file/directory you want to check 
	 * @returns {Boolean} True if it exists, false if it doesn't
	 */
	exists: function(path){return false;}
};