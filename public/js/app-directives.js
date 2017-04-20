import angular from 'angular';

import pictureEditorModule from './common/directives/picture-editor/picture-editor-module';

let dependencies = [
  pictureEditorModule.name
];

let directivesModule = angular.module('mutour.directives', dependencies)
;

export default directivesModule;
