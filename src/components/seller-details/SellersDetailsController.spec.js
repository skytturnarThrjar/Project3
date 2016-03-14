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
          if (mockFactory.isSuccess) {
            cb(mockFactory.product);
          }
        }
      };
    }
  };

  describe("Success to get seller products", function() {
    beforeEach(inject(function($rootScope, $controller, AppResource) {
      scope = $rootScope.$new();
      resource = AppResource;
      SellersDetailsController = $controller('SellersDetailsController', {
        $scope: scope,
        AppResource: resource,
        $routeParams: {
          id: '1'
        },
        ProductDlg: mockFactory
      });
    }));

    it("SellerID should be defined", function() {
      expect(scope.sellerID).toBeDefined();
    });

    it("SellerDetails should be defined", function() {
      expect(scope.sellersDetails).toBeDefined();
    });

    it("Able to get seller products", function() {
      expect(scope.sellersProducts).toBeDefined();
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
      scope.onAddProduct();
      expect(resource.addedProduct).toBe(true);
    });

    it("Not possible to add product", function() {
      var productObj = {
        productName: "vala",
        price: 1002,
        quantitySold: 20,
        quantityInStock: 400,
        imagePath: "http://innnes.is/wp-content/uploads/2015/08/graenmeti_innnes-3.jpg"
      };
      resource.successAddSellerProduct = false;
      mockFactory.product = productObj;
      scope.onAddProduct();
      expect(resource.addedProduct).toBe(false);
    });

    it("possible to set sortBy", function() {
      scope.setSortBy("vuhu");
      expect(scope.sortBy).toEqual("vuhu");
    });

    it("possible to set ascending", function() {
      scope.setAscending(false);
      expect(scope.ascending).toBe(false);
    });
  });

  describe("Not success to get seller details", function() {
    beforeEach(inject(function($rootScope, $controller, AppResource) {
      scope = $rootScope.$new();
      resource = AppResource;
      resource.successGetSellerProducts = false;
      SellersDetailsController = $controller('SellersDetailsController', {
        $scope: scope,
        AppResource: resource,
        ProductDlg: mockFactory
      });
    }));

    it("Not able to get seller details", function() {
      expect(scope.sellersDetails).toBeUndefined();
    });
  });

  describe("Not success to get seller products", function() {
    beforeEach(inject(function($rootScope, $controller, AppResource) {
      scope = $rootScope.$new();
      resource = AppResource;
      resource.successGetSellerProducts = false;
      SellersDetailsController = $controller('SellersDetailsController', {
        $scope: scope,
        AppResource: resource,
        $routeParams: {
          id: '1'
        },
        ProductDlg: mockFactory
      });
    }));

    it("Not able to get seller products", function() {
      expect(scope.sellersProducts).toBeUndefined();
    });

  });

  describe("Success to get seller products", function() {
    beforeEach(inject(function($rootScope, $controller, AppResource) {
      scope = $rootScope.$new();
      resource = AppResource;
      SellersDetailsController = $controller('SellersDetailsController', {
        $scope: scope,
        AppResource: resource,
        $routeParams: {
          id: '2'
        },
        ProductDlg: mockFactory
      });
    }));

    it("Sellerhasnoproduct should not be defined", function() {
      expect(scope.noproducts).toBeDefined();
    });

  });
});
