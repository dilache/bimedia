bim.controller('RevuePresseCtrl', ['$scope','$http', RevuePresseCtrl]);
function RevuePresseCtrl($scope,$http) {
    $http.get("data/revuedepresse.json").
	   success(function(data, status,headers, config, statusText) {
		$scope.revuedepresse = data;				
	});
    $scope.newsBoulangerie = [{
        url: 'caisse-boulangerie.php',
        txt: 'La 1<sup>ère</sup> solution d\'encaissement et de gestion conçue pour les boulangeries grâce à laquelle vous gagnez du temps, vous optimisez votre gestion et animez votre point de vente'
    }];
}
