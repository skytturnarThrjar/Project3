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
			spyOn(resource, 'addSeller').and.callThrough();
			ProductController = $controller('ProductController', {
				$scope: scope,
				AppResource: resource,
				SellerDlg: mockFactory
			});
		}));

    // it("Possible to edit product", function() {
    // 	var product = {
    //     id: '1',
    //     name: "vala",
    //     price: 1002,
    //     quantitySold: 20,
    //     quantityInStock: 400,
    //     imagePath: "http://innnes.is/wp-content/uploads/2015/08/graenmeti_innnes-3.jpg"
    // 	};
    // 	mockFactory.seller = product;
    // 	scope.onEditProduct(product);
    // 	expect(resource.updatedProduct).toBe(true);
    // });

    // it("Not possible to edit seller", function() {
    // 	var sellerObj = {
    // 		SellerName: 'vala',
    // 		SellerCategory: 'blómkál',
    // 		SellerimagePath: 'http://innnes.is/wp-content/uploads/2015/08/graenmeti_innnes-3.jpg'
    // 	};
    // 	mockFactory.seller = sellerObj;
    // 	//scope.onEditSeller(sellerObj);
    // 	//expect(resource.updateSeller).toHaveBeenCalled();
    // 	expect(resource.updatedProduct).toBe(false);
    // });
});
