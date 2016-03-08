"use strict";

describe("SellersController should be unit tested here", function() {
	// TODO: add beforeEach/describe/it/etc. functions as appropriate!
	  beforeEach(module("project3App"));
		var SellersController;
		var scope;
		var resource;
		var mockModal = {
			mockSeller: {},
			isSuccess: true,
			open: function() {
				return { result: {
					then: function(cb) {
						if(mockModal.isSuccess) {
							cb(mockModal.mockSeller);
						}
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
				$uibModal: mockModal
			});
		}));

		it("List of sellers appears and is not empty", function() {
			expect(scope.sellers).toBeDefined();
		});

		it("Possible to add seller", function() {
			var sellerObj = {
				SellerName: 'vala',
				SellerCategory: 'blómkál',
				SellerimagePath: 'http://innnes.is/wp-content/uploads/2015/08/graenmeti_innnes-3.jpg'
			};
			mockModal.mockSeller = sellerObj;
			scope.addSellerfun();
			//expect(resource.addSeller).toHaveBeenCalled();
			expect(resource.addedSeller).toBe(true);
		});

		it("Not possible to add seller", function() {
			resource.successAddSeller = false;
			var sellerObj = {
				SellerName: 'vala',
				SellerCategory: 'blómkál',
				SellerimagePath: 'http://innnes.is/wp-content/uploads/2015/08/graenmeti_innnes-3.jpg'
			};
			mockModal.mockSeller = sellerObj;
			scope.addSellerfun();
			//ekki kallað á
			expect(resource.addedSeller).toBe(false);
		});

		it("Modal is not successful", function() {
			mockModal.isSuccess = false;
			var sellerObj = {
				SellerName: 'vala',
				SellerCategory: 'blómkál',
				SellerimagePath: 'http://innnes.is/wp-content/uploads/2015/08/graenmeti_innnes-3.jpg'
			};
			mockModal.mockSeller = sellerObj;
			scope.addSellerfun();
			expect(resource.addSeller).not.toHaveBeenCalled();
		});
});
