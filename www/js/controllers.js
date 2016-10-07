angular.module('starter.controllers', [])

.controller('BlankCtrl', function($scope, $cordovaBarcodeScanner) {
	 $scope.scanBarcode = function() {
        $cordovaBarcodeScanner.scan().then(function(imageData) {
            alert(imageData.text);
            console.log("Barcode Format -> " + imageData.format);
            console.log("Cancelled -> " + imageData.cancelled);
        }, function(error) {
            console.log("An error happened -> " + error);
        });
    };
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
	$scope.colors = ['#0D601A', '#800105'];
	$scope.options = [{
            size: {
               		height: 1000,
               		width: 400
            	}
        }]
    $scope.labels = ['1', '2', '3', '4', '5', '6', '7', '2', '3', '4', '5', '6', '7', '2', '3', '4', '5', '6', '7', '2', '3', '4', '5', '6', '7'];
    $scope.data = [
      [65, -59, 80, 81, -56, 55, -40, -59, 80, 81, -56, 55, -59, 80, 81, -56, 55, -40, -59, 80, 81, -56, 55, -59, 80, 81, -56, 55, -40, -59, 80, 81, -56, 55,],
      [28, 48, -40, 19, 86, 27, 90, -59, 80, 81, -56, 55, -40, -59, 80, 81, -56, 55, -59, 80, 81, -56, 55, -40, -59, 80, 81, -56, 55,]
    ];

    $scope.datasetOverride = [
      {
        label: "Line chart",
        borderWidth: 1,
        type: 'line',
        lineTension:0,
        fill:true,
        pointRadius:0,
        backgroundColor:'rgba(13, 96, 26, 0.39)',
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)"
      },
      {
        label: "Line chart",
        backgroundColor:'rgba(128, 1, 5, 0.39)',
        fill:true,
        borderWidth: 1,
        pointRadius:0,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        type: 'line',
        lineTension:0
      }
    ];
    $scope.width_chart = window.innerWidth*0.8;
    $scope.height_chart = window.innerHeight*0.5;
    console.log(window.innerHeight);
    console.log($scope.height_chart);

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
