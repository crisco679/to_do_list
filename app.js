var app = angular.module('myApp', []);

app.controller('MainController', function($scope){

  $scope.checkboxModel = {
      value1 : true,
      value2 : 'YES'
    };
  $scope.items = [];
  $scope.makeList = function(){
    $scope.items.push($scope.listItem);
  };
  $scope.removeList = function(){
    $scope.items.pop($scope.listItem);
  };

});
