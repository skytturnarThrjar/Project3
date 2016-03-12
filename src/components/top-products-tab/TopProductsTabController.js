"use strict";

angular.module("project3App")
  .controller("TopProductsTabController", function TopProductsTabController($scope, $uibModal, AppResource, $routeParams, store, centrisNotify) {

  }).directive('products', function() {
    return {
      restrict: 'E',
      templateUrl: '/src/components/product/Product.html'
    };
  });
