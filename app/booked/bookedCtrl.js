angular.module('devmtnTravel').controller('bookedCtrl', function($scope, $stateParams, test) {
    test.getInfo('package').then(response => {
        $scope.allPackages = response;

        if ( $stateParams.id ) {
            $scope.packageIndex = $scope.allPackages.findIndex(function(package) {
                return package.id === parseInt($stateParams.id);
            })

            if ( $scope.packageIndex !== -1 ) {
                $scope.package = $scope.allPackages[ $scope.packageIndex ];
            }
        }
    });
});