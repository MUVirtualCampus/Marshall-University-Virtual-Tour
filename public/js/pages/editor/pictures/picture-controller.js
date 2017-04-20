import _ from 'lodash';
export default class pictureController {

  static get $inject(){
    return ['$scope', '$state', 'locations', 'pictures'];
  }

  constructor($scope, $state, locations, pictures) {
    this.$scope = $scope;
    this.$state = $state;
    this.locations = locations;
    this.allPictures = pictures;
    this.location = _.find(locations, (location) => {return location.location_id === 1});
    this.floors = this.initFloors();
    this.floor = this.floors.length > 0 ? this.floors[0] : null;
    this.pictures = null;
    this.findPictures();
  }

  goToUpload() {
    this.$state.go('home.editor.upload', {params: {location: this.location.name, floor: this.floor}});
  }

  switchLocations(){
    console.log('Switch!');
  }

  switchFloors() {
    this.findPictures();
  }

  initFloors() {
    let floorArray = [];
    for(let i = 1; i <= this.location.floors; i++) {
      floorArray.push(i);
    }

    return floorArray;
  }


  findPictures() {
    this.pictures = _.filter(this.allPictures, (picture) => {return picture.floor === this.floor});
  }

}
