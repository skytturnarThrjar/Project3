"use strict";

angular.module("project3App").controller("SellerDlgController",
function SellerDlgController($scope, seller, AppResource) {
  $scope.seller = seller;
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
