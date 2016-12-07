app.controller("startController", function ($scope, $http) {
    console.log("start controller");

      $scope.ready = function(){
            return true;
        }

    $scope.statProcess = function(){
         $http.post("/start").success(function (data) {
            })
    }
});