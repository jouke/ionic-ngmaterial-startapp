(function() {
  angular.module('MyIonicApp')
    .controller('ToolbarCtrl', ToolbarCtrl);

  ToolbarCtrl.$inject = ['$mdSidenav', '$mdBottomSheet', '$state'];

  function ToolbarCtrl($mdSidenav, $mdBottomSheet, $state){
    var vm = this;

    vm.go                  = function(dest  ) { $state.go(dest)};
    vm.toggleSidenav       = function(menuId) { $mdSidenav(menuId).toggle();};
    vm.showListBottomSheet = function($event) {
      $mdBottomSheet.show({
        templateUrl: 'app/listbottomsheet/listbottomsheet.html',
        controller : 'ListBottomSheetCtrl as lbs',
        targetEvent: $event
      }).then(function(clickedItem) {
        console.log(clickedItem.name + ' clicked!');
      });
    };
    
  }
})();