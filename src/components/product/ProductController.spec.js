"use strict";

describe("ProductController should be unit tested here", function() {
	  beforeEach(module("project3App"));
		var ProductController;
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

		beforeEach(inject(function($rootScope, $controller, AppResource) {
			scope = $rootScope.$new();
			resource = AppResource;
			ProductController = $controller('ProductController', {
				$scope: scope,
				AppResource: resource,
				ProductDlg: mockFactory
			});
		}));

    it("Possible to edit product", function() {
      var productObj = {
        id: '1',
        productName: "vala",
        price: 1002,
        quantitySold: 20,
        quantityInStock: 400,
        imagePath: "http://innnes.is/wp-content/uploads/2015/08/graenmeti_innnes-3.jpg"
      };
      mockFactory.product = productObj;
      scope.onEditProduct(productObj);
      expect(resource.updatedProduct).toBe(true);
    });

    it("Not possible to edit product", function() {
      resource.successUpdateSellerProduct = false;
      var productObj = {
        id: '1',
        productName: "vala",
        price: 1002,
        quantitySold: 20,
        quantityInStock: 400,
        imagePath: "http://innnes.is/wp-content/uploads/2015/08/graenmeti_innnes-3.jpg"
      };
      mockFactory.product = productObj;
      scope.onEditProduct(productObj);
      expect(resource.updatedProduct).toBe(false);
    });
});
