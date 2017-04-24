import angular from 'angular';

import route from './editor-route';
import LinkModalController from './links/link-modal-controller';
import POIModalController from './poi/poi-modal-controller';

export default angular.module('mutour.editor',[])
  .config(route)
  .controller('LinkModalController', LinkModalController)
  .controller('POIModalController', POIModalController);
