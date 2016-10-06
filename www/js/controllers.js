angular.module('starter.controllers', [])

.controller('BlankCtrl', function($scope) {

})
.controller('StatsCtrl', function ($scope) {
	$scope.colors = ['#0D601A', '#800105'];
	$scope.labels = ["Download Sales", "In-Store Sales"];
	label: 'My dataset'; 
 	$scope.data = [80, 20];
 	
 	$scope.override = { borderColor: '#000', borderWidth:['2px'] };
 	$scope.data2 = [62, 38];

 	$scope.value = 80;
 	$scope.value2 = 62;
	$scope.options3 = {
  displayPrevious: true,
  barCap: 25,
  trackWidth: 14,
  barWidth: 14,
  readOnly: true,
  size:150,
  unit:"%",
  trackColor:'rgb(128, 1, 5)',
  barColor:'rgb(13, 96, 26)',
  textColor: 'rgb(203, 203, 203)'
};

})
.controller('StartAppCtrl', function ($scope) {

})
.controller('StarterPageCtrl', function ($scope, $stateParams, $cordovaBarcodeScanner, $http, $ionicModal) {
	$scope.log_method = $stateParams.method;
	$scope.data = "";
	if($stateParams.method ==="qr"){
		$scope.data = "qr";
		$scope.leerCodigo =function(){
			$scope.modal.show();
			//Llamamos al plugin
			$cordovaBarcodeScanner.scan()
				//Si escanea algo, mostramos el texto de lo escaneado
				.then ( function(imagenEscaneada){
						//Realizamos una peticion GET con el id
						$http.get('http://192.168.1.81:3000/'+ imagenEscaneada.text)
							//OK
							.success(function(data){
								//Asignamos los datos recibidos a qrdata
								$scope.qrdata= data.qrcode;
								//Abrimos el modal
								$scope.modal.show();

							})
							//Error
							.error(function(error){
								alert('Ha ocurrido un error al consultar los datos: '+error)
							})
				},
				//Si hay un error
				function(error){
					alert("Ha ocurrido un error al escanear: "+ error);
				});
		}
	}else if($stateParams.method =="sms"){
		$scope.data = "sms";
	}else{
		$scope.data= "hackers";
	}

});
