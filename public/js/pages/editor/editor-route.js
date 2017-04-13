import editorController from './editor-controller';
import editorTemplate from './editor.html!text';

export default function editorRoute($stateProvider) {

  return $stateProvider
    .state('home.editor', {
      url: 'editor',
      template: editorTemplate,
      controller: editorController,
      controllerAs: 'ctrl'
    });
}

editorRoute.$inject = ['$stateProvider'];
