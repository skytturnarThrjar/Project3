"use strict";

angular.module("project3App")
.controller("ProductController",function ProductController($scope, $uibModal, AppResource,$routeParams,store) {

  $scope.Sellerid = $routeParams.id ;

  AppResource.getSellerProducts(parseInt($scope.Sellerid)).success(function (products){
    $scope.sellersProducts = products;
    store.set('sellersProducts', $scope.sellersProducts);
    console.log("HERE");
    console.log(store.get('sellersProducts'));

  });


});
