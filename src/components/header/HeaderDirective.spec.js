"use strict";

describe("HeaderDirective", function() {
  var template = "<headerdir></headerdir>";
  var scope;
  var compile;
  var element;
  var backend;
  var mockTranslateEN = {
    use: function(lang) {
    }
  };
  beforeEach(module("project3App"));
  beforeEach(inject(function($rootScope, $compile, $httpBackend) {
    scope = $rootScope.$new();
    compile = $compile;
    backend = $httpBackend;
    // We must declare the scope properties, they can be changed in each
    // describe block before we compile the directive. They don't need
    // to have a value however.
    //scope.smu = undefined;
    //scope.allow = false;
    // Doesn't really matter what the HTML looks like which is returned
    // when querying for the template...
    $httpBackend.expectGET("components/header/header.html").respond("<div></div>");
  }));
  describe("when editing", function() {
    // it("should add the class header", function() {
    //   // Compile the HTML fragment into our directive object:
    //   element = compile(template)(scope);
    //   // Since the directive uses a templateUrl, we must flush
    //   // the HTTP pipeline to ensure the template is properly loaded:
    //   backend.flush();
    //
    //   backend.when('GET', 'lang_en.json').passThrough();
    //
    //   //backend.flush();
    //   // Now we can start examining the scope of our directive.
    //   // Since it uses isolated scope, any changes it makes
    //   // to the scope object only affect its own scope,
    //   // which we must access explicitly:
    //   var isolatedScope = element.isolateScope();
    //   // Use regular expect() methods to check on the contents of
    //   // the directive scope, i.e. by using "isolatedScope" instead
    //   // of "scope".
    //   //expect(scope.whatever).not.toBeDefined();
    //   expect(element.hasClass('header')).toBe(true);
    // });
  });
  // Etc., more describe() blocks, and more it() blocks as well...
});
