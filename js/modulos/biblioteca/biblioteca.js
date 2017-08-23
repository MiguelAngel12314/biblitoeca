(function() {
	angular.module('app.biblioteca')
	.controller('biblioteca',biblioteca);
	
	biblioteca.$inject = [];

	function biblioteca() {
		var vm = this;
		vm.seleccion = 'biblioteca';
		vm.adeudos = [];
		/*vm.adeudos = [
	 	{
	 		img:"https://imagessl9.casadellibro.com/a/l/t0/39/9788425348839.jpg",
	 		titulo:"Prueba",
	 		fechaPedido: new Date(),
	 		fechaEntrega: new Date()
	 	},];*/

	 	for (var i = 0; i <= 100; i++) {
			// console.log(i)
			vm.adeudos.push({
		 		img:"https://imagessl9.casadellibro.com/a/l/t0/39/9788425348839.jpg",
		 		titulo:"Prueba "+i,
		 		fechaPedido: new Date(),
		 		fechaEntrega: new Date()
		 	})
		}
	}
})();