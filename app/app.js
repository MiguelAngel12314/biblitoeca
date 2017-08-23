(function() {
	'use strict';
	angular.module("app",[
		'ngRoute',
		'app.login',
		'app.adeudos',
		'app.biblioteca',
		'app.configuracion',
		'app.registro',
		'app.upload'
	])
	.constant('SERVER',"http://192.168.1.221:3000/");
})();