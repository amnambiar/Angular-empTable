var myApp = angular.module('myApp', ['ngRoute', 'pageControllers']);

myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/about', {
			templateUrl: 'views/about.html',
			controller: 'AboutController'
		})
		.when('/staff', {
			templateUrl: 'views/staff.html',
			controller: 'StaffController'
		})
		.when('/contact', {
			templateUrl: 'views/contact.html',
			controller: 'ContactController'
		})
		.when('/selected-staff', {
			templateUrl: 'views/selected-staff.html',
			controller: 'IndividualStaffController'
		})
		.otherwise({
        	redirectTo: '/about'
      	});
}]);