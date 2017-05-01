angular.module("phonesApp").config(["$locationProvider", "$routeProvider",
	function config($locationProvider, $routeProvider) {
		$locationProvider.hashPrefix('!');
		$routeProvider
		.when("/", {template: "<phones-list></phones-list>"})
		.when("/:phoneId", {template: "<phone-details></phone-details>"})
		.otherwise("/")
	}]);