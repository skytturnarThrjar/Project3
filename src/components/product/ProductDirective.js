"use strict";

angular.module("project3App").directive('product', function() {
  return {
    restrict: 'E',
    templateUrl: '/src/components/product/Product.html',
    link: function(scope, element) {
      element.addClass('product');
    }
  };
});
