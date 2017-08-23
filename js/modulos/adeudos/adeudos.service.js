(function() {
	"use strict";
	angular.module("app.adeudos")
	.service('AvonService',AvonService);
	AvonService.$inject=['SERVER','$q','$http'];
	function AvonService(SERVER,$q,$http) {
		return{
			saveUser:function(datos) {
				var deferred = $q.defer();
				var path = SERVER + "crear"; 
				console.log()
				$http.post(path,datos)
				.then(crear)
				.catch(crear);
				function crear(data){
					console.log(data);
					if (data.data) deferred.resolve({data:true,success: data.data});
					else deferred.reject({data:false});
				}
				/*$http({
			 		method:"POST",
			 		data: data,
			 		url:"http://192.168.1.221:3000/crear",
			 		headers:{"Content-type":"application/json"}

			 	})
			 	.then(crear)
			 	.catch(crear)

			 	function crear(argument) {
			 		// body...
			 	}
				if (datos) deferred.resolve({data:true});
				else deferred.reject({data:false});*/
				return deferred.promise;
			}
		}
	}
})();