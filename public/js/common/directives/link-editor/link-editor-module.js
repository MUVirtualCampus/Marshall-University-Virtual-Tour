import angular from 'angular';

import LinkEditorDirective from './link-editor-directive';

export default angular.module('mutour.link-editor-directive', [])
  .directive(LinkEditorDirective.directiveName, LinkEditorDirective.directiveFactory);
