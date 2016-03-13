"use strict";

angular.module("project3App").factory("SellerDlg",
  function SellerDlg($uibModal) {
    return {
      show: function(seller, addOrEdit) {
        var modalInstance = $uibModal.open({
          templateUrl: "components/seller-dlg/seller-dlg.html",
          controller: "SellerDlgController",
          resolve: {
            seller: seller,
            addOrEdit: addOrEdit
          }
        });

        return modalInstance.result;
      }
    };
  });
