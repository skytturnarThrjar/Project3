"use strict";

angular.module("project3App")
.controller("SellersDetailsController",function SellersDetailsController($scope, $uibModal, AppResource,$routeParams,store, centrisNotify) {

  $scope.Sellerid = $routeParams.id ;

  AppResource.getSellerDetails(parseInt($scope.Sellerid)).success(function (sellers){
    $scope.sellersDetails = sellers;
    console.log(sellers);
  });

  $scope.sellerID = $routeParams.id;
  AppResource.getSellerProducts(parseInt($scope.sellerID)).success(function(products) {
    $scope.sellersProducts = products;
    console.log(products);
    store.set('sellersProducts', $scope.sellersProducts);
  }).error(function() {
    centrisNotify.error('products.Messages.LoadFailed');
  });


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
