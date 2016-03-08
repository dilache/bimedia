var bim = angular.module('bimedia', ['ui.router', 'ngSanitize']);

bim.config(['$stateProvider',
            '$urlRouterProvider',
  function($stateProvider,
           $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('index', {
        url:         '/',
        templateUrl: 'views/home.html'
      })

      .state('bimedia', {
        url:         '/bimedia',
        templateUrl: 'views/bimedia.html'
      })

      .state('bimedia.content', {
        url:         '/:content',
        templateUrl: 'views/bimedia.html'
      })

      .state('solutions-bimedia', {
        url:         '/solutions-bimedia',
        templateUrl: 'views/solutions-bimedia_materiel.html'
      })

      .state('materiel', {
        url:         '/bimedia-materiel',
        templateUrl: 'views/solutions-bimedia_materiel.html'
      })

      .state('logiciel', {
        url:         '/bimedia-logiciel',
        templateUrl: 'views/solutions-bimedia_logiciel.html'
      })

      .state('boulangerie', {
        url:         '/bimedia-boulangerie',
        templateUrl: 'views/solutions-bimedia_boulangerie.html'
      })

      .state('diversifier', {
        url:         '/diversifier-son-activite',
        templateUrl: 'views/diversifier.html'
      })

      .state('diversifier.content', {
        url:         '/:content',
        templateUrl: 'views/diversifier.html'
      })

      .state('bimedia-vous', {
        url:         '/bimedia-et-vous',
        templateUrl: 'views/bimediaetvous.html'
      })

      .state('eshop', {
        url:         '/diversifier/eshop',
        templateUrl: 'views/diversifier.html'
      })

      .state('contact', {
        url:         '/contact',
        templateUrl: 'views/contact.html'
      });
    }
  ]);
