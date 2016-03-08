"use strict";

angular.module("project3App").controller("SellersDetailsController",
function SellersDetailsController($scope, $uibModal, AppResource,$routeParams) {

  $scope.Sellerid = $routeParams.id ;
  console.log( $scope.Sellerid);

  AppResource.getSellerDetails(parseInt($scope.Sellerid)).success(function (sellers ){
    $scope.sellersDetails = sellers;
    console.log(sellers);
  });

});
