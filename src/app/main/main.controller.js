(function() {
  'use strict';

  angular
    .module('myToDo')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($resource) {
    var vm = this;
    vm.todos = [];
    var resourceObj = $resource('https://blazing-heat-8489.firebaseio.com/teju.json');
    var getResp = resourceObj.get({isArray:true});
    getResp.$promise.then(function(resp){
      console.log(resp);
      angular.forEach(resp,function(task){
        // console.log(task);
        vm.todos.push(task);
      });
    },function(){

    })
    // console.log(vm.todos);
    vm.addTodo = function(){
    var resourceObj = $resource('https://blazing-heat-8489.firebaseio.com/teju.json');
    var resp = resourceObj.save(vm.todo);
    resp.$promise.then(function(resp){
      vm.todo.id = resp.name
      // Success part
      console.log('Added tasks'); 
      console.log(resp);
      vm.todos.push(vm.todo);
    },function(error){
      // Error part
      console.log(error);
    });
    
  }

    vm.removeTodo = function(id){
      var resourceObj = $resource('https://blazing-heat-8489.firebaseio.com/teju/'+id+'.json');
      var rsp = resourceObj.delete();
    }
  
}


})();
