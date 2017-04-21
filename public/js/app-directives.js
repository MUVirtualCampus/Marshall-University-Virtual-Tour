import angular from 'angular';

import pictureEditorModule from './common/directives/picture-editor/picture-editor-module';
import locationEditorModule from './common/directives/location-editor/location-editor-module';

let dependencies = [
  pictureEditorModule.name,
  locationEditorModule.name
];

let directivesModule = angular.module('mutour.directives', dependencies)
;

export default directivesModule;
