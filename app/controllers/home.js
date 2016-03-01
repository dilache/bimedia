/*jshint -W043*/
bim
  .controller('NewsHomeTPCtrl', ['$scope',
                                 '$http',
    function ($scope,
              $http) {
      $http
        .get('data/newsHomeTabacPresse.json')
        .success(
          function(response) {
            $scope.newsTabacPresse = response;
          }
        );
    }
  ])

  .controller('NewsHomeBlgCtrl', ['$scope',
    function ($scope) {
      $scope.newsBoulangerie = [{
        url: 'caisse-boulangerie.php',
        txt: "La 1<sup>ère</sup> solution d'encaissement et de gestion conçue \
              pour les boulangeries grâce à laquelle vous gagnez du temps,    \
              vous optimisez votre gestion et animez votre point de vente"
      }];
    }
  ]);
