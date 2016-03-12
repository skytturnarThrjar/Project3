// "use strict";
//
// describe("ProductsTabController should be unit tested here", function() {
//   beforeEach(module("project3App"));
//   var ProductsTabController;
//   var scope;
//   var resource;
//
//   describe("Success to get seller products", function() {
//     beforeEach(inject(function($rootScope, $controller, AppResource) {
//       scope = $rootScope.$new();
//       resource = AppResource;
//       ProductsTabController = $controller('ProductsTabController', {
//         $scope: scope,
//         AppResource: resource,
//         $routeParams: {id: '1'}
//       });
//     }));
//
//     it("SellerID should be defined", function() {
//       expect(scope.sellerID).toBeDefined();
//     });
//
//     it("Able to get seller products", function() {
//       expect(scope.sellersProducts).toBeDefined();
//     });
//   });
//
//   describe("Not success to get seller products", function() {
//     beforeEach(inject(function($rootScope, $controller, AppResource) {
//       scope = $rootScope.$new();
//       resource = AppResource;
//       resource.successGetSellerProducts = false;
//       ProductsTabController = $controller('ProductsTabController', {
//         $scope: scope,
//         AppResource: resource,
//         $routeParams: {id: '1'}
//       });
//     }));
//
//     it("Not able to get seller products", function() {
//       expect(scope.sellersProducts).toBeUndefined();
//     });
//   });
// });
