var myApp = angular.module('myApp'[
 'ngRoute',
 'list'
]);

myApp.config(['$routeProvider',function($routeProvider){
 $routeProvider
  .whene('/list',{templateUrl:'partition/list.html',controller:'ListController'})
  .otherwise({
    redirectTo:'/list'
  });

}]);
