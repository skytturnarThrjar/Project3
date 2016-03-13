"use strict";

describe("HeaderDirective", function() {
  var template = "<headerdir></headerdir>";
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
    backend.flush();
    $httpBackend.expectGET("components/header/header.html").respond("<div></div>");
  }));

  describe("when editing", function() {
    it("should add the class header", function() {
      element = compile(template)(scope);
      backend.flush();
      var isolatedScope = element.isolateScope();
      expect(element.hasClass('header')).toBe(true);
    });
  });
});
