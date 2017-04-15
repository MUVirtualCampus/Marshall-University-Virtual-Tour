import angular from 'angular';

import PictureEditorDirective from './picture-editor-directive';

export default angular.module('mutour.picture-editor-directive', [])
  .directive(PictureEditorDirective.directiveName, PictureEditorDirective.directiveFactory);
