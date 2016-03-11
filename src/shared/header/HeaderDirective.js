"use strict";

angular.module("project3App").directive("header", function () {
  return {
    restrict: "E",
    templateUrl: "shared/header/header.html",
    link: function(scope, element) {
      element.addClass('header');
    }
  };
});
