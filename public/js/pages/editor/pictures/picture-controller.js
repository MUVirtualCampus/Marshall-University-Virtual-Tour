import _ from 'lodash';
export default class pictureController {

  static get $inject(){
    return ['$scope', '$state', 'locations', 'pictures'];
  }

  constructor($scope, $state, locations, pictures) {
    this.$scope = $scope;
    this.$state = $state;
    this.locations = locations;
    //TODO: Change all this crap
    this.pictures = _.filter(pictures, (picture) => {return picture.floor === 4});
    this.location = _.find(locations, (location) => {return location.location_id === 1});
    this.floor = 4;
  }

  goToUpload() {
    this.$state.go('home.editor.upload', {params: {location: this.location.name, floor: this.floor}});
  }

}
