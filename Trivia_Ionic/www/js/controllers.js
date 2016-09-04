angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope) {

})

.controller('JugarCtrl', function($scope, Preguntas, Respuestas, Opciones ) {
  $scope.showComenzar = true;
  
  $scope.getPregunta = function() {
    $scope.showComenzar = false;
    $scope.showPregunta = true;
  };

  $scope.setRespuesta = function(idOpcion, idPregunta, Respuesta) {
    alert(idOpcion+" "+idPregunta+" "+Respuesta)
  };
    $scope.preguntas = Preguntas;
    $scope.respuestas = Respuestas;
    $scope.opciones = Opciones;
    $scope.random = Math.round(Math.random() * 2); 
    console.log($scope.random); 
  /*$scope.addItem = function() {
    var name = prompt("What do you need to buy?");
    if (name) {
      $scope.items.$add({
        "name": name
      });
    }
  };*/


})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AcercadeCtrl', function($scope) {
  $scope.miFoto = 'img/perfil.png';
});
