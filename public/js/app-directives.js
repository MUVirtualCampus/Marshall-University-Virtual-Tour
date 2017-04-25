import angular from 'angular';

import linkEditorModule from './common/directives/link-editor/link-editor-module';
import pictureEditorModule from './common/directives/picture-editor/picture-editor-module';
import locationEditorModule from './common/directives/location-editor/location-editor-module';
import poiEditorModule from './common/directives/poi-editor/poi-editor-module';

let dependencies = [
  linkEditorModule.name,
  pictureEditorModule.name,
  locationEditorModule.name,
  poiEditorModule.name,
];

let directivesModule = angular.module('mutour.directives', dependencies)
;

export default directivesModule;
