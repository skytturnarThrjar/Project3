"use strict";

angular.module("project3App")
  .controller("SellersDetailsController", function SellersDetailsController($scope, AppResource, $routeParams, store, centrisNotify, ProductDlg, $translate) {
    $scope.noproducts = "";
    $scope.Sellerid = $routeParams.id;

    AppResource.getSellerDetails(parseInt($scope.Sellerid)).success(function(sellers) {
      $scope.sellersDetails = sellers;
    }).error(function() {
      centrisNotify.error('sellers.Messages.LoadDetailsFailed');
    });

    //$scope.sellersProducts = store.get('sellersProducts');

    $scope.onAddProduct = function onAddProduct() {
      var p = {};
      ProductDlg.show(p).then(function(product) {
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
      //store.set('sellersProducts', $scope.sellersProducts);
    }).error(function() {
      centrisNotify.error('products.Messages.LoadFailed');
    });


//DIRECTIVES
// }).directive('topProducts', function() {
// return {
// 	restrict: 'E',
// 	templateUrl: '/src/components/top-products-tab/top-products.html'
// };
// }).directive('productsTab', function() {
// return {
// 	restrict: 'E',
// 	templateUrl: '/src/components/products-tab/index.html'
// };
// }).directive('products', function() {
//   return {
//     restrict: 'E',
//     templateUrl: '/src/components/product/Product.html'
//   };
// }).directive('product', function() {
//   return {
//     restrict: 'E',
//     templateUrl: '/src/components/product/Product.html'
//   };
// }).directive("headerdir", function () {
//   return {
//     restrict: "E",
//     templateUrl: "components/header/header.html",
//     link: function(scope, element) {
//       element.addClass('header');
//     }
//   };
});
