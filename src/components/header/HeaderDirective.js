"use strict";

angular.module("project3App").directive("headerdir", function () {
  return {
    restrict: "E",
    templateUrl: "components/header/header.html",
    link: function(scope, element) {
      element.addClass('header');
    }
  };
});
