"use strict";

describe("SellersDetailsController should be unit tested here", function() {
  beforeEach(module("project3App"));
  var SellersDetailsController;
  var scope;
  var resource;

  beforeEach(inject(function($rootScope, $controller, AppResource) {
    scope = $rootScope.$new();
    resource = AppResource;
    spyOn(resource, 'getSellerDetails').and.callThrough();
    SellersDetailsController = $controller('SellersDetailsController', {
      $scope: scope,
      AppResource: resource,
      $routeParams: {id: '1'}
    });
  }));

  it("Is able to get seller details", function() {
    expect(resource.getSellerDetails).toHaveBeenCalled();
  });

  it("Is able to get seller details", function() {
    expect(scope.sellersDetails).toBeDefined();
  });

  // it("Sellers details appears and is not empty", function() {
  //   console.log("scope.sellersDetails " + scope.sellersDetails );
  //   expect(scope.sellersDetails).toBeDefined();
  // });
});
