"use strict";

angular.module("project3App").controller("ProductDlgController",
  function ProductDlgController($scope, product, AppResource, $routeParams, centrisNotify) {
    $scope.product = product;
    var p = _.clone($scope.product);
    $scope.onOk = function onOK(product) {
      $scope.$close($scope.product);
    };

    $scope.onCancel = function onCancel() {
      $scope.product.name = p.name;
      $scope.product.price = p.price;
      $scope.product.imagePath = p.imagePath;
      $scope.$dismiss();
    };

    $scope.required = true;

  });
