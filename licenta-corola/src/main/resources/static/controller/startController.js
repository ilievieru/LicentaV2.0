app.controller("startController", function ($scope, $http) {
    console.log("start controller");

      $scope.ready = function(){
            return true;
        }

    $scope.statProcess = function(){

        //o idee de validare pe start
        if(document.getElementById("textFileToUpload").value != null)
            console.log(document.getElementById("textFileToUpload").value);


         $http.post("/start").success(function (data) {
            })
    }
});