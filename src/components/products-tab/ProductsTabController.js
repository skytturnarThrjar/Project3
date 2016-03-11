"use strict";

angular.module("project3App").controller("ProductsTabController",
function ProductsTabController($scope, $uibModal, AppResource, $routeParams, store, centrisNotify) {

    $scope.Sellerid = $routeParams.id;
    AppResource.getSellerProducts(parseInt($scope.Sellerid)).success(function(products) {
      $scope.sellersProducts = products;
      store.set('sellersProducts', $scope.sellersProducts);
    }).error(function() {
  		centrisNotify.error('products.Messages.LoadFailed');
  	});

  }).directive('product', function() {
    return {
      restrict: 'E',
      templateUrl: '/src/components/product/Product.html'
    };
  });
