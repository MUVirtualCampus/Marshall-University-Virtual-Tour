import template from './home.html!text';

function homeRoute($stateProvider, $urlRouterProvider) {

  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise('/dashboard');

  return $stateProvider
    .state('home', {
      url: '/',
      abstract: true,
      template: template,
      controller: 'HomeController as ctrl',
    });

}

homeRoute.$inject = ['$stateProvider', '$urlRouterProvider'];
export default homeRoute;
