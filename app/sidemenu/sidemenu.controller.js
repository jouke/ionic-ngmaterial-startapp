(function() {
  angular.module('MyIonicApp')
    .controller('SidemenuCtrl', SidemenuCtrl);

  SidemenuCtrl.$inject = [];

  function SidemenuCtrl(){
    var vm = this;
    vm.menu = [
      {
        link : '',
        title: 'Dashboard',
        icon: 'dashboard'
      },
      {
        link : '',
        title: 'Updates',
        icon: 'group'
      }
    ];
    vm.admin = [
      {
        link : '',
        title: 'People',
        icon: 'group'
      },
      {
        link : '',
        title: 'Settings',
        icon: 'settings'
      }
    ];
  }
})();