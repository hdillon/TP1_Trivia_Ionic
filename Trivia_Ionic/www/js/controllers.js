angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope) {

})

.controller('JugarCtrl', function($scope, Chats) {

  
  $scope.getPregunta = function() {
    alert("?¿");
    $scope.IsVisible = true;
  };

})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AcercadeCtrl', function($scope) {
  $scope.miFoto = 'img/perfil.png';
});
