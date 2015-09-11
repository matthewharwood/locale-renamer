var fs = require('fs');
var glob = require("glob");


process.argv.forEach(function (val, index, array) {
	if(index === 2){
		glob(val + '/**/*.po', function (er, files) {		
			renameFilesToMessage(files)
		})
	}
});

function renameFilesToMessage(filesArr) {
	for(var i = 0; i < filesArr.length; ++i){
		fs.rename(filesArr[i], getPath(filesArr[i]) + '/messages.po');
	}
}
function getPath(file) {
		var fileArr = file.split('/');
		fileArr.pop();
		return fileArr.join('/');
}

