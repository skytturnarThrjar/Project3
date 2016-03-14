"use strict";

angular.module("project3App")
  .controller("SellersDetailsController", function SellersDetailsController($scope, AppResource, $routeParams, centrisNotify, ProductDlg, $translate) {
    $scope.noproducts = "";
    $scope.Sellerid = $routeParams.id;
    $scope.sortBy = 'name';
    $scope.ascending = false;

    AppResource.getSellerDetails(parseInt($scope.Sellerid)).success(function(sellers) {
      $scope.sellersDetails = sellers;
    }).error(function() {
      centrisNotify.error('sellers.Messages.LoadDetailsFailed');
    });

    $scope.onAddProduct = function onAddProduct() {
      var p = {};
      ProductDlg.show("add", p).then(function(product) {
        AppResource.addSellerProduct(parseInt($scope.Sellerid), product).success(function(addedProduct) {
          $scope.sellersProducts.push(addedProduct);
          centrisNotify.success('products.Messages.SaveSucceeded');
        }).error(function() {
          centrisNotify.error('products.Messages.SaveFailed');
        });
      });
    };

    $scope.sellerID = $routeParams.id;

    AppResource.getSellerProducts(parseInt($scope.sellerID)).success(function(products) {
      $scope.sellersProducts = products;
      if(products.length === 0) {
        $scope.noproducts = "Seller has no products";
      }
    }).error(function() {
      centrisNotify.error('products.Messages.LoadFailed');
    });

    $scope.setSortBy = function(value) {
      $scope.sortBy = value;
    };

    $scope.setAscending = function(value) {
      $scope.ascending = value;
    };
});
