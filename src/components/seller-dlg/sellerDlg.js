"use strict";

angular.module("project3App").factory("SellerDlg",
function SellerDlg($uibModal) {
    return {
      show: function(seller) {
        var modalInstance = $uibModal.open({
            templateUrl: "components/seller-dlg/seller-dlg.html",
            controller: "SellerDlgController",
            resolve: {
    	        seller: seller
    	      }
        });

        return modalInstance.result;
      }
    };
});

		// var modalInstance = $uibModal.open({
    //   templateUrl: 'src/components/sellers/modal.html',
    //   controller: 'ModalController',
    //   size: 'md'
    // });
    //
    // modalInstance.result.then(function (selectedItem) {
		// 	console.log("selectedItem: ", selectedItem);
		// 	var sellerObj = {
		// 		name: selectedItem.SellerName,
		// 		category: selectedItem.SellerCategory,
		// 		imagePath: selectedItem.SellerimagePath
    //
		// 	};
    //
		// 	AppResource.addSeller(sellerObj).success(function (sellers ){
		// 	});
    // });
	  // };
