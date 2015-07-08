angular.module('starter', ['ionic'])

.controller('MainCtrl', ["$scope", function($scope) {

  $scope.result = "0";
  $scope.secondOperandStarted = false;
  $scope.equaled = false;

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

  $scope.adv = function(type) {
    switch (type) {
      case "sqr":
        $scope.result = (+$scope.result * +$scope.result).toString();
        break;
      case "sqrt":
        $scope.result = (Math.sqrt(+$scope.result)).toString();
        break;
      case "sin":
        $scope.result = (Math.sin(+$scope.result)).toString();
        break;
      case "cos":
        $scope.result = (Math.cos(+$scope.result)).toString();
        break;
      case "tan":
        $scope.result = (Math.tan(+$scope.result)).toString();
        break;
      case "asin":
        $scope.result = (Math.arcsin(+$scope.result)).toString();
        break;
      case "acos":
        $scope.result = (Math.arccos(+$scope.result)).toString();
        break;
      case "atan":
        $scope.result = (Math.arctan(+$scope.result)).toString();
        break;
    }
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
    $scope.equaled = true;
  }

}]);
