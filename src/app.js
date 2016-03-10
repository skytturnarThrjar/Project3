"use strict";

angular.module("project3App", ["ngRoute", "ui.bootstrap", "sharedServices", "angular-storage", "pascalprecht.translate"])
.config(function ($routeProvider, $translateProvider) {
	$routeProvider.when("/", {
		controller: "SellersController",
		templateUrl: "components/sellers/index.html"
	})
	.when("/:id", {
	      templateUrl: "/src/components/seller-details/index.html",
	      controller: "SellersDetailsController"
	});

	$translateProvider.useStaticFilesLoader({
		prefix: 'lang_',
		suffix: '.json'
	});

	$translateProvider.use('is');
});
