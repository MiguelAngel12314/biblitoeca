;(function() {
	"use strict";

	const fs = require("fs");

	fs.mkdir("hola", (error) =>{
		if (error) throw(error);
		console.log("Carpeta creado correctamente");
	})

	// fs.readdir(process.argv[2], (error,files) =>{		
	// 	for (var i=1; i < files.length; i++) {
	// 		let nuevoNombre = files[i];
	// 		nuevoNombre = nuevoNombre.replace(/\s/g,"_");
	// 		console.log(nuevoNombre);
	// 	}
	// });
})();
