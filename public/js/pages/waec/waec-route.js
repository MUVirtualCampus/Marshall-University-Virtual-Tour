import waecController from './waec-controller';
import template from './waec.html!text';

export default function waecRoute($stateProvider) {

  return $stateProvider
    .state('home.waec', {
      url: 'tour/waec',
      template: template,
      controller: waecController,
      controllerAs: 'ctrl'
    });
}

waecRoute.$inject = ['$stateProvider'];
