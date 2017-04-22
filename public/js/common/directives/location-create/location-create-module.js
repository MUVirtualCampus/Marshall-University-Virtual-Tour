import angular from 'angular';

import LocationCreateDirective from './location-create-directive';

export default angular.module('mutour.location-create-directive', [])
  .directive(LocationCreateDirective.directiveName, LocationCreateDirective.directiveFactory);
