(function() {
	"use strict";

	angular.module("app.upload")
	.service("uploadService",uploadService);

	uploadService.$inject=["$http","$q","SERVER"];

	function uploadService($http,$q,SERVER) {
		return {
			init : function(datos) {
				console.log(datos);
				var deferido = $q.defer();

				var http = {
					method:"POST",
					url : SERVER+"createFolder",
					data:datos
				}

				$http(http)
						  .then(folder)
						  .catch(folder);

				function folder(data) {
					if (data.data) deferido.resolve(data.data.message);
					else deferido.reject("data.data.error");
					// console.log(data)
				}
				return deferido.promise;
			}
		}
	}
})()