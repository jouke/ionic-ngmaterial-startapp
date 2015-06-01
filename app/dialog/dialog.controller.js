(function() {
  angular.module('MyIonicApp')
    .controller('DialogCtrl', DialogCtrl);

  DialogCtrl.$inject = ['$mdDialog'];

  function DialogCtrl($mdDialog) {
    var vm = this;
    vm.hide = function() {
      $mdDialog.hide();
    };
    vm.cancel = function() {
      $mdDialog.cancel();
    };
    vm.answer = function(answer) {
      $mdDialog.hide(answer);
    };
  };
})();