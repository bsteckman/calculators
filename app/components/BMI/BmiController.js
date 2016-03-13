app.controller('BmiController', function ($scope) {
    $scope.test = "BMI CONTROLLER!!!!";
    $scope.weight = null;
    $scope.height = null;
    $scope.newBMI = function(){
        $scope.result = ($scope.weight)/($scope.height * $scope.height) * 703};
        
    $scope.reset = function(){
        $scope.weight = null;
        $scope.height = null;
        $scope.newBMI = null;
    }
        
    
});