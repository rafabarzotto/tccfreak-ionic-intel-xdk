angular.module('controllerSwipe.api', [])
    .controller('MyCtrlSwipeList', function ($scope) {
        $scope.shouldShowDelete = false;
        $scope.shouldShowReorder = false;
        $scope.listCanSwipe = true
    });