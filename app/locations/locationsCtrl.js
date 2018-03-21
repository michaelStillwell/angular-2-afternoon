angular.module('devmtnTravel').service('test', function($http) {
    return $http({
        method: 'GET',
        url: 'https://practiceapi.devmountain.com/api/travel/travel-info'
    })
}).controller('locationsCtrl', function($scope, test) {
    test.getInfo('travel').then(response => {
        $scope.locations = response;
        console.log($scope.locations)
    });
});