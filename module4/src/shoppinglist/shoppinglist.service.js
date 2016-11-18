(function () {
'use strict';

angular.module('ShoppingList')
.service('ShoppingListService', ShoppingListService);


ShoppingListService.$inject = ['$http']
function ShoppingListService($http) {
  var service = this;
  service.getItems = function () {
    return $http.get('https://davids-restaurant.herokuapp.com/categories.json').then(function (response) {
      return response.data;
    });
  };
  service.getItemsForCategory = function(categoryShortName) {
    var config = {};
    if (categoryShortName) {
      config.params = {'category': categoryShortName};
    }
    return $http.get('https://davids-restaurant.herokuapp.com/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };
}

})();
