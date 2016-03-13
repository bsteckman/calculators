app.controller('FtocController', function($scope) {
    $scope.test = "F TO C CONTROLLER!!!";
    $scope.fahrenheit = null;
    $scope.celsius = null;
    $scope.newFahr = function() {
        $scope.fahrResult = ($scope.celsius * 1.8) + 32;
        $scope.fahrenheit = $scope.fahrResult;
        $scope.celResult = $scope.celsius;
    }
    $scope.newCels = function() {
        $scope.celResult = ($scope.fahrenheit - 32) / 1.8;
        $scope.celsius = $scope.celResult;
        $scope.fahrResult = $scope.fahrenheit;
    }

    $scope.reset = function() {
        $scope.celsius = null;
        $scope.fahrenheit = null;
        $scope.celResult=null;
        $scope.fahrResult = null;
    }
});