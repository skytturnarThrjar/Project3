"use strict";

describe("ProductDlgController should be unit tested here", function() {
  beforeEach(module("project3App"));
  var ProductDlgController;
  var scope;
  var productObj;

  describe("add product", function() {
    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      scope.$close = function() {};
      scope.$dismiss = function() {};
      productObj = {
        productName: 'vala',
        productPrice: 'blómkál',
        productQuantitySold: 'http://innnes.is/wp-content/uploads/2015/08/graenmeti_innnes-3.jpg'
      };
      spyOn(scope, '$close').and.callThrough();
      spyOn(scope, '$dismiss').and.callThrough();
      ProductDlgController = $controller('ProductDlgController', {
        $scope: scope,
        data:['add', productObj]
      });
    }));

    it("Click OK", function() {
      scope.onOk(productObj);
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

  describe("edit product", function() {
    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      scope.$close = function() {};
      scope.$dismiss = function() {};
      productObj = {
        productName: 'vala',
        productPrice: 'blómkál',
        productQuantitySold: 'http://innnes.is/wp-content/uploads/2015/08/graenmeti_innnes-3.jpg'
      };
      spyOn(scope, '$close').and.callThrough();
      spyOn(scope, '$dismiss').and.callThrough();
      ProductDlgController = $controller('ProductDlgController', {
        $scope: scope,
        data:['edit', productObj]
      });
    }));

    it("Click OK", function() {
      scope.onOk(productObj);
      expect(scope.$close).toHaveBeenCalled();
    });

    it("Click Cancel", function() {
      scope.onCancel();
      expect(scope.$dismiss).toHaveBeenCalled();
    });

    it("Add should be false", function() {
      expect(scope.add).toBe(false);
    });
  });

});
