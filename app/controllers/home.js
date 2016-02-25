bim.controller('NewsHomeTPCtrl', ['$scope','$http', NewsHomeTPCtrl]);
bim.controller('NewsHomeBlgCtrl', ['$scope', NewsHomeBlgCtrl]);
function NewsHomeTPCtrl($scope,$http) {
    $http.get("data/newsHomeTabacPresse.json").
	   success(function(data, status,headers, config, statusText) {
		$scope.newsTabacPresse = data;				
	});
}
function NewsHomeBlgCtrl($scope) {
    $scope.newsBoulangerie = [{
        url: 'caisse-boulangerie.php',
        txt: 'La 1<sup>ère</sup> solution d\'encaissement et de gestion conçue pour les boulangeries grâce à laquelle vous gagnez du temps, vous optimisez votre gestion et animez votre point de vente'
    }];
}
