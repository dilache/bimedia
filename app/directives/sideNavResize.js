bim.directive('resize', function ($window) {
    return function (scope, element) {
        var w = angular.element($window);
        var sideNav = document.getElementById('page-wrapper');
        var $sideNav = angular.element(sideNav);
        scope.getWindowDimensions = function () {
            return {
                'w': w.width()
            };
        };
        scope.$watch(scope.getWindowDimensions, function (newValue, oldValue) {
            //console.log( newValue.w );
            if ( newValue.w < 900 ) {
                $sideNav.toggleClass('');
            } else {
                $sideNav.toggleClass('open');
            }
                
        }, true);

        w.bind('resize', function () {
            scope.$apply();
        });
    }
})