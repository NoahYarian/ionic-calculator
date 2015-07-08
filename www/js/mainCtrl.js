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
        if ($scope.result.length < 10) {
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
    } else {
      if ($scope.result.length < 10) {
        if (value === ".") {
          if ($scope.result.indexOf(".") === -1) {
            // if ($scope.result === "-") {
            //   $scope.result = "-0.";
            // } else {
              $scope.result += ".";
            // }
          }
        // } else if (value === "-" && $scope.result === "0") {
        //   $scope.result = "-";
        } else {
          if ($scope.result === "0") {
            $scope.result = value.toString();
          } else {
            $scope.result += value.toString();
          }
        }
      }
    }
  }

  $scope.arith = function(type) {
    // if (type === "sub" && ($scope.result === "0" || $scope.operator)) {
    //   $scope.digit("-");
    // } else {
      $scope.firstOperand = +$scope.result;
      $scope.operator = type;
    // }
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
    $scope.round();
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
    $scope.round();
  }

  $scope.round = function() {
    var num = +$scope.result;
    if (num >= 1) {
      num = num.toPrecision(10);
      if (num.length > 11) {
        num = (+num).toPrecision(5);
      } else {
        num = num % 1 === 0 ? (+num).toFixed() : num;
      }
    } else if (num >= 0) {
      num = num.toPrecision(9);
    } else if (num > -1) {
      num = num.toPrecision(8);
    } else {
      num = num.toPrecision(9);
    }
    $scope.result = num;
    // $scope.result = num % 1 === 0 ? (+num).toFixed() : +num;
  }

}]);
