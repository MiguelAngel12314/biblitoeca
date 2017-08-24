(function() {
	"use strict";
	angular
	.module("app.upload")
	.controller("upload",upload);


	upload.$inject = ['uploadService'];

	function upload(uploadService) {
		var vm = this;

		/*functions*/
		vm.crearFolder = crearFolder;

		function crearFolder() {
			uploadService.init()
				  .then(createFolder)
				  .catch(createFolder);

			function createFolder(data) {
				console.log(data);
			}

			// console.log(vm.newfolder);
		}
	}
})();