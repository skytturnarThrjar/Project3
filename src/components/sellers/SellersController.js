"use strict";

angular.module("project3App").controller("SellersController",
function SellersController($scope, $uibModal, AppResource, $location, centrisNotify, SellerDlg, $translate) {
	$scope.isLoading = true;
	$scope.sortBy = 'name';
	$scope.ascending = false;

	AppResource.getSellers().success(function (sellers){
		$scope.sellers = sellers;
		$scope.isLoading = false;
	}).error(function() {
		$scope.isLoading = false;
		centrisNotify.error('sellers.Messages.LoadFailed');
	});

	//$scope.sellerInfo = {};

	$scope.onAddSeller = function onAddSeller() {
			var s = {};
			SellerDlg.show(s).then(function(seller) {
				AppResource.addSeller(seller).success(function(seller) {
					centrisNotify.success('sellers.Messages.SaveSucceeded');
				}).error(function() {
					centrisNotify.error('sellers.Messages.SaveFailed');
			});
		});
	};

	$scope.onEditSeller = function onEditSeller(s) {
		SellerDlg.show(s).then(function(seller) {
			AppResource.updateSeller(parseInt(seller.id), seller).success(function (seller) {
					centrisNotify.success('sellers.Messages.EditSucceeded');
			}).error(function() {
					centrisNotify.success('sellers.Messages.EditFailed');
			});
		});
	};

});
