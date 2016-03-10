"use strict";

angular.module("project3App")
.controller("ProductTabController",function ProductTabController($scope, $uibModal, AppResource,$routeParams,store) {

  $scope.Sellerid = $routeParams.id ;

  AppResource.getSellerProducts(parseInt($scope.Sellerid)).success(function (products){
    $scope.sellersProducts = products;
    store.set('sellersProducts', $scope.sellersProducts);
  });
}).directive('product', function() {
return {
	restrict: 'E',
	templateUrl: '/src/components/product/Product.html'
};
});
