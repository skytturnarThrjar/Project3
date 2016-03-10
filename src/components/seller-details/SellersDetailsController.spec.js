"use strict";

describe("SellersDetailsController should be unit tested here", function() {
	// TODO: add beforeEach/describe/it/etc. functions as appropriate!
  beforeEach(module("project3App"));
  var SellersDetailsController;
  var scope;
  var resource;

  beforeEach(inject(function($rootScope, $controller, AppResource) {
    scope = $rootScope.$new();
    resource = AppResource;
    SellersDetailsController = $controller('SellersDetailsController', {
      $scope: scope,
      AppResource: resource
    });
  }));
  //
  // it("Is able to get seller details", function() {
  //   // var id = 1;
  //   // scope.getSellerDetails(id);
  //   // expect(scope.sellersDetails).toBeDefined();
  // });

  // it("Sellers details appears and is not empty", function() {
  //   console.log("scope.sellersDetails " + scope.sellersDetails );
  //   expect(scope.sellersDetails).toBeDefined();
  // });

});
