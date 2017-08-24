;(function() {
	"use strict";

	const fs = require("fs");
	const server = require("express")();
	const bodyPaser = require("body-parser");

	server.use(bodyPaser.json());

	server.use(bodyPaser.urlencoded({
		extended:true
	}))

	server.use((req,res,next) => {
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		next();
	})
	
	server.post('/createFolder',(req, res) =>{
		
		res.send("sddfgh")		
	})

	server.listen(3000, () => {
		console.log("Listo");
	})



	// fs.mkdir("hola", (error) =>{
	// 	if (error) throw(error);
	// 	console.log("Carpeta creado correctamente");
	// })

	// // fs.readdir(process.argv[2], (error,files) =>{		
	// // 	for (var i=1; i < files.length; i++) {
	// // 		let nuevoNombre = files[i];
	// // 		nuevoNombre = nuevoNombre.replace(/\s/g,"_");
	// // 		console.log(nuevoNombre);
	// // 	}
	// // });
})();
