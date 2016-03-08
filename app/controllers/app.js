bim
  .controller('headerCtrl', ['$scope',
    function ($scope) {
      $scope.header = 'views/header.html';
    }
  ])

  .controller('navigationCtrl', ['$scope',
    function ($scope) {
      $scope.navigation = 'views/navigation.html';
    }
  ])

  .controller('footerCtrl', ['$scope',
    function ($scope) {
      $scope.footer = 'views/footer.html';
    }
  ])

  .controller('navCtrl', ['$scope',
    function ($scope) {}
  ])

  .controller('SidebarCtrl', ['$scope',
    function ( elem ) {
      var n        = document.getElementById('n');
      var $n       = angular.element(n);
      var sideNav  = document.getElementById('page-wrapper');
      var $sideNav = angular.element(sideNav);

      $n.bind('click', function () {
        $sideNav.toggleClass('open');
      });
    }
  ]);
