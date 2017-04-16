import uploadController from './upload-controller';
import template from './upload.html!text';

export default function uploadRoute($stateProvider) {

  return $stateProvider
    .state('home.upload', {
      url: 'upload',
      template: template,
      controller: uploadController,
      controllerAs: 'ctrl',
      resolve: uploadController.resolve()
    });
}

uploadRoute.$inject = ['$stateProvider'];
