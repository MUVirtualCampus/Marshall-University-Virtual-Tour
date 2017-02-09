import waecController from './waec-controller';
import template from './waec.html!text';

export default function waecRoute($stateProvider) {

  return $stateProvider
    .state('home.waec', {
      url: 'tour/waec/{floor:[1-4]{1}}',
      template: template,
      controller: waecController,
      controllerAs: 'ctrl',
      resolve: waecController.resolve()
    });
}

waecRoute.$inject = ['$stateProvider'];
