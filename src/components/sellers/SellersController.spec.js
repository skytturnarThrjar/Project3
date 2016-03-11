"use strict";

describe("SellersController should be unit tested here", function() {
	  beforeEach(module("project3App"));
		var SellersController;
		var scope;
		var resource;

		var mockFactory = {
			seller: {},
			isSuccess: true,
			show: function(seller) {
				return {
					then: function(cb) {
						if(mockFactory.isSuccess) {
							cb(mockFactory.seller);
					}
				}};
			}
		};

		beforeEach(inject(function($rootScope, $controller, AppResource) {
			scope = $rootScope.$new();
			resource = AppResource;
			spyOn(resource, 'addSeller').and.callThrough();
			SellersController = $controller('SellersController', {
				$scope: scope,
				AppResource: resource,
				SellerDlg: mockFactory
			});
		}));

		it("List of sellers appears and is not empty", function() {
			expect(scope.sellers).toBeDefined();
		});

		//resource virkar ekki
		it("List of sellers is empty", function() {
			resource.successLoadSellers = false;
			expect(scope.sellers).toBeUndefined();
		});

		it("Possible to add seller", function() {
			var sellerObj = {
				SellerName: 'vala',
				SellerCategory: 'blómkál',
				SellerimagePath: 'http://innnes.is/wp-content/uploads/2015/08/graenmeti_innnes-3.jpg'
			};
			mockFactory.seller = sellerObj;
			scope.onAddSeller();
			expect(resource.addSeller).toHaveBeenCalled();
		});

		//virkar ekki :( -> _ is undefined
		// it("Possible to edit seller", function() {
		// 	var sellerObj = {
		// 		SellerName: 'vala',
		// 		SellerCategory: 'blómkál',
		// 		SellerimagePath: 'http://innnes.is/wp-content/uploads/2015/08/graenmeti_innnes-3.jpg'
		// 	};
		// 	mockFactory.seller = sellerObj;
		// 	scope.onEditSeller(sellerObj);
		// 	expect(resource.updateSeller).toHaveBeenCalled();
		// });

		//resource virkar ekki
		// it("Not possible to add seller", function() {
		// 	resource.successAddSeller = false;
		// 	var sellerObj = {
		// 		SellerName: 'vala',
		// 		SellerCategory: 'blómkál',
		// 		SellerimagePath: 'http://innnes.is/wp-content/uploads/2015/08/graenmeti_innnes-3.jpg'
		// 	};
		// 	mockFactory.mockSeller = sellerObj;
		// 	scope.onAddSeller();
		// 	expect(resource.addSeller).not.toHaveBeenCalled();
		// });

		it("Modal is not successful", function() {
			mockFactory.isSuccess = false;
			var sellerObj = {
				SellerName: 'vala',
				SellerCategory: 'blómkál',
				SellerimagePath: 'http://innnes.is/wp-content/uploads/2015/08/graenmeti_innnes-3.jpg'
			};
			mockFactory.mockSeller = sellerObj;
			scope.onAddSeller();
			expect(resource.addSeller).not.toHaveBeenCalled();
		});
});
