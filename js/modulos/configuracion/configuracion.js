(function() {
	"use strict";

	angular.module("app.configuracion")
	.controller("configuracion",configuracion);
	
	configuracion.$inject = [];

	function configuracion() {
		var vm = this;
		vm.seleccion = "configuracion";
	}
})();