"use strict";

angular.module("project3App")
.controller("ProductController",function ProductController($scope, $uibModal, AppResource,$routeParams,store, ProductDlg, centrisNotify) {

  console.log("vala");
  $scope.onEditProduct = function onEditProduct(s) {
    console.log("hello");
    ProductDlg.show(s).then(function() {
      var product = {};
      console.log("hello");
			AppResource.updateProduct(s.id, product).success(function (product){
          console.log("hello2");
					centrisNotify.success('product.Messages.EditSucceeded');
			}).error(function() {

					centrisNotify.success('product.Messages.EditFailed');
			});
		});
	};

});
