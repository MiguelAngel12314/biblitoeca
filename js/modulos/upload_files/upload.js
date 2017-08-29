(function() {
	"use strict";
	angular
	.module("app.upload")
	.controller("upload",upload);


	upload.$inject = ['uploadService'];

	function upload(uploadService) {
		var vm = this;

		vm.files = {};
		/*functions*/
		vm.crearFolder = crearFolder;

		function crearFolder() {
			uploadService.init(vm.files)
				  .then(createFolder)
				  .catch(createFolder);

			function createFolder(data) {
				alert(data)
			}

			// console.log(vm.newfolder);
		}
	}
})();