"use strict";

angular.module("project3App").directive('topProducts', function() {
  return {
  	restrict: 'E',
  	templateUrl: '/src/components/top-products-tab/top-products.html'
  };
});
