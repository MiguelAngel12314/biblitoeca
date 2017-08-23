(function() {
	angular.module("app.login")
	.service("loginService",loginService);

	loginService.$inject=[];

	function loginService() {
		return "hola";
	}
})();