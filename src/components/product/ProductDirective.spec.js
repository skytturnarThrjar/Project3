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
    //backend.flush();
    $httpBackend.expectGET("/src/components/product/Product.html").respond("<div></div>");
  }));
  describe("when editing", function() {
    it("should add the class product", function() {
      element = compile(template)(scope);

      backend.flush();

      var isolatedScope = element.isolateScope();
      console.log(element[0]);
      expect(element[0].outerHTML).toContain('<div></div>');
    });
  });
});
