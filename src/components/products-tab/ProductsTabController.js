"use strict";

angular.module("project3App").controller("ProductsTabController",
function ProductsTabController($scope, $uibModal, AppResource, $routeParams, store, centrisNotify) {

    // $scope.sellerID = $routeParams.id;
    // AppResource.getSellerProducts(parseInt($scope.sellerID)).success(function(products) {
    //   $scope.sellersProducts = products;
    //   console.log(products);
    //   store.set('sellersProducts', $scope.sellersProducts);
    // }).error(function() {
  	// 	centrisNotify.error('products.Messages.LoadFailed');
  	// });

  }).directive('product', function() {
    return {
      restrict: 'E',
      templateUrl: '/src/components/product/Product.html'
    };
  });
