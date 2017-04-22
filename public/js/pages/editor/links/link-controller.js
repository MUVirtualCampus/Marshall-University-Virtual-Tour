import _ from 'lodash';
export default class linkController {

  static get $inject(){
    return ['$scope', '$state', 'locations', 'pictures', 'pictureLinks'];
  }

  constructor($scope, $state, locations, pictures, pictureLinks) {
    this.$scope = $scope;
    this.$state = $state;
    this.locations = locations;
    this.pictures = pictures;
    this.allLinks = pictureLinks;
    this.location = _.find(locations, (location) => {return location.location_id === 1});
    this.floors = this.initFloors();
    this.floor = this.floors.length > 0 ? this.floors[0] : null;
    this.findLinks();
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

  findLinks() {
    this.pictureLinks = _.filter(this.allLinks, (link) => {return link.floor === this.floor});
  }

}
