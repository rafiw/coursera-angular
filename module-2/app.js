(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ShoppingListController', ShoppingListController)
.controller('BaughtItemsController', BaughtItemsController)
.service('ShoppingListService', ShoppingListService);

ShoppingListController.$inject = ['ShoppingListService'];
function ShoppingListController(ShoppingListService) {
  var buyList = this;
  buyList.items = ShoppingListService.getItems();

  buyList.moveItem = function (index) {
    ShoppingListService.moveItem(index);
  }
}


BaughtItemsController.$inject = ['ShoppingListService'];
function BaughtItemsController(ShoppingListService) {
  var bougtList = this;
  bougtList.items = ShoppingListService.getBoughtItems();
  console.log(bougtList.items);
}


function ShoppingListService() {
  var service = this;
  // List of shopping items
  var items = [
    { name: "beer", quantity: 10 },
    { name: "coke", quantity: 10 },
    { name: "bread", quantity: 10 },
    { name: "milk", quantity: 10 },
    { name: "water", quantity: 10 },
  ];
  // List of baoght items
 var boughtItems = [];

  service.moveItem = function (itemIndex) {
    boughtItems.push(items[itemIndex]);
    items.splice(itemIndex, 1);
  };

  service.getItems = function () {
    return items;
  };
  service.getBoughtItems = function () {
    return boughtItems;
  };
}

})();
