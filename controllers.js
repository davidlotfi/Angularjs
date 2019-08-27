// * boukernine Abdellatif
var app = angular.module('myApp',[]);
app.controller('MyControleur',function MyControleur($scope,$http){
  $http.get('Angularjs/data.json').success(function(data){
      $scope.parrots =data;
  });
});
