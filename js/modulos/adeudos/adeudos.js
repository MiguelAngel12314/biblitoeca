(function() {
	'use strict';
	 angular.module('app.adeudos')
	 .controller('crear',crear);

	 crear.$inject=['AvonService'];
	 function crear(AvonService) {
	 	var vm = this;
	 	vm.enviar = enviar;
	 	vm.adeudos = [{
	 		img:"https://imagessl3.casadellibro.com/a/l/t0/93/9788448160593.jpg",
	 		titulo:"Metodologia dela investigacion",
	 		fechaPedido: new Date(),
	 		fechaEntrega: new Date()
	 	},
	 	{
	 		img:"https://imagessl9.casadellibro.com/a/l/t0/39/9788425348839.jpg",
	 		titulo:"Prueba",
	 		fechaPedido: new Date(),
	 		fechaEntrega: new Date()
	 	},
	 	{
	 		img:"https://imagessl9.casadellibro.com/a/l/t0/39/9788425348839.jpg",
	 		titulo:"Prueba",
	 		fechaPedido: new Date(),
	 		fechaEntrega: new Date()
	 	}];

	 	function enviar() {
	 		AvonService.saveUser(vm.tipoUser).then(saveUser).catch(saveUser);
	 	
		 	function saveUser(data){
		 		if (data.data) {
		 			console.log(data);

		 		}
		 		else console.log(data);
		 	}
	 	}
	 	
	 }
})();