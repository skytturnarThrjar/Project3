"use strict";

describe("ProductsTabController should be unit tested here", function() {
  beforeEach(module("project3App"));
  var HeaderController;
  var scope;
  var resource;
  var mockTranslateISL = {
		use: function(lang) {
		}
	};

  var mockTranslateEN = {
    use: function(lang) {
    }
  };

  describe("Icelandic", function() {
    beforeEach(inject(function($rootScope, $controller, AppResource) {
      scope = $rootScope.$new();
      resource = AppResource;
      spyOn(mockTranslateISL, 'use').and.callThrough();
      HeaderController = $controller('HeaderController', {
        $scope: scope,
        $translate: mockTranslateISL,
      });
    }));

    it("Function changeLanguage should been called with is", function() {
      scope.changeLanguage("is");
      expect(mockTranslateISL.use).toHaveBeenCalledWith("is");
    });

    it("scope.lang becomes is", function() {
      scope.changeLanguage("is");
      expect(scope.lang).toEqual("is");
    });
  });

  describe("English", function() {
    beforeEach(inject(function($rootScope, $controller, AppResource) {
      scope = $rootScope.$new();
      resource = AppResource;
      spyOn(mockTranslateEN, 'use').and.callThrough();
      HeaderController = $controller('HeaderController', {
        $scope: scope,
        $translate: mockTranslateEN,
      });
    }));

    it("Function changeLanguage should been called with en", function() {
      scope.changeLanguage("en");
      expect(mockTranslateEN.use).toHaveBeenCalledWith("en");
    });

    it("scope.lang becomes en", function() {
      scope.changeLanguage("en");
      expect(scope.lang).toEqual("en");
    });
  });
});
