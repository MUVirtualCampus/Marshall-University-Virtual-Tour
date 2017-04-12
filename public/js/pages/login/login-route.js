import loginController from './login-controller';
import template from './login.html!text';

export default function loginRoute($stateProvider) {

  return $stateProvider
    .state('home.login', {
      url: 'login',
      template: template,
      controller: loginController,
      controllerAs: 'ctrl'
    });
}

loginRoute.$inject = ['$stateProvider'];
