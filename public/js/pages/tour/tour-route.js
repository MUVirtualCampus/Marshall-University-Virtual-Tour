import tourController from './tour-controller';
import template from './tour.html!text';

export default function tourRoute($stateProvider) {

  return $stateProvider
    .state('home.tour', {
      url: 'tour/{name}',
      template: template,
      controller: tourController,
      controllerAs: 'ctrl',
      resolve: tourController.resolve()
    });
}

tourRoute.$inject = ['$stateProvider'];
