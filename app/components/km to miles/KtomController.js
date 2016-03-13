app.controller('KtomController', function ($scope) {
    $scope.test = "KILOMETERS TO MILES CONTROLLER!!!!"
    $scope.kilometers = null;
    $scope.miles = null;
   $scope.newKilometers = function() {
        $scope.kiloResult = ($scope.miles / 0.62137);
        $scope.kilometers = $scope.kiloResult;
        $scope.milesResult = $scope.miles;
    }
    $scope.newMiles = function() {
        $scope.milesResult = ($scope.kilometers * 0.62137);
        $scope.miles = $scope.milesResult;
        $scope.kiloResult = $scope.kilometers;
    }

    $scope.reset = function() {
        $scope.kilometers = null;
        $scope.miles = null;
        $scope.kiloResult = null;
        $scope.milesResult = null;
    }
});





