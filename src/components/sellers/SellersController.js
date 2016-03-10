"use strict";

angular.module("project3App").controller("SellersController",
function SellersController($scope, $uibModal, AppResource, $location, centrisNotify, SellerDlg) {
	$scope.isLoading = true;
	AppResource.getSellers().success(function (sellers ){
		$scope.sellers = sellers;
		$scope.isLoading = false;
	}).error(function() {
		$scope.isLoading = false;
		centrisNotify.error('sellers.Messages.LoadFailed');
	});

	$scope.sellerInfo = {};

	// $scope.addSellerfun = function() {
	//
	// 	var modalInstance = $uibModal.open({
  //     templateUrl: 'src/components/sellers/modal.html',
  //     controller: 'ModalController',
  //     size: 'md'
  //   });
	//
  //   modalInstance.result.then(function (selectedItem) {
	// 		var sellerObj = {
	// 			name: selectedItem.SellerName,
	// 			category: selectedItem.SellerCategory,
	// 			imagePath: selectedItem.SellerimagePath
	// 		};
	// 		AppResource.addSeller(sellerObj).success(function (sellers ){
	// 			centrisNotify.success('sellers.Messages.SaveSucceeded');
	// 		}).error(function() {
	// 			centrisNotify.error('sellers.Messages.SaveFailed');
	// 		});
  //   });
	// };

	$scope.onAddSeller = function onAddSeller() {
			var s = {};
			SellerDlg.show(s).then(function(seller) {
			AppResource.addSeller(seller).success(function(seller) {
			}).error(function() {
					//centrisNotify error("sellers.Messages.SaveFaile");
			});
		});
	};

	$scope.onEditSeller = function onEditSeller(s) {
		console.log(s);
		SellerDlg.show(s).then(function(seller) {
			AppResource.updateSeller(s.id, seller).success(function (seller){
			}).error(function() {
					//centrisNotify error("sellers.Messages.SaveFaile");
			});
		});
	};

});
