"use strict";

angular.module("project3App")
  .controller("ProductController", function ProductController($scope, $uibModal, AppResource, $routeParams, store, ProductDlg, centrisNotify) {
    $scope.onEditProduct = function onEditProduct(s) {
      ProductDlg.show("edit", s).then(function() {
        AppResource.updateProduct(parseInt(s.id), s).success(function(s) {
          centrisNotify.success('products.Messages.EditSucceeded');
        }).error(function() {
          centrisNotify.success('products.Messages.EditFailed');
        });
      });
    };
  });
