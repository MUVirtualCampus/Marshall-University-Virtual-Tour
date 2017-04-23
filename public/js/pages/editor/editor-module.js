import angular from 'angular';

import route from './editor-route';
import ToastController from './pictures/toast-controller';
import LocationModalController from './locations/location-modal-controller';

export default angular.module('mutour.editor',[])
  .config(route)
  .controller('ToastController', ToastController)
  .controller('LocationModalController', LocationModalController);
