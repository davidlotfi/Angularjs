// * boukernine Abdellatif

var Listparrto  = angular.module('Listparrto',[]);
Listparrto.controller('ListController',['$scope','$http', function($scope,$http){
  $http.get('Angularjs/data.json').success(function(data){
     $scope.parrots =data;
   });
}]);


Listparrto.controller('DetailController',['$scope','$http','$routeParams', function($scope,$http,$routeParams){
  $http.get('Angularjs/data.json').success(function(data){
     $scope.parrots =data;
     $scope.whichItem=$routeParams.itemId;
   });
}]);
