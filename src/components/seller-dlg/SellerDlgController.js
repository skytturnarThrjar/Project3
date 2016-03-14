"use strict";

angular.module("project3App").controller("SellerDlgController",
function SellerDlgController($scope, data, AppResource) {

  $scope.seller = data[1];
  $scope.addOrEdit = data[0];
  if($scope.addOrEdit === "add") {
    $scope.add = true;
  }
  if($scope.addOrEDit === "edit") {
    $scope.add = false;
  }

  var s = _.clone($scope.seller);

  $scope.onOk = function onOK(seller) {
    $scope.$close($scope.seller);
  };

  $scope.onCancel = function onCancel() {
    $scope.seller.name = s.name;
    $scope.seller.category = s.category;
    $scope.seller.imagePath = s.imagePath;
    $scope.$dismiss();
  };
});
