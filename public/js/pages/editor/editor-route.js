import editorController from './editor-controller';
import editorTemplate from './editor.html!text';

import linkController from './links/link-controller';
import linkTemplate from './links/links.html!text';

import pictureController from './pictures/picture-controller';
import pictureTemplate from './pictures/pictures.html!text';

import uploadController from './pictures/upload-controller';
import uploadTemplate from './pictures/upload.html!text';

import locationController from './locations/location-controller';
import locationTemplate from './locations/locations.html!text';

import poiController from './poi/poi-controller';
import poiTemplate from './poi/poi.html!text';

import poiUploadController from './poi/upload-controller';
import poiUploadTemplate from './poi/upload.html!text';


export default function editorRoute($stateProvider) {

  return $stateProvider
    .state('home.editor', {
      url: 'editor/{name}',
      template: editorTemplate,
      controller: editorController,
      controllerAs: 'ctrl',
      resolve: editorController.resolve()
    })
    .state('home.editor.links', {
      url: '/links',
      template: linkTemplate,
      controller: linkController,
      controllerAs: 'ctrl'
    })
    .state('home.editor.pictures', {
      url: '/images',
      template: pictureTemplate,
      controller: pictureController,
      controllerAs: 'ctrl'
    })
    .state('home.editor.upload', {
      url: '/images/upload',
      params: {
        params: null
      },
      template: uploadTemplate,
      controller: uploadController,
      controllerAs: 'ctrl',
      resolve: uploadController.resolve()
    })
    .state('home.editor.locations', {
      url: '/locations',
      template: locationTemplate,
      controller: locationController,
      controllerAs: 'ctrl'
    })
    .state('home.editor.poi', {
      url: '/placesofinterest',
      template: poiTemplate,
      controller: poiController,
      controllerAs: 'ctrl'
    })
    .state('home.editor.uploadPoi', {
      url: '/placesofinterest/upload',
      params: {
        params: null
      },
      template: poiUploadTemplate,
      controller: poiUploadController,
      controllerAs: 'ctrl',
      resolve: poiUploadController.resolve()
    });
}

editorRoute.$inject = ['$stateProvider'];
