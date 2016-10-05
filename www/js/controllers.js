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

})
.controller('StartAppCtrl', function ($scope) {

})
.controller('StarterPageCtrl', function ($scope, $stateParams) {
	$scope.log_method = $stateParams.method;
	$scope.data = "";
	if($stateParams.method ==="qr"){
		$scope.data = "qr";
	}else if($stateParams.method =="sms"){
		$scope.data = "sms";
	}else{
		$scope.data= "hackers";
	}

});
