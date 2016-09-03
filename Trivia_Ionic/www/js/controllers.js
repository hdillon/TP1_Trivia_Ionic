angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope) {

})

.controller('JugarCtrl', function($scope) {
  $scope.showComenzar = true;
  
  $scope.getPregunta = function() {
    $scope.showComenzar = false;
    alert("?¿");
    $scope.showPregunta = true;
  };

})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AcercadeCtrl', function($scope) {
  $scope.miFoto = 'img/perfil.png';
});
