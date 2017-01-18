import angular from 'angular';

import route from './home-route';
import HomeController from './home-controller';

export default angular.module('mutour.home', [])
  .config(route)
  .controller('HomeController', HomeController);
