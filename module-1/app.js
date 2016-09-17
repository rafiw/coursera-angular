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
      document.getElementById("result").style.color = "red";
      document.getElementById("lunch-menu").style.borderColor = "red";
    } else if (size <= 3) {
      $scope.output = "Enjoy!";
      document.getElementById("result").style.color = "green";
      document.getElementById("lunch-menu").style.borderColor = "green";
    } else {
      $scope.output = "Too much!";
      document.getElementById("result").style.color = "green";
      document.getElementById("lunch-menu").style.borderColor = "green";
    }
  };
};

})();
