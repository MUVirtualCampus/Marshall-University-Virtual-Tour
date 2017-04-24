import angular from 'angular';

import route from './editor-route';
import LocationModalController from './locations/location-modal-controller';

export default angular.module('mutour.editor',[])
  .config(route)
  .controller('LocationModalController', LocationModalController);
