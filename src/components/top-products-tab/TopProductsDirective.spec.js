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
    //ÞETTA ER EKKI AÐ TESTA KÓÐANN!
    it("should be of length 1", function() {
      element = compile(template)(scope);
      var isolatedScope = element.isolateScope();
      console.log(element);

      expect(element.length).toBe(1);
    });
  });
});
