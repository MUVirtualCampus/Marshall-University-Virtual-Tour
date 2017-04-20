import _ from 'lodash';
import toastTemplate from './toast.html!text';

export default class UploadController {

  static resolve() {
    return {
      location: ['$stateParams', 'locations', ($stateParams, locations) => {
        if($stateParams.params === null) {
          return '';
        }
        return _.find(locations, item => item.name === $stateParams.params.location);
        }
      ],
      floor: ['$stateParams', ($stateParams) => {
        if($stateParams.params === null) {
          return '';
        }
        return parseInt($stateParams.params.floor);
        }
      ]
    }
  }

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

  showCustomToast(resp) {
  	this.$mdToast.show({
  		hideDelay	: 3000,
  		position	: 'center',
  		controller  : 'ToastController as ctrl',
  		template    : toastTemplate
  	});
  }

  backToPictures() {
    this.$state.go('home.editor.pictures');
  }

}
