import _ from 'lodash';
import angular from 'angular';

export default class PictureUploadController {
  static get $inject() {
    return ['$scope', '$state', 'locationService', 'locations', 'location', 'floor', 'pictureService', 'Upload'];
  }

  constructor($scope, $state, locationService, locations, location, floor, pictureService, Upload){
    this.$scope = $scope;
    this.$state = $state;
    this.locationService = locationService;
    this.locations = locations;
    this.Upload = Upload;
    this.pictureService = pictureService;
    this.location = location;
    this.description = '';
    this.floor = floor;
    this.heading = '';
    this.panoID = '';
    this.info = '';
  }

  uploadPanorama(file) {
    this.Upload.upload({
      url: 'https://api.imgur.com/3/image',
      method: 'POST',
      headers: {'Authorization': 'Client-ID 7f19fd5f1603734'},
      data: {'image': file},
    }).then((resp) => this.savePanorama(resp));
  }

  savePanorama(resp) {

    var data = {
      'location_id': this.location.location_id,
      'floor': this.floor,
      'description': this.description,
      'heading': this.heading,
      'url': resp.data.data.link,
      'pano': this.panoID,
      'info': this.info,
      'is_landing': 0
    };
    this.pictureService.create(data).then((resp) => this.showCustomToast(resp));
  }

  backToPictures() {
    this.$state.go('home.editor.pictures');
  }
}
