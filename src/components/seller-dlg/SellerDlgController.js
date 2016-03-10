"use strict";

angular.module("project3App").controller("SellerDlgController",
function SellerDlgController($scope) {
  //$scope.seller = seller;
  //console.log(seller);
  $scope.seller = {
      name: "",
      category: "",
      imagePath: ""
  };

  $scope.onOk = function onOK(seller) {
    //validation
    $scope.seller = seller;
    console.log("SellerDigCo" , $scope.seller);
    $scope.$close($scope.seller);
  };

  $scope.onCancel = function onCancel() {
    $scope.$dismiss();
  };
});
