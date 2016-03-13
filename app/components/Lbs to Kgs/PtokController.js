app.controller('PtokController', function ($scope) {
    $scope.test = "POUNDS TO KILOGRAMS CONTROLLER!!!";
    $scope.pounds = null;
    $scope.kilograms = null;
  $scope.newPounds = function() {
        $scope.poundsResult = ($scope.kilograms * 2.2046);
        $scope.pounds = $scope.poundsResult;
        $scope.kiloResult = $scope.kilograms;
    }
    $scope.newKilograms = function() {
        $scope.kiloResult = ($scope.pounds / 2.2046);
        $scope.kilograms = $scope.kiloResult;
        $scope.poundsResult = $scope.pounds;
    }

    $scope.reset = function() {
        $scope.pounds = null;
        $scope.kilograms = null;
        $scope.poundsResult = null;
        $scope.kiloResult = null;
    }
});




