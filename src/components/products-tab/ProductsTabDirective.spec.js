"use strict";

describe("ProductsTabDirective", function() {
  var template = "<productsTab></productsTab>";
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
    $httpBackend.expectGET("/src/components/products-tab/index.html").respond("<div></div>");
  }));
  describe("when editing", function() {
    it("directive should include html", function() {
      element = compile(template)(scope);
      expect(element[0].outerHTML).toContain('</productstab>');
    });
  });
});
