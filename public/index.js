var app = angular.module("ajaxApp", [])

app.controller("ListController", ["$scope", "$http", function($scope, $http){

  $scope.chores = [
    "Learn $http",
    "Learn some other stuff"
  ]

  $scope.getData = function() {
    $http.get("/api/chores").success(function(data){
      $scope.chores = data
    })
  };

}])

app.controller("CounterController", ["$scope", "$http", "$interval", function($scope, $http, $interval){

  $scope.timesClickedText = "";

  $scope.buttonClick = function() {
    $http.get("/api/click").success(function(data){
      $scope.timesClickedText = data.clicks + " clicks";
    });
  }

  $interval(function(){

    $http.get("/api/timesClicked").success(function(data){
      $scope.timesClickedText = data.clicks + " clicks";
    });

  }, 1000)

}])