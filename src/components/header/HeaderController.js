"use strict";

angular.module("project3App").controller("HeaderController", ['$scope', '$translate', '$rootScope', '$location',
function HeaderController($scope, $translate, $rootScope, $location) {

    $rootScope.lang = 'en';

    $scope.changeLanguage = function(langKey) {
        $translate.use(langKey);
        $rootScope.lang = langKey;
    };

    $scope.goBack = function() {
      $location.path('/');
    };
}]);
