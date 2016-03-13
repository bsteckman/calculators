app.controller('ItofController', function($scope) {
    $scope.test = "INCHES TO FEET CONTROLLER!!!";
    $scope.feet = null;
    $scope.inches = null;
    $scope.newFeet = function() {
        $scope.feetResult = ($scope.inches / 12);
        $scope.feet = $scope.feetResult;
        $scope.inchesResult = $scope.inches;
    }
    $scope.newInches = function() {
        $scope.inchesResult = ($scope.feet * 12);
        $scope.inches = $scope.inchesResult;
        $scope.feetResult = $scope.feet;
    }

    $scope.reset = function() {
        $scope.inches = null;
        $scope.feet = null;
        $scope.feetResult = null;
        $scope.inchesResult = null;
    }
});