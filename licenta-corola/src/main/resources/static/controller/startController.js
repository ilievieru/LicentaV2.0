app.controller("startController", function ($scope, $http) {
    console.log("start controller");
    $scope.statProcess = function(){
         $http.post("/start").success(function (data) {
            })
    }
});