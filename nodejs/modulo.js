	
		var fs = require("fs");
		var path = require("path");
	function mostrar(carpeta,ext,callback) {	
		//LLAMAR ARCHIVOS
		fs.readdir(carpeta,"utf-8",(err,data) =>{
			var arreglo = [];
			if (err) return callback(err);			

			for (var i = 0; i < data.length; i++) {
				var extensiones = data[i].split(".")[1];
				if (ext == extensiones) arreglo.push(data[i]);
			}
		return callback(null, arreglo);
		})



	}
	module.exports = mostrar;

	// exports.mostrar = mostrar;
