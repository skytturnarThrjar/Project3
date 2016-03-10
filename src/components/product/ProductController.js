"use strict";

angular.module("project3App")
.controller("ProductController",function ProductController($scope, $uibModal, AppResource,$routeParams,store, ProductDlg, centrisNotify) {
  $scope.onEditProduct = function onEditProduct(s) {
    ProductDlg.show(s).then(function() {
      var product = {};
			AppResource.updateProduct(s.id, product).success(function (product){
					centrisNotify.success('product.Messages.EditSucceeded');
			}).error(function() {
					centrisNotify.success('product.Messages.EditFailed');
			});
		});
	};
});
