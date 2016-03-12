"use strict";

describe("SellersDetailsController should be unit tested here", function() {
  beforeEach(module("project3App"));
  var SellersDetailsController;
  var scope;
  var resource;

  var mockFactory = {
    product: {},
    isSuccess: true,
    show: function(product) {
      return {
        then: function(cb) {
          if(mockFactory.isSuccess) {
            cb(mockFactory.product);
        }
      }};
    }
  };

  describe("SellersDetailsController - getSeller works", function() {
    beforeEach(inject(function($rootScope, $controller, AppResource) {
      scope = $rootScope.$new();
      resource = AppResource;
      spyOn(resource, 'getSellerDetails').and.callThrough();
      spyOn(resource, 'addSellerProduct').and.callThrough();
      SellersDetailsController = $controller('SellersDetailsController', {
        $scope: scope,
        AppResource: resource,
        $routeParams: {id: '1'},
        ProductDlg: mockFactory
      });
    }));

    it("Is able to get seller details", function() {
      expect(scope.sellersDetails).toBeDefined();
    });

		it("Possible to add product", function() {
      var productObj = {
        productName: "vala",
        price: 1002,
        quantitySold: 20,
        quantityInStock: 400,
        imagePath: "http://innnes.is/wp-content/uploads/2015/08/graenmeti_innnes-3.jpg"
      };
			mockFactory.product = productObj;
      console.log(mockFactory.product);
			scope.onAddProduct();
      expect(resource.addedProduct).toBe(true);
		});

		it("Not possible to add seller", function() {
			resource.successAddSellerProduct = false;
      var productObj = {
        productName: "vala",
        price: 1002,
        quantitySold: 20,
        quantityInStock: 400,
        imagePath: "http://innnes.is/wp-content/uploads/2015/08/graenmeti_innnes-3.jpg"
      };
			mockFactory.mockSeller = productObj;
			scope.onAddProduct();
			expect(resource.addedProduct).toBe(false);
		});
  });

  describe("SellersDetailsController - getSeller doesn't works", function() {
    beforeEach(inject(function($rootScope, $controller, AppResource) {
      scope = $rootScope.$new();
      resource = AppResource;
      resource.successLoadSellerDetails = false;
      spyOn(resource, 'getSellerDetails').and.callThrough();
      SellersDetailsController = $controller('SellersDetailsController', {
        $scope: scope,
        AppResource: resource,
        $routeParams: {id: '1'}
      });
    }));

    it("Not able to get seller details", function() {
      expect(scope.sellersDetails).toBeUndefined();
    });
  });
});
