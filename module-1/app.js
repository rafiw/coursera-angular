(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchFuncChecker);
LunchFuncChecker.$inject = ['$scope'];
function LunchFuncChecker($scope) {
  $scope.food = "";
  $scope.output = "";
  $scope.checkHungry = function () {
    var arr = $scope.food.split(',');
    var size = 0;
    arr.forEach(function (item, index, array) {
      if (item.trim().length)
        size++;
    });
    $scope.test = size;
    if (size == 0) {
      $scope.output = "Please enter data first"
    } else if (size <= 3) {
      $scope.output = "Enjoy!";
    } else {
      $scope.output = "Too much!";
    }
  };
};

})();
