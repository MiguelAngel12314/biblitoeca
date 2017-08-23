(function() {
	"use strict";
	angular.module("app")
	.directive("menu",menu);
	function menu() {
		var directive = {
			require: '^ngModel',
			templateUrl:"js/directivas/menu/menu.html",
			controller:menuCrl,
			controllerAs: "vm",
			scope :{
				seleccion:"="
			},
			bindToController:true

		};
		return directive;
	}
	menuCrl.$inject = [];
	function menuCrl() {
		var vm = this;
		vm.url = ['adeudos','biblioteca','configuracion',"salir"];
	}


})();