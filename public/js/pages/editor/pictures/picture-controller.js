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
    //TODO: Remove this line and uncomment the other for production
    this.floor = 4;
    this.floors = this.initFloors();
    //this.floor = this.floors.length > 0 ? this.floors[0] : null;
  }

  goToUpload() {
    this.$state.go('home.editor.upload', {params: {location: this.location.name, floor: this.floor}});
  }

  switchLocations(){
    console.log('Switch!');
  }

  switchFloors() {
    console.log('Switch!');
  }

  initFloors() {
    let floorArray = [];
    for(let i = 1; i <= this.location.floors; i++) {
      floorArray.push(i);
    }
    return floorArray;
  }

}
