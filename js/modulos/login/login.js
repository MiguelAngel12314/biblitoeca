(function() {
	"use strict";
	angular.module("app.login")
	.controller('login',login);

	login.$inject=['$location'];	
	function login($location) {				
		var vm = this;

		vm.login = login;

		function login() {
			$location.path("adeudos");
		}
	}
})();