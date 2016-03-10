"use strict";

angular.module("project3App")
.controller("SellersDetailsController",function SellersDetailsController($scope, $uibModal, AppResource,$routeParams,store) {

  $scope.Sellerid = $routeParams.id ;

  AppResource.getSellerDetails(parseInt($scope.Sellerid)).success(function (sellers){
    $scope.sellersDetails = sellers;
    console.log(sellers);
  });

//  $scope.sellersProducts = store.get('sellersProducts');

}).directive('product', function() {
return {
	restrict: 'E',
	templateUrl: '/src/components/product/Product.html'
};
}).directive('topProducts', function() {
return {
	restrict: 'E',
	templateUrl: '/src/components/top-products-tab/top-products.html'
};
});
