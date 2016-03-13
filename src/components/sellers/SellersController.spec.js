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

		describe("when resource succeeds in loading a list of sellers", function(){
				// Hér kæmu sérstök beforeEach, þar á meðal sem býr til controller
				beforeEach(inject(function($rootScope, $controller, AppResource) {
					scope = $rootScope.$new();
					resource = AppResource;
					spyOn(resource, 'addSeller').and.callThrough();
					spyOn(resource, 'updateSeller').and.callThrough();
					SellersController = $controller('SellersController', {
						$scope: scope,
						AppResource: resource,
						SellerDlg: mockFactory
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
					mockFactory.seller = sellerObj;
					scope.onAddSeller();
					expect(resource.addedSeller).toBe(true);
				});

				it("Not possible to add seller", function() {
					resource.successAddSeller = false;
					var beforeLength = scope.sellers.length;
					var sellerObj = {
						SellerName: 'vala',
						SellerCategory: 'blómkál',
						SellerimagePath: 'http://innnes.is/wp-content/uploads/2015/08/graenmeti_innnes-3.jpg'
					};
					mockFactory.mockSeller = sellerObj;
					scope.onAddSeller();
					var afterLength = scope.sellers.length;
					expect(beforeLength).toEqual(afterLength);
				});

				// virkar ekki :( -> _ is undefined
				it("Possible to edit seller", function() {
					var seller = {
						id: '1',
						name: 'vala',
						category: 'blómkál',
						imagePath: 'http://innnes.is/wp-content/uploads/2015/08/graenmeti_innnes-3.jpg'
					};
					mockFactory.seller = seller;
					scope.onEditSeller(seller);
					//expect(resource.updateSeller).toHaveBeenCalled();
					expect(resource.updatedSeller).toBe(true);
				});

				it("Not possible to edit seller", function() {
					resource.successUpdateSeller = false;
					var seller = {
						id: '1',
						name: 'vala',
						category: 'blómkál',
						imagePath: 'http://innnes.is/wp-content/uploads/2015/08/graenmeti_innnes-3.jpg'
					};
					mockFactory.seller = seller;
					scope.onEditSeller(seller);
					//expect(resource.updateSeller).not.toHaveBeenCalled();
					expect(resource.updatedSeller).toBe(false);
				});

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

		describe("when resource fails loading a list of sellers", function(){
				beforeEach(inject(function($rootScope, $controller, AppResource) {
					scope = $rootScope.$new();
					resource = AppResource;
					resource.successLoadSellers = false;
					spyOn(resource, 'addSeller').and.callThrough();
					SellersController = $controller('SellersController', {
						$scope: scope,
						AppResource: resource,
						SellerDlg: mockFactory
					});
				}));

				it("List of sellers is empty", function() {
					expect(scope.sellers).toBeUndefined();
				});
		});

		// beforeEach(inject(function($rootScope, $controller, AppResource) {
		// 	scope = $rootScope.$new();
		// 	resource = AppResource;
		// 	spyOn(resource, 'addSeller').and.callThrough();
		// 	SellersController = $controller('SellersController', {
		// 		$scope: scope,
		// 		AppResource: resource,
		// 		SellerDlg: mockFactory
		// 	});
		// }));
});
