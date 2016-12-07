var app = angular.module("corola", ['ngMaterial']);
app.controller("homeController", function ($scope, $http) {
    console.log("homeController working...");
    $http.get("/firstResources").success(function (data) {
        $scope.backResources = data.first;
    })
    $http.get("/secondResources").success(function (data) {
        $scope.backSecondResources = data.first;
    })

    $scope.ready = function(){
        return true;
    }
    $scope.chosenFilter = "none";
    $scope.choseFilter = function (filter) {
        $scope.manual = false;
        $scope.semiAutomatic = false;
        $scope.automatic = false;
        if (filter == "Manual") {
            $scope.chosenFilter = "Manual";
            $scope.manual = true;
        }
        if (filter == "SemiAutomatic") {
            $scope.chosenFilter = "SemiAutomatic";
            $scope.semiAutomatic = true;
        }
        if (filter == "Automatic") {
            $scope.chosenFilter = "Automatic";
            $scope.automatic = true;
        }
    }
    $scope.chosenVersion = "none";
    $scope.choseVersion = function (version) {
        console.log("chose version");
        if (version == "Latest") {
            $scope.chosenVersion = "Latest";
        }
        if (version == "First") {
            $scope.chosenVersion = "First";
        }
        if (version == "Common") {
            $scope.chosenVersion = "Common";
        }
        ready();
    }
    $scope.inputType = "none";
    $scope.choseInputType = function (input) {
        $scope.file = false;
        $scope.text = false;
        if (input == "file") {
            $scope.inputType = "file";
            $scope.file = true;
        }
        if (input == "text") {
            $scope.inputType = "text";
            $scope.text = true;
        }
    }
});