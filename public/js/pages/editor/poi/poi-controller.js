import _ from 'lodash';
export default class poiController {

  static get $inject(){
    return ['$stateParams', '$state', 'locations', 'placesOfInterest', 'pictures'];
  }

  constructor($stateParams, $state, locations, placesOfInterest, pictures) {
    this.$stateParams = $stateParams;
    this.$state = $state;
    this.locations = locations;
    this.placesOfInterest = placesOfInterest;
    this.pictures = pictures;
    this.location = _.find(locations, (location) => {return location.name === this.$stateParams.name});
  }

  goToUpload() {
    this.$state.go('home.editor.upload', {params: {location: this.location.name, floor: this.floor}});
  }

  switchLocations(){
    this.$state.go('home.editor.poi', {name:this.location.name});
  }


  findPictures() {
    this.pictures = _.filter(this.allPictures, (picture) => {return picture.floor === this.floor});
  }

}
