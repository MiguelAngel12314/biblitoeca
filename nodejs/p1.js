(function() {
	"use strict";
	function burbuja() {

		const arreglo = [1, 4, 3, 56, 5, 7, 54]
		let orden = [];
		
		for (var i = 0; i <= arreglo.length; i++) {

			for (var j = 0; j < arreglo.length; j++) {				
				if (arreglo[i] < arreglo[j+1]) orden.push(arreglo[i]);
			}
		}
		console.log(orden);
	}

	burbuja();

})();