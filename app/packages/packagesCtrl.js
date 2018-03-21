angular.module('devmtnTravel').service('test', function($http) {
    this.getInfo = function() {
        return $http({
            method: 'GET',
            url: 'https://practiceapi.devmountain.com/api/travel/package-info'
        }).then(response => response.data)
    }
}).controller('packagesCtrl', function($scope, $stateParams, test) {
    test.getInfo().then(response => {
        $scope.allPackages = response;

        if ( $stateParams.country ) {
            $scope.packages = $scope.allPackages.filter(function(package) {
                return package.country === $stateParams.country;
            })
        }

        console.log($scope.packages)
    })
});