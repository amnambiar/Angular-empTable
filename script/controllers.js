var pageControllers = angular.module('pageControllers', []);

pageControllers.controller('MenuController', function ($rootScope, $scope, $http) {
	// reading data from external JSON files
  	$http.get('json/menu.json').success(function(data) {
	  	$scope.menuList = data;
  	}).error(function() {
  		console.log("Failed fetching data!");
  	});

  	$rootScope.activeMenu = function(menu) {
  		jQuery(".menu_item a").removeClass("active");
  		jQuery("#"+menu).addClass('active');
  	};
});

pageControllers.controller('AboutController', function ($rootScope) {
	$rootScope.activeMenu('about');
})

pageControllers.controller('StaffController', function ($rootScope, $scope, $http, $location) {
  	$rootScope.activeMenu('staff');

  	// reading data from external JSON files
  	$http.get('json/table-meta.json').success(function(data) {
  		$scope.employeeDetailLabels = data;
  	}).error(function() {
  		console.log("Failed fetching data!");
  	});

  	$http.get('json/employee-details.json').success(function(data) {
  		$scope.employees = data;
  	}).error(function() {
  		console.log("Failed fetching data!");
  	});

  	// setting default values of dropdowns
  	$scope.sortProperty = 'empId';
  	$scope.rowCountProp = 'All';

  	$scope.inidividualEmpData = function(emp) {
  		$location.path('/selected-staff').replace();
  		$rootScope.selectedEmployee = emp;
  	};

    $scope.sortColumnBy = function(empColName) {
      
    };

});

pageControllers.controller('ContactController', function ($rootScope) {
	$rootScope.activeMenu('contact');
})

pageControllers.controller('IndividualStaffController', function ($scope, $location) {
	$scope.goBack = function() {
  		$location.path('/staff').replace();
  	};
});