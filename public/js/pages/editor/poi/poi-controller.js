import _ from 'lodash';
export default class poiController {

  static get $inject(){
    return ['$scope', '$state', 'locations', 'placesOfInterest', 'pictures'];
  }

  constructor($scope, $state, locations, placesOfInterest, pictures) {
    this.$scope = $scope;
    this.$state = $state;
    this.locations = locations;
    this.placesOfInterest = placesOfInterest;
    this.pictures = pictures;
    this.location = _.find(locations, (location) => {return location.location_id === 1});
  }

  goToUpload() {
    this.$state.go('home.editor.uploadPoi', {params: {location: this.location.name, floor: this.floor}});
  }

  switchLocations(){
    console.log('Switch!');
  }


  findPictures() {
    this.pictures = _.filter(this.allPictures, (picture) => {return picture.floor === this.floor});
  }

}
