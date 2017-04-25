import angular from 'angular';

import LocationEditorDirective from './location-editor-directive';

export default angular.module('mutour.location-editor-directive', [])
  .directive(LocationEditorDirective.directiveName, LocationEditorDirective.directiveFactory);
