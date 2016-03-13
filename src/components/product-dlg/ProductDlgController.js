"use strict";

angular.module("project3App").controller("ProductDlgController",
function ProductDlgController($scope, product, AppResource, $routeParams, centrisNotify) {
  $scope.product = product;
  var s = _.clone($scope.product);
  $scope.onOk = function onOK(product) {
      $scope.$close($scope.product);
  };

  $scope.onCancel = function onCancel() {
    console.log(s);
    console.log($routeParams.id);
    AppResource.updateProduct(parseInt($routeParams.id), s).success(function (s) {
        centrisNotify.success('products.Messages.EditSucceeded');
        console.log("HEHEHE");
    }).error(function() {
        centrisNotify.success('products.Messages.EditFailed');
    });
    AppResource.getSellerProducts(1).success(function(products){
      console.log(products);
    });
    $scope.$dismiss();
  };

  $scope.required = true;

});
