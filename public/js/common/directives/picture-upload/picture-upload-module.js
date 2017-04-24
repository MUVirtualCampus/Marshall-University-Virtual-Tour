import angular from 'angular';

import PictureUploadDirective from './picture-upload-directive';

export default angular.module('mutour.picture-upload-directive', [])
  .directive(PictureUploadDirective.directiveName, PictureUploadDirective.directiveFactory);
