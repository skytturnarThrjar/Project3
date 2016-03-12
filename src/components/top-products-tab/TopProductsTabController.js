"use strict";

angular.module("project3App")
  .controller("TopProductsTabController", function TopProductsTabController($scope, $uibModal, AppResource, $routeParams, store, centrisNotify) {

    $scope.sellerID = $routeParams.id;

    AppResource.getSellerProducts(parseInt($scope.sellerID)).success(function(products) {
      $scope.sellersProducts = products;
      store.set('sellersProducts', $scope.sellersProducts);
    }).error(function() {
  		centrisNotify.error('products.Messages.LoadFailed');
  	});

  }).directive('products', function() {
    return {
      restrict: 'E',
      templateUrl: '/src/components/product/Product.html'
    };
  });
