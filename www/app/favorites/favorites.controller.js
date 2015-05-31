(function() {
  angular.module('MyIonicApp')
    .controller('FavoritesCtrl', FavoritesCtrl);

  FavoritesCtrl.$inject = ['$mdDialog'];

  function FavoritesCtrl($mdDialog){
    var vm = this;
    vm.showAdd = function(ev) {
      $mdDialog.show({
        controller: 'DialogCtrl as dlg',
        templateUrl: 'app/dialog/dialog.html',
        targetEvent: ev,
      })
      .then(function(answer) {
        console.log('You said the information was "' + answer + '".');
      }, function() {
        console.log('You cancelled the dialog.');
      });
    };

    vm.activity = [
        {
          what: 'Here\'s an update',
          who: 'Tomas Visser',
          when: '2 hours ago',
          notes: ""
        },
        {
          what: 'Can I say something?',
          who: 'Nikki Visser',
          when: '5 hours ago',
          notes: ""
        },
        {
          what: 'Where are you?',
          who: 'Jacqueline Douma',
          when: '5 hours ago',
          notes: ""
        },
        {
          what: 'Shall we meet for coffee?',
          who: 'Mickey Groeneweg',
          when: '6 hours ago',
          notes: ""
        },
        {
          what: 'My birthday',
          who: 'Nienke van der Wal',
          when: 'Yesterday at 10 uur',
          notes: ""
        },
      ];
  }
})();