"use strict";

describe("SellerDlgController should be unit tested here", function() {
  beforeEach(module("project3App"));
  var SellerDlgController;
  var scope;
  var sellerObj;

  describe("Add seller", function() {
    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      scope.$close = function() {};
      scope.$dismiss = function() {};
      sellerObj = {
        SellerName: 'vala',
        SellerCategory: 'blómkál',
        SellerimagePath: 'http://innnes.is/wp-content/uploads/2015/08/graenmeti_innnes-3.jpg'
      };
      spyOn(scope, '$close').and.callThrough();
      spyOn(scope, '$dismiss').and.callThrough();
      SellerDlgController = $controller('SellerDlgController', {
        $scope: scope,
        data:['add', sellerObj]
      });
    }));

    it("Click OK", function() {
      scope.onOk(sellerObj);
      expect(scope.$close).toHaveBeenCalled();
    });

    it("Click Cancel", function() {
      scope.onCancel();
      expect(scope.$dismiss).toHaveBeenCalled();
    });

    it("Add should be true", function() {
      expect(scope.add).toBe(true);
    });
  });

  describe("Edit seller", function() {
    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      scope.$close = function() {};
      scope.$dismiss = function() {};
      sellerObj = {
        SellerName: 'vala',
        SellerCategory: 'blómkál',
        SellerimagePath: 'http://innnes.is/wp-content/uploads/2015/08/graenmeti_innnes-3.jpg'
      };
      spyOn(scope, '$close').and.callThrough();
      spyOn(scope, '$dismiss').and.callThrough();
      SellerDlgController = $controller('SellerDlgController', {
        $scope: scope,
        data:['edit', sellerObj]
      });
    }));

    it("Add should be false", function() {
      expect(scope.add).toBe(false);
    });
  });


});
