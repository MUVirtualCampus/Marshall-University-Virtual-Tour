import angular from 'angular';

import route from './tour-route';
import POIModalController from './poi-modal-controller';

export default angular.module('mutour.tour',[])
  .config(route)
  .controller('POIModalController', POIModalController);
