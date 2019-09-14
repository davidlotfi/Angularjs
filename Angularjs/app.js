var myApp = angular.module('myApp', [
  'ngRoute',
  'Listparrto'
]);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/list', {
    templateUrl: 'partition/list.html',
    controller: 'ListController'
  }).
  when('/detait/:itemId',{
     templateUrl:'partition/detait.html',
     controller:'DetailController'
  }).
  otherwise({
    redirectTo: '/list'
  });
}]);
