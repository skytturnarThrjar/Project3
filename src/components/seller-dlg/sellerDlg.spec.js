"use strict";

describe("SellerDlg should be unit tested here", function() {
  beforeEach(module("project3App"));

  /*var modalInstance = $uibModal.open({
  };*/

  var seller = {
    SellerName: 'vala',
    SellerCategory: 'blómkál',
    SellerimagePath: 'http://innnes.is/wp-content/uploads/2015/08/graenmeti_innnes-3.jpg'
  };
  /*var mockFactory = {
    seller: {},
    isSuccess: true,
    show: function(seller) {
      return {
        then: function(cb) {
          if(mockFactory.isSuccess) {
            cb(mockFactory.seller);
        }
      }};
    }
  };*/

  //modalInstance.show.$open = function functionName() {};
/*  spyOn($uibModal, '$open').and.callThrough();

  it("Open modal", function() {
    $uibModal.$open();
    expect(modalInstance.show.$open).toHaveBeenCalled();
  });*

  /*modalInstance.show.$open = function functionName() {};
  spyOn(modalInstance.show, '$open').and.callThrough();

  it("Open modal", function() {
    modalInstance.show();
    expect(modalInstance.show.$open).toHaveBeenCalled();
  });*/

});
