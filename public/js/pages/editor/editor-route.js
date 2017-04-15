import editorController from './editor-controller';
import editorTemplate from './editor.html!text';

import pictureController from './pictures/picture-controller';
import pictureTemplate from './pictures/pictures.html!text';

export default function editorRoute($stateProvider) {

  return $stateProvider
    .state('home.editor', {
      url: 'editor',
      template: editorTemplate,
      controller: editorController,
      controllerAs: 'ctrl',
      resolve: editorController.resolve()
    })
    .state('home.editor.pictures', {
      url: '/images',
      template: pictureTemplate,
      controller: pictureController,
      controllerAs: 'ctrl'
    });
}

editorRoute.$inject = ['$stateProvider'];
