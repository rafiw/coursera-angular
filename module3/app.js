(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath',"https://davids-restaurant.herokuapp.com/menu_items.json")
.directive('foundItems', foundItems);


function foundItems() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      items: '=myList',
      onRemove: '&',
      error:'@error',
    },
    controller: NarrowItDownController,
    controllerAs: 'list',
    bindToController: true
  };

  return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var list = this;
  list.items = [];
  list.searchTerm ='';
  list.errorMsg = '';
  list.getItems = function() {
    list.items=[];
    if (list.searchTerm.length==0) {
      list.errorMsg ="Nothing found";
      return;
    }
    var promise = MenuSearchService.getMatchedMenuItems();
      promise.then(function (response) {
        if (list.searchTerm.length>0) {
        for (var i =0; i < response.data['menu_items'].length;i++) {
          if (response.data['menu_items'][i]['description'].search(list.searchTerm) > -1) {
            list.items.push(response.data['menu_items'][i]);
          }
        }
      }
        if (list.items.length == 0 || list.searchTerm==0)
          list.errorMsg ="Nothing found";
      })
      .catch(function (error) {
        console.log("Something went terribly wrong.");
      });
  }
  list.removeItem = function(index){
    list.items.splice(index,1);
  }
  };

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;
  service.getMatchedMenuItems = function() {
    var response = $http({
        method: "GET",
        url: (ApiBasePath)
      });
      return response;
  };
}

})();
