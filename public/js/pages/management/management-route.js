import managementController from './management-controller';
import managementTemplate from './management.html!text';


export default function managementRoute($stateProvider) {

  return $stateProvider
    .state('home.management', {
      url: 'management',
      template: managementTemplate,
      controller: managementController,
      controllerAs: 'ctrl',
      resolve: managementController.resolve()
    });
}

managementRoute.$inject = ['$stateProvider'];
