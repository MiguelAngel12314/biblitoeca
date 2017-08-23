(function() {
	'use strict';

	angular.module('app')
	.config(avon);

	avon.$inject=['$routeProvider'];
	function avon($routeProvider) {
		$routeProvider
		// Login
		.when('/',{
			templateUrl:"js/modulos/login/login.html",
			controller:"login",
			controllerAs:"vm",
		})
		.when('/adeudos',{
			templateUrl:'js/modulos/adeudos/adeudos.html',
			controller:'crear',
			controllerAs:'vm'
		})
		.when('/biblioteca',{
			templateUrl:"js/modulos/biblioteca/biblioteca.html",
			controller : 'biblioteca',
			controllerAs :"vm"
		})
		.when('/configuracion',{
			templateUrl:"js/modulos/configuracion/configuracion.html",
			controller :"configuracion",
			controllerAs:"vm"
		})
		.when("/registro",{
			templateUrl:"js/modulos/registro/registro.html",
			controller:"registro",
			contrllerAs:"vm"
		})
		.when('/upload',{
			templateUrl:"js/modulos/upload_files/upload.html",
			controller:"upload",
			controllerAs:"vm"
		})
		.otherwise({redirectTo:'/'});
	}

})();