import dashboardController from './dashboard-controller';
import template from './dashboard.html!text';

export default function dashboardRoute($stateProvider) {

  return $stateProvider
    .state('home.dashboard', {
      url: 'dashboard',
      template: template,
      controller: dashboardController,
      controllerAs: 'ctrl'
    });
}

dashboardRoute.$inject = ['$stateProvider'];
