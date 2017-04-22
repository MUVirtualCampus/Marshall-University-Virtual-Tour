import editorController from './editor-controller';
import editorTemplate from './editor.html!text';

import linkController from './links/link-controller';
import linkTemplate from './links/links.html!text';

import pictureController from './pictures/picture-controller';
import pictureTemplate from './pictures/pictures.html!text';

import uploadController from './pictures/upload-controller';
import uploadTemplate from './pictures/upload.html!text';

import poiController from './poi/poi-controller';
import poiTemplate from './poi/poi.html!text';

export default function editorRoute($stateProvider) {

  return $stateProvider
    .state('home.editor', {
      url: 'editor',
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
    .state('home.editor.poi', {
      url: '/placesofinterest',
      template: poiTemplate,
      controller: poiController,
      controllerAs: 'ctrl'
    })
    ;
}

editorRoute.$inject = ['$stateProvider'];
