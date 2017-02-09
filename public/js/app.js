import angular from 'angular';

import 'angular-messages';
import 'angular-animate';
import 'angular-loading-bar';
import 'angular-material';
import 'angular-ui-router';
import 'angular-bootstrap';
import 'angular-ui-select';
import 'angular-bootstrap-colorpicker';

import homeModule from './pages/home-module';
import dashboardModule from './pages/dashboard/dashboard-module';
import servicesModule from './app-services';
import waecModule from './pages/waec/waec-module';

let dependencies = [
  'angular-loading-bar',
  'ngMessages',
  'ngAnimate',
  'ngMaterial',
  'ui.router',
  'ui.bootstrap',
  'colorpicker.module',
  'ui.select',
  homeModule.name,
  dashboardModule.name,
  servicesModule.name,
  waecModule.name
];

var app = angular.module('mutour', dependencies)

.config(['$compileProvider', ($compileProvider) => {
  $compileProvider.debugInfoEnabled(true);
}])

.run(['$state', ($state) =>{
   $state.transitionTo('home.dashboard');
}])

.run(['$rootScope', '$log', '$location', ($rootScope, $log, $location) => {

  $rootScope.$on('$stateChangeStart', (event, toState, toParams, fromState, fromParams) => {
    if(fromParams.sort && toParams.sort && fromState.params.sort != toState.params.sort) {
      toParams.sort = toState.params.sort;
    }
    $log.debug('$stateChangeStart to ' + toState.name + '- fired when the transition begins.',
      '\n  event: ', event,
      '\n  toState: ', toState,
      '\n  toParams: ', toParams,
      '\n  fromState: ', fromState,
      '\n  fromParams: ', fromParams);
  });

  $rootScope.$on('$stateChangeError', (event, toState, toParams, fromState, fromParams, error) => {
    $log.error('$stateChangeError ' + toState.name + ' - fired when an error occurs during transition.',
      '\n  event: ', event,
      '\n  toState: ', toState,
      '\n  toParams: ', toParams,
      '\n  fromState: ', fromState,
      '\n  fromParams: ', fromParams,
      '\n  error: ', error);

  });

  $rootScope.$on('$stateChangeSuccess', (event, toState, toParams, fromState, fromParams) => {
    if(toParams.sort && fromParams.sort) {
      $location.search('sort', toParams.sort); //Update to the correct URL
    }
    $log.debug('$stateChangeSuccess to ' + toState.name + '- fired once the state transition is complete.',
      '\n  event: ', event,
      '\n  toState: ', toState,
      '\n  toParams: ', toParams,
      '\n  fromState: ', fromState,
      '\n  fromParams: ', fromParams);
  });

  $rootScope.$on('$stateChangeCancel', (event, toState, toParams, fromState, fromParams) => {
    $log.debug('$stateChangeCancel to ' + toState.name + '- fired when state transition is cancelled.',
      '\n  event: ', event,
      '\n  toState: ', toState,
      '\n  toParams: ', toParams,
      '\n  fromState: ', fromState,
      '\n  fromParams: ', fromParams);
  });

  $rootScope.$on('$viewContentLoaded', (event) => {
    $log.debug('$viewContentLoaded - fired after dom rendered', event);
  });

  $rootScope.$on('$stateNotFound', (event, unfoundState, fromState, fromParams) => {
    $log.error('$stateNotFound ' + unfoundState.to + '  - fired when a state cannot be found by its name.',
      '\n  event: ', event,
      '\n  unfoundState: ', unfoundState,
      '\n  fromState: ', fromState,
      '\n  fromParams: ', fromParams);
  });
}]);

export default app;
