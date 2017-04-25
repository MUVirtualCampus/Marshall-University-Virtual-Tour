import template from './home.html!text';
import helpTemplate from './help.html!text';

import HelpController from './help-controller'

function homeRoute($stateProvider, $urlRouterProvider) {

  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise('/dashboard');

  return $stateProvider
    .state('home', {
      url: '/',
      abstract: true,
      template: template,
      controller: 'HomeController as ctrl',
    })
     .state('home.help', {
      url: 'help',
      template: helpTemplate,
      controller: HelpController,
      controllerAs: 'ctrl'
    });

}

homeRoute.$inject = ['$stateProvider', '$urlRouterProvider'];
export default homeRoute;
