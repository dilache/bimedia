/*bim.controller('GammeMaterielCtrl', ['$scope','$http', GammeMaterielCtrl]);
function GammeMaterielCtrl($scope,$http) {
    $http.get("data/solutions_materielles_ecrans.json").
    //$http.get("data/newsTabacPresse.json").
	   success(function(data, status,headers, config, statusText) {
		$scope.gammeMateriel = data;				
	});
}*/

bim.controller('GammeMaterielCtrl', ['$scope','$http','$sce', GammeMaterielCtrl]);
function GammeMaterielCtrl($scope,$http,$sce) {
    $http.get("data/solutions_materielles_ecrans.json").
    //$http.get("data/newsTabacPresse.json").
	   success(function(data, status,headers, config, statusText) {
		$scope.gammeMateriel = data;				
	});
}
bim.controller('GammeAutresCtrl', ['$scope','$http','$sce', GammeAutresCtrl]);
function GammeAutresCtrl($scope,$http,$sce) {
    $http.get("data/solutions_materielles_autres.json").
	   success(function(data, status,headers, config, statusText) {
        //console.log(data);
		$scope.gammeAutres = data;				
	});
}
bim.controller('GammeLogicielCtrl', ['$scope','$http','$sce', GammeLogicielCtrl]);
function GammeLogicielCtrl($scope,$http,$sce) {
    $http.get("data/solutions_logiciels.json").
	   success(function(data, status,headers, config, statusText) {
        //console.log(data);
		$scope.Logiciels = data;				
	});
}
bim.controller('PeripheriquesCtrl', ['$scope','$http','$sce', PeripheriquesCtrl]);
function PeripheriquesCtrl($scope,$http,$sce) {
    $http.get("data/solutions_peripheriques.json").
	   success(function(data, status,headers, config, statusText) {
        //console.log(data);
		$scope.Peripheriques = data;				
	});
}
bim.controller('BoulangerieCtrl', ['$scope','$http','$sce', BoulangerieCtrl]);
function BoulangerieCtrl($scope,$http,$sce) {
    var self = this;
    $http.get("data/solutions_boulangerie.json").
	   success(function(data, status,headers, config, statusText) {
        //console.log(data);$sce.trustAsHtml(someHtmlVar)
		$scope.Boulangerie = data;				
		//$scope.Boulangerie = $sce.trustAsHtml(data);				
	});
}