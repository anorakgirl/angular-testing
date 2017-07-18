angular.module('forms', []);
angular
  .module('forms',[])
  .directive('demoFormField', FormFieldDirective);

/**
 * A row in a form
 * @constructor
 */
function FormFieldDirective() {
  return {
    restrict: 'E',
    scope: {
      label: '=',
      data: '='
    },
    controller: function($scope) {

      $scope.isFocused = false;
      $scope.isBlurred = false;

      $scope.focus = function() {
        $scope.isFocused = true;
        $scope.isBlurred = false;
      };

      $scope.blur = function() {
        $scope.isFocused = false;
        $scope.isBlurred = true;
      };

    },
    templateUrl: 'forms/field.html'
  };
}
