import angular from 'angular';

import 'angular-messages';
import 'angular-animate';
import 'angular-material';
import 'angular-ui-router';
import 'angular-bootstrap';
import 'angular-cookies';
import 'angular-ui-select';
import 'angular-bootstrap-colorpicker';

import homeModule from './pages/home-module';

let dependencies = [
  'ngMessages',
  'ngAnimate',
  'ngMaterial',
  'ui.router',
  'ui.bootstrap',
  'colorpicker.module',
  'ui.select',
  homeModule.name,
];

var app = angular.module('mutour', dependencies)

.config(['$compileProvider', ($compileProvider) => {
  $compileProvider.debugInfoEnabled(true);
}]);

export default app;
