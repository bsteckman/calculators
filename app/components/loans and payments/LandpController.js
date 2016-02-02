app.controller('LandpController', function () {
    this.test = "LOANS AND PAYMENTS CONTROLLER!!!";
    this.principal = 1
    this.rate = 1;
    this.payments = 1;
    this.answer = function(principal,rate,payments){
     return (principal * (Math.pow((1 + (rate/100)), payments)))
    }
   
});