/*jshint -W043*/
bim
  .controller('RevuePresseCtrl', ['$scope',
                                  '$http',
    function ($scope,
              $http) {
      $http
        .get('data/revuedepresse.json')
        .success(
          function (response) {
            $scope.revuedepresse = response;
          }
        );

        $scope.newsBoulangerie = [{
          url: 'caisse-boulangerie.php',
          txt: "La 1<sup>ère</sup> solution d'encaissement et de gestion     \
                conçue pour les boulangeries grâce à laquelle vous gagnez du \
                temps, vous optimisez votre gestion et animez votre point de \
                vente"
        }];
    }
  ]);
