angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope) {

})

.controller('JugarCtrl', function($scope, Preguntas) {
  $scope.showComenzar = true;
  
  $scope.getPregunta = function() {
    $scope.showComenzar = false;
    $scope.showPregunta = true;
  };

    $scope.preguntas = Preguntas;
  $scope.addItem = function() {
    var name = prompt("What do you need to buy?");
    if (name) {
      $scope.items.$add({
        "name": name
      });
    }
  };


})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AcercadeCtrl', function($scope) {
  $scope.miFoto = 'img/perfil.png';
});
