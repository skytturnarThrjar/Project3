"use strict";

angular.module("project3App").controller("SellersController",
function SellersController($scope, $uibModal, AppResource, $location) {
	// TODO: load data from AppResource! Also, add other methods, such as to
	// add/update sellers etc.
	AppResource.getSellers().success(function (sellers ){
		$scope.sellers = sellers;
		console.log($scope.sellers);
	});

	$scope.sellerInfo = {};

	$scope.addSellerfun = function() {

		var modalInstance = $uibModal.open({
      templateUrl: 'src/components/sellers/modal.html',
      controller: 'ModalController',
      size: 'md'
    });

    modalInstance.result.then(function (selectedItem) {
			console.log("selectedItem: ", selectedItem);
			var sellerObj ={
			name: selectedItem.SellerName,
			category: selectedItem.SellerCategory,
			imagePath:selectedItem.SellerimagePath
			};
		AppResource.addSeller(sellerObj).success(function (sellers ){

		});
    }, function () {
			console.log("error");
    });
	};

	$scope.moveToSeller = function(id){
		$location.path(id);
	};
});
