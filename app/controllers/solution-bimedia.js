bim
  .controller('GammeMaterielCtrl', ['$scope',
                                    '$http',
                                    '$sce',
    function ($scope,
              $http,
              $sce) {
      $http
        .get('data/solutions_materielles_ecrans.json')
        .success(
          function(response) {
            $scope.gammeMateriel = response;
          }
        );
    }
  ])

  .controller('GammeAutresCtrl', ['$scope',
                                  '$http',
                                  '$sce',
    function ($scope,
              $http,
              $sce) {
      $http
        .get('data/solutions_materielles_autres.json')
        .success(
          function(response) {
            $scope.gammeAutres = response;
        });
    }
  ])

  .controller('GammeLogicielCtrl', ['$scope',
                                    '$http',
                                    '$sce',
    function ($scope,
              $http,
              $sce) {
      $http
        .get('data/solutions_logiciels.json')
        .success(
          function(response) {
            $scope.Logiciels = response;
          }
        );
    }
  ])

  .controller('PeripheriquesCtrl', ['$scope',
                                    '$http',
                                    '$sce',
    function ($scope,
              $http,
              $sce) {
      $http
        .get('data/solutions_peripheriques.json')
        .success(
          function(response) {
            $scope.Peripheriques = response;
          }
        );
    }
  ])

  .controller('BoulangerieCtrl', ['$scope',
                                  '$http',
                                  '$sce',
    function ($scope,
              $http,
              $sce) {
      $http
        .get('data/solutions_boulangerie.json')
        .success(
          function(response) {
            $scope.Boulangerie = response;
          }
        );
    }
  ]);
