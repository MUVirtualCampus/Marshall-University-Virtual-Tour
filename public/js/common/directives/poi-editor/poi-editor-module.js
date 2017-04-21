import angular from 'angular';

import POIEditorDirective from './poi-editor-directive';

export default angular.module('mutour.poi-editor-directive', [])
  .directive(POIEditorDirective.directiveName, POIEditorDirective.directiveFactory);
