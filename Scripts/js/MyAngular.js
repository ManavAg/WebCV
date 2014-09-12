var app = angular.module('myApp', []);
app.controller('MainController', ['$scope', function($scope) {
	
}]);

app.controller('MyController', ['$scope', function($scope) {
    $scope.username = 'World';
	$scope.Data = Data;
    $scope.ContentEN = function(value) {
		alert(value);
		ContentEN(value);
	};
	$scope.Projects = function(value) {
		alert(value);
		Projects(value);
	};
	$scope.range = function(n) {
        return new Array(n);
    };
  }]);