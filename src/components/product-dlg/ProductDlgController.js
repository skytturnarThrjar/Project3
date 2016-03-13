"use strict";

angular.module("project3App").controller("ProductDlgController",
function ProductDlgController($scope, product) {
  $scope.product = product;
  $scope.onOk = function onOK(product) {
      $scope.$close($scope.product);
  };

  $scope.onCancel = function onCancel() {
    $scope.$dismiss();
  };

  $scope.required = true;

});
