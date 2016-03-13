"use strict";

angular.module("project3App").directive('productsTab', function() {
  return {
  	restrict: 'E',
  	templateUrl: '/src/components/products-tab/index.html',
    link: function(scope, element) {
      element.addClass('productsTab');
    }
  };
});
