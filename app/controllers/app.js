/* header */
bim.controller('headerCtrl', ['$scope', headerCtrl]);
function headerCtrl($scope) {
    $scope.header = 'views/header.html';
}
/* navigation */
bim.controller('navigationCtrl', ['$scope', navigationCtrl]);
function navigationCtrl($scope) {
    $scope.navigation = 'views/navigation.html';
}
/* footer */
bim.controller('footerCtrl', ['$scope', footerCtrl]);
function footerCtrl($scope) {
    $scope.footer = 'views/footer.html';
}
bim.controller("navCtrl", ["$scope", navCtrl]);
function navCtrl($scope) {}

bim.controller("SidebarCtrl", ["$scope", SidebarCtrl]);
function SidebarCtrl( elem ) {
    var n = document.getElementById('n');
    var $n = angular.element(n);
    var sideNav = document.getElementById('page-wrapper');
    var $sideNav = angular.element(sideNav);
    
    $n.bind('click', function () {
        $sideNav.toggleClass('open');
    });
}