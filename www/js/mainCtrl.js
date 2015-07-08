angular.module('starter', ['ionic'])

.controller('MainCtrl', ["$scope", function($scope) {

  $scope.result = "0";
  $scope.secondOperandStarted = false;

  $scope.firstOperand;
  $scope.operator;
  $scope.secondOperand;

  $scope.digit = function(value) {
    if ($scope.operator) {
      if (!$scope.secondOperandStarted) {
        if (value === ".") {
          $scope.result = "0.";
        } else {
          $scope.result = value.toString();
        }
        $scope.secondOperandStarted = true;
      } else {
        if (value === ".") {
          if ($scope.result.indexOf(".") === -1) {
            $scope.result += value.toString();
          }
        } else {
          if ($scope.result === "0") {
            $scope.result = value.toString();
          } else {
            $scope.result += value.toString();
          }
        }
      }
    } else {
      if (value === ".") {
        if ($scope.result.indexOf(".") === -1) {
          $scope.result += value.toString();
        }
      } else {
        if ($scope.result === "0") {
          $scope.result = value.toString();
        } else {
          $scope.result += value.toString();
        }
      }
    }
  }

  $scope.arith = function(type) {
    $scope.firstOperand = +$scope.result;
    $scope.operator = type;
  }

  $scope.clear = function() {
    $scope.result = "0";
    $scope.secondOperandStarted = false;
    $scope.operator = null;
  }

  $scope.equals = function() {
    if ($scope.operator) {
      $scope.secondOperand = +$scope.result;
    }
    switch ($scope.operator) {
      case "add":
        $scope.result = ($scope.firstOperand + $scope.secondOperand).toString();
        break;
      case "sub":
        $scope.result = ($scope.firstOperand - $scope.secondOperand).toString();
        break;
      case "div":
        $scope.result = ($scope.firstOperand / $scope.secondOperand).toString();
        break;
      case "mult":
        $scope.result = ($scope.firstOperand * $scope.secondOperand).toString();
        break;
    }
  }

}]);
