export default class UploadController {

  constructor($scope, $state, $timeout) {
    this.$scope = $scope;
    this.$state = $state;
    this.$timeout = $timeout;
  }

  uploadPanorama(file) {
    file.upload = Upload.upload({
      url: 'https://api.imgur.com/3/image',
      method: 'POST',
      headers: {'Authorization': 'Client-ID e729cdb81257a9d'},
      data: {file: file},
    });
  }

}
UploadController.$inject = ['$scope', '$state', '$timeout'];
export default UploadController;
