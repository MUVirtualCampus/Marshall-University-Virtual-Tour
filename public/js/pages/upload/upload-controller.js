export default class UploadController {

  constructor($scope, $state, $timeout, Upload) {
    this.$scope = $scope;
    this.$state = $state;
    this.$timeout = $timeout;
    this.Upload = Upload;
  }

  uploadPanorama(file) {
    this.Upload.upload({
      url: 'https://api.imgur.com/3/image',
      method: 'POST',
      headers: {'Authorization': 'Client-ID 9802a051aa6be8e'},
      data: {'image': file},
    });
  }

}
UploadController.$inject = ['$scope', '$state', '$timeout', 'Upload'];
export default UploadController;
