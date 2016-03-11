"use strict";

angular.module("project3App").controller("HeaderController", ['$scope', '$translate', '$rootScope',
function HeaderController($scope, $translate, $rootScope) {
    $scope.changeLanguage = function(langKey) {
        $translate.use(langKey);
      };

    $rootScope.$on('$translateChangeSuccess', function(event, data) {
      var language = data.language;
      $rootScope.lang = language;
    });
}]);
