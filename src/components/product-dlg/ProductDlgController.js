"use strict";

angular.module("project3App").controller("ProductDlgController",
  function ProductDlgController($scope, data, AppResource, $routeParams, centrisNotify) {
    $scope.product = data[1];
    $scope.addOrEdit = data[0];
    if($scope.addOrEdit === "add") {
      $scope.add = true;
    }
    if($scope.addOrEdit === "edit") {
      $scope.add = false;
    }
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
