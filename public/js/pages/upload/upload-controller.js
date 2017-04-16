import _ from 'lodash';
export default class UploadController {

  static resolve() {
    return {
      locations: ['$stateParams', 'locationService', ($stateParams, locationService) => {
        return locationService.getAll('locations').then((results) => {
            return results.data;
          });
        }
      ],

      location: ['$stateParams', 'locations', ($stateParams, locations) => {
        return _.find(locations, item => item.name === $stateParams.name);
        }
      ]
    }
  }

  static get $inject() {
    return ['$scope', '$state', '$timeout', 'locationService', 'locations', 'location', 'pictureService', 'Upload'];
  }

  constructor($scope, $state, $timeout, locationService, locations, location, pictureService, Upload, description, floor, heading, panoID, info) {
    this.$scope = $scope;
    this.$state = $state;
    this.$timeout = $timeout;
    this.locationService = locationService;
    this.locations = locations;
    this.Upload = Upload;
    this.pictureService = pictureService;
    this.location = '';
    this.description = '';
    this.floor = '';
    this.heading = '';
    this.panoID = '';
    this.info = '';
  }

  uploadPanorama(file) {
    this.Upload.upload({
      url: 'https://api.imgur.com/3/image',
      method: 'POST',
      headers: {'Authorization': 'Client-ID 9802a051aa6be8e'},
      data: {'image': file},
    }).then((resp) => this.response(resp));
  }

  response(resp) {
    console.log(resp.data.data.link);
    console.log(this.location.location_id);
    console.log(this.description);
    console.log(this.floor);
    console.log(this.heading);
    console.log(this.panoID);
    console.log(this.info);
    var data = {
      "location_id": this.location.location_id,
      "floor": this.floor,
      "description": this.description,
      "heading": this.heading,
      "url": this.url,
      "pano": this.panoID,
      "info": this.info,
      "is_landing": '0'
    };
    this.pictureService.uploadPicture(data);
  }

}