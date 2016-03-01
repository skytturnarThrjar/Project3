//mögulega bæta við []

"use strict";
angular.module("project3App").controller("ModalController", function ModalController($scope, $uibModalInstance) {
  $scope.ok = function (tmp1) {
    $uibModalInstance.close(tmp1);
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});
