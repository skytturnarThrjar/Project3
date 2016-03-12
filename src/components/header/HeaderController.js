"use strict";

angular.module("project3App").controller("HeaderController", ['$scope', '$translate', '$rootScope',
function HeaderController($scope, $translate, $rootScope) {

    $rootScope.lang = 'en';

    $scope.changeLanguage = function(langKey) {
        $translate.use(langKey);
        $rootScope.lang = langKey;
    };
}]);
