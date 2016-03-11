// "use strict";
//
// describe("TopProductsController should be unit tested here", function() {
//   beforeEach(module("project3App"));
//   var SellersDetailsController;
//   var scope;
//   var resource;
//
//   beforeEach(inject(function($rootScope, $controller, AppResource) {
//     scope = $rootScope.$new();
//     resource = AppResource;
//     spyOn(resource, 'getSellerDetails').and.callThrough();
//     SellersDetailsController = $controller('SellersDetailsController', {
//       $scope: scope,
//       AppResource: resource,
//       $routeParams: {id: '1'}
//     });
//   }));
//
//   it("Seller details is defined", function() {
//     expect(scope.sellersDetails).toBeDefined();
//   });
//
//   it("Is able to get seller details", function() {
//     expect(resource.getSellerDetails).toHaveBeenCalled();
//   });
//
//   it("Not able to get seller details", function() {
//     resource.successLoadSellerDetails = false;
//     expect(resource.getSellerDetails).not.toHaveBeenCalled();
//   });
//
// });
