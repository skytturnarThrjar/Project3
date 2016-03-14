"use strict";

angular.module("project3App").factory("SellerDlg",
  function SellerDlg($uibModal) {
    return {
      show: function(addOrEdit, seller) {
        var modalInstance = $uibModal.open({
          templateUrl: "components/seller-dlg/seller-dlg.html",
          controller: "SellerDlgController",
          resolve: {
            data: function() {
              return [addOrEdit, seller];
            }
          }
        });

        return modalInstance.result;
      }
    };
  });
