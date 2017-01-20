(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService'];

function SignUpController(MenuService) {
    console.log('loading signup ctrl');
  var ctrl = this;
  ctrl.warn ='';
  ctrl.msg='';
  ctrl.submit = function() {
  console.log('menu is '+ctrl.user.menu);
  MenuService.getUserPref(ctrl.user.menu).then(function(response) {
    ctrl.favDish = response.data;
    ctrl.warn ='OK';
    MenuService.register(ctrl.user, response.data);
    ctrl.msg='Your information has been saved';
    }, function (response) {
      ctrl.warn ='No such menu number exists';
    }) 
  }
}
})();
