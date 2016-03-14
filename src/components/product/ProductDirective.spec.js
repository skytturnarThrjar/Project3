"use strict";

describe("ProductDirective", function() {
  var template = "<product></product>";
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
    $httpBackend.expectGET("/src/components/product/Product.html").respond("<div></div>");
  }));
  describe("when editing", function() {
    it("should include html", function() {
      element = compile(template)(scope);
      backend.flush();
      expect(element[0].outerHTML).toContain('<div></div>');
    });
  });
});
