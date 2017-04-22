import _ from 'lodash';
import linkModalTemplate from './link-modal-template.html!text';
export default class linkController {

  static get $inject(){
    return ['$scope', '$state', '$mdDialog', 'locations', 'pictures', 'pictureLinks', 'pictureLinkService'];
  }

  constructor($scope, $state, $mdDialog, locations, pictures, pictureLinks, pictureLinkService) {
    this.$scope = $scope;
    this.$state = $state;
    this.$modal = $mdDialog;
    this.locations = locations;
    this.pictures = pictures;
    this.allLinks = pictureLinks;
    this.pictureLinkService = pictureLinkService;
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

  openNewLinkModal() {
        this.$modal.show({
          template: linkModalTemplate,
          controller: 'LinkModalController as ctrl',
          clickOutsideToClose:true,
          bindToController: false,
          resolve: {
            locations: () => this.locations,
            location: () => this.location
          }
        })
            .then((newLink) => this.save(newLink));

  }

  save(newLink) {
      debugger;
  }

   findId(pano) {
    let picture = _.find(this.pictures, (item) => {return item.pano === pano;});
    if(angular.isUndefined(picture)) {
      this.errors = true;
      return -1;
    }
    return picture.picture_id;
  }

}
