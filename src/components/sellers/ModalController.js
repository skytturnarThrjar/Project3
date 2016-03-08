//mögulega bæta við []
"use strict";
angular.module("project3App").controller("ModalController", function ModalController($scope, $uibModalInstance) {
  $scope.ok = function (tmp1) {
    //validation
    if(tmp1.SellerName !== undefined && tmp1.SellerCategory !== undefined && tmp1.SellerimagePath !== undefined) {
      $uibModalInstance.close(tmp1);
    }
    else {
      $scope.validationMessage = "You need to fill out all of the input fields";
    }
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});
