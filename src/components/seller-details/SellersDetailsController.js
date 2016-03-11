"use strict";

angular.module("project3App")
.controller("SellersDetailsController",function SellersDetailsController($scope, $uibModal, AppResource,$routeParams,store, centrisNotify, ProductDlg) {

  $scope.Sellerid = $routeParams.id ;

  AppResource.getSellerDetails(parseInt($scope.Sellerid)).success(function(sellers){
    $scope.sellersDetails = sellers;
  }).error(function() {
    centrisNotify.error('sellers.Messages.LoadDetailsFailed');
  });

  $scope.sellersProducts = store.get('sellersProducts');

  $scope.onAddProduct = function onAddProduct() {
      var p = {};
      ProductDlg.show(p).then(function(product) {
        AppResource.addSellerProduct(parseInt($scope.Sellerid), product).success(function(product) {
          centrisNotify.success('product.Messages.SaveSucceeded');
        }).error(function() {
          centrisNotify.error('product.Messages.SaveFailed');
      });
    });
  };

}).directive('topProducts', function() {
return {
	restrict: 'E',
	templateUrl: '/src/components/top-products-tab/top-products.html'
};
}).directive('productsTab', function() {
return {
	restrict: 'E',
	templateUrl: '/src/components/products-tab/index.html'
};
});
