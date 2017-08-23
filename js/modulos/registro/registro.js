(function() {
	"use strict";
	angular
		  .module("app.registro")
		  .controller("registro",registro);

	registro.$inject=[];

	function registro() {
		var vm=this;

		vm.registrar = registrar;
		vm.validPass = validPass;
		vm.valid = true;

		function registrar() {
			console.log(vm.registro)
		}

		function validPass() {
			if (vm.registro.password == vm.registro.password) vm.verid = false;
			else vm.verid = true;
			console.log(vm.verid);
		}

	}


})();