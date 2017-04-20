import angular from 'angular';

import route from './editor-route';
import ToastController from './pictures/toast-controller';

export default angular.module('mutour.editor',[])
  .config(route)
  .controller('TosatConmtroller', ToastController);
