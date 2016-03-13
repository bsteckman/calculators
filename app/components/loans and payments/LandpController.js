app.controller('LandpController', function ($scope) {
   $scope.test = "LOANS AND PAYMENTS CONTROLLER!!!";
   $scope.principal = null;
   $scope.rate = null;
   $scope.payments = null;
   
   
   $scope.submit = function(principal,rate,payments){
     $scope.answer = '$' + (Math.round($scope.principal * (Math.pow((1 + ($scope.rate/100)), $scope.payments))));
    }
   $scope.reset = function(){
       $scope.principal = null;
       $scope.rate = null;
       $scope.payments = null;
       $scope.answer = null;
   }
});