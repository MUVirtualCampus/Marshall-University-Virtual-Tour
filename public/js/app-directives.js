import angular from 'angular';

import pictureEditorModule from './common/directives/picture-editor/picture-editor-module';
import poiEditorModule from './common/directives/poi-editor/poi-editor-module';

let dependencies = [
  pictureEditorModule.name,
  poiEditorModule.name
];

let directivesModule = angular.module('mutour.directives', dependencies)
;

export default directivesModule;
