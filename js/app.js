var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when('/home', {
		templateUrl: 'views/home.html'
	}).
	when('/about', {
		templateUrl: 'views/about.html'
	}).
	when('/contact', {
		templateUrl: 'views/contact.html'
	}).
	otherwise({
		redirectTo: '/home'
	});
}]);