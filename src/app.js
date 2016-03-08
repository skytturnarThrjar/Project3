"use strict";

angular.module("project3App", ["ngRoute", "ui.bootstrap", "sharedServices"])
.config(function ($routeProvider) {
	$routeProvider.when("/", {
		controller: "SellersController",
		templateUrl: "components/sellers/index.html"
	})
	.when("/:id", {
	      templateUrl: "/src/components/seller-details/index.html",
	      controller: "SellersDetailsController"
	    });
});
