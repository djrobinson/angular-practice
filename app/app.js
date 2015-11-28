'use strict';

var bookApp = angular.module('bookApp', [
	'bookController'
]);
  

bookApp.directive('mygraph', function() {
	var directive = {};
	
	directive.restrict = 'E'; //Restricts to element directive
	directive.templateUrl = 'templates/graph.html';
	
	return directive;
});

var bookController = angular.module('bookController', []);

//creates teh myControllers module where we will place all of our controllers

bookController.controller('BookListCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('books/books.json').success(function(data) {
      $scope.books = data;
    });

    $scope.orderProp = 'age';
	
  }]);
  
  
