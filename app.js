if (Meteor.isClient) {
    angular.module('angular-meteor-demo', ['angular-meteor']).config(function () {
        // empty block
    }).run(function () {
        // empty block
    }).controller('IndexCtrl', ['$scope', function ($scope) {
        $scope.name = "Matthias Eckhart";
    }]);
}
