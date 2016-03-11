"use strict";

angular.module("project3App").controller("HeaderController", function HeaderController($scope, $translate, $rootScope) {
  $scope.changeLanguage = function(langKey) {
      $translate.use(langKey);
    };

    //tjékka á þessu
    $rootScope.$on('$translateChangeSuccess', function(event, data) {
      var language = data.language;
      $rootScope.lang = language;
    });
});
