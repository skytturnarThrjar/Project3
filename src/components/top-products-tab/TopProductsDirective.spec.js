"use strict";

describe("TopProductTabDirective", function() {
  var template = "<topProducts></topProducts>";
  var scope;
  var compile;
  var element;
  var backend;

  beforeEach(module("project3App"));
  beforeEach(inject(function($rootScope, $compile, $httpBackend) {
    scope = $rootScope.$new();
    compile = $compile;
    backend = $httpBackend;

    $httpBackend.expectGET("lang_en.json").respond("");
    $httpBackend.expectGET("src/components/top-products-tab/top-products.html").respond("<div></div>");
  }));
  describe("when editing", function() {
    it("directive should include html", function() {
      element = compile(template)(scope);
      expect(element[0].outerHTML).toEqual('<topproducts class="ng-scope"></topproducts>');
    });
  });
});
