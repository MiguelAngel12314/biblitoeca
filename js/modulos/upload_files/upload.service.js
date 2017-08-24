(function() {
	"use strict";

	angular.module("app.upload")
	.service("uploadService",uploadService);

	uploadService.$inject=["$http","$q","SERVER"];

	function uploadService($http,$q,SERVER) {
		return {
			init : function() {
				var deferido = $q.defer();

				var http = {
					method:"GET",
					url : SERVER+"createFolder",
				}

				$http(http)
						  .then(folder)
						  .catch(folder);

				function folder(data) {
					console.log(data)
					if (data) deferido.resolve(data);
					else deferido.reject();
					// console.log(data)
				}
				return deferido.promise;
			}
		}
	}
})()