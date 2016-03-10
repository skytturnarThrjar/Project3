"use strict";

describe("ModalController should be unit tested here", function() {
	  beforeEach(module("project3App"));
		var ModalController;
		var scope;
		var resource;
    var mockModal;
		var modal;
    //});
		// var mockModal = {
		// 	mockSeller: {},
		// 	isSuccess: true,
		// 	open: function() {
		// 		return { result: {
		// 			then: function(cb) {
		// 				if(mockModal.isSuccess) {
		// 					cb(mockModal.mockSeller);
		// 				}
		// 			}
		// 		}};
		// 	}
		// };

		// beforeEach(inject(function ($rootScope, $controller, AppResource) {
    //     scope = $rootScope.$new();
    //     mockModal = jasmine.createSpyObj('modal', ['close', 'dismiss']);
    //     ModalController = $controller('ModalController', {$scope: scope, $modal:mockModal});
    // }));

		beforeEach(inject(function($rootScope, $controller, AppResource) {
			scope = $rootScope.$new();
      mockModal = {
        ok: jasmine.createSpy('uibModalInstance.close'),
        cancel: jasmine.createSpy('uibModalInstance.dismiss'),
        result: { then: jasmine.createSpy('uibModalInstance.result.then') }
      };
      ModalController =  $controller('ModalController', {
        $scope: scope,
        $uibModalInstance: mockModal
      });
		}));

		// it("Click OK", function() {
		// 	var sellerObj = {
		// 		SellerName: 'vala',
		// 		SellerCategory: 'blómkál',
		// 		SellerimagePath: 'http://innnes.is/wp-content/uploads/2015/08/graenmeti_innnes-3.jpg'
		// 	};
		// 	scope.ok(sellerObj);
		// 	expect(mockModal.close).toHaveBeenCalled();
		// });
		//
		// it("Click Cancel", function() {
		// 	scope.cancel();
		// 	expect(mockModal.dismiss).toHaveBeenCalled();
		// });

    // it("Click cancel", function() {
    //   expect(scope.cancel).toHaveBeenCalled();
    // });

		// it("Possible to add seller", function() {
		// 	var sellerObj = {
		// 		SellerName: 'vala',
		// 		SellerCategory: 'blómkál',
		// 		SellerimagePath: 'http://innnes.is/wp-content/uploads/2015/08/graenmeti_innnes-3.jpg'
		// 	};
		// 	mockModal.mockSeller = sellerObj;
		// 	scope.addSellerfun();
		// 	//expect(resource.addSeller).toHaveBeenCalled();
		// 	expect(resource.addedSeller).toBe(true);
		// });
});
