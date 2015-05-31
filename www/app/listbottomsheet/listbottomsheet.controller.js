(function() {
  angular.module('MyIonicApp')
    .controller('ListBottomSheetCtrl', ListBottomSheetCtrl);

  ListBottomSheetCtrl.$inject = ['$mdBottomSheet'];

  function ListBottomSheetCtrl($mdBottomSheet) {
    var vm = this;
    vm.items = [
      { name: 'Share',  icon: 'share'        },
      { name: 'Upload', icon: 'file_upload'  },
      { name: 'Copy',   icon: 'content_copy' },
      { name: 'Print',  icon: 'print'        },
    ];
    
    vm.listItemClick = function($index) {
      var clickedItem = vm.items[$index];
      $mdBottomSheet.hide(clickedItem);
    };
  };
})()