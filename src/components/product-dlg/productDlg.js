"use strict";

angular.module("project3App").factory("ProductDlg",
  function ProductDlg($uibModal) {
    return {
      show: function(addOrEdit, product) {
        var modalInstance = $uibModal.open({
          templateUrl: "components/product-dlg/product-dlg.html",
          controller: "ProductDlgController",
          resolve: {
            data: function() {
              return [addOrEdit, product];
            }
          }
        });

        return modalInstance.result;
      }
    };
  });
