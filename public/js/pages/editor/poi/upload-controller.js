import _ from 'lodash';

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
    return ['$scope', '$state', '$mdToast', 'locationService', 'locations', 'location', 'pictureService', 'placeOfInterestService'];
  }

  constructor($scope, $state, $mdToast, locationService, locations, location, pictureService, placeOfInterestService){
    this.$scope = $scope;
    this.$state = $state;
    this.$mdToast = $mdToast;
    this.locationService = locationService;
    this.locations = locations;
    this.pictureService = pictureService;
    this.placeOfInterestService = placeOfInterestService;
    this.location = location;
    this.description = '';
    this.floor = '';
    this.heading = '';
    this.url = '';
    this.panoID = '';
    this.info = '';
  }

  savePanorama() {

    var data = {
      'location_id': this.location.location_id,
      'floor': this.floor,
      'description': this.description,
      'heading': this.heading,
      'url': this.url,
      'pano': this.panoID,
      'info': this.info,
      'is_landing': 0
    };
    this.pictureService.create(data)
      .then((response) => {
        let toastText;
        if(response.data.success === true) {
          this.createPoi(response);
        } else {
          toastText = 'Creation failed! Please try again!';
          this.$mdToast.show(
            this.$mdToast.simple()
              .textContent(toastText)
              .position('bottom right')
              .hideDelay(3000)
            );
        }
    });
  }

  createPoi(response) {
    var poi = {
      'location_id': this.location.location_id,
      'pano': this.panoID,
      'description': this.description,
      'picture_id': response.data.picture_id,
      'info': this.info
    };
    this.placeOfInterestService.create(poi)
      .then((response) => {
        let toastText;
        if(response.data.success === true) {
          toastText = 'Success!';
        }
        else {
          toastText = 'Creation failed! Please try again!';
        }
        this.$mdToast.show(
          this.$mdToast.simple()
          .textContent(toastText)
          .position('bottom right')
          .hideDelay(3000)
          );
      });
    this.$state.go('home.editor.poi', {},{reload:true});
  }

  backToPictures() {
    this.$state.go('home.editor.poi');
  }

}
