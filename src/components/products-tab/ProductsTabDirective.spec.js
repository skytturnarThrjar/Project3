"use strict";

describe("ProductTabDirective", function() {
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
    $httpBackend.expectGET("src/components/products-tab/index.html").respond("<div></div>");
    backend.flush();
  }));
  // describe("when editing", function() {
  //   it("should be of length 1", function() {
  //     element = compile(template)(scope);
  //     var isolatedScope = element.isolateScope();
  //     console.log(element);
  //
  //     expect(element.hasClass('productsTab')).toBe(true);
  //   });
  // });
});
