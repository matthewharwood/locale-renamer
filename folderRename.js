var fs = require('fs');
var path = require('path');
var ROOTPATH = '';
var directoryList = [];

var profile = {
	'da': 'da_DK',
	'de': 'de_DE',
	'en': 'en_US',
	'en-GB': 'en_GB',
	'es': 'es_ES',
	'fi': 'fi_FI',
	'fr': 'fr_FR',
	'fr-CA': 'fr_CA',
	'it': 'it_IT',
	'nl': 'nl_NL',
	'no': 'nb_NO',
	'pt-PT': 'pt_PT',
	'ru': 'ru_RU',
	'sv': 'sv_SE',
};

process.argv.forEach(function (val, index, array) {
	if(index !== 2){ return false; }
	ROOTPATH = val;
	directoryList = getDirectories(ROOTPATH);
});

function getDirectories(srcpath) {
  return fs.readdirSync(srcpath).filter(function(file) {
    return fs.statSync(path.join(srcpath, file)).isDirectory()
  });
}

var renameFolder = function(directories) {
	for (var key in profile){
		for(var i = 0; i < directories.length; ++i){
			if(key === directories[i]){
				var absPath = ROOTPATH + '/';
				fs.rename(absPath + directories[i], absPath + profile[key]);
			}	
		}
		
	}
};

renameFolder(directoryList);

// find all directorys and store them in collection
// loop through a profile and match the directories to the profile

// directoryName: rename, path