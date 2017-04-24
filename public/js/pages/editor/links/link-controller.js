import _ from 'lodash';
import linkModalTemplate from './link-modal-template.html!text';
export default class linkController {

  static get $inject(){
    return ['$stateParams', '$state', '$mdDialog', '$mdToast', 'locations', 'pictures', 'pictureLinks', 'pictureLinkService', 'pictureService'];
  }

  constructor($stateParams, $state, $mdDialog, $mdToast, locations, pictures, pictureLinks, pictureLinkService, pictureService) {
    this.$stateParams = $stateParams;
    this.$state = $state;
    this.$modal = $mdDialog;
    this.$mdToast = $mdToast;
    this.locations = locations;
    this.pictures = pictures;
    this.allLinks = pictureLinks;
    this.pictureLinkService = pictureLinkService;
    this.pictureService = pictureService;
    this.location = _.find(locations, (location) => {return location.name === this.$stateParams.name});
    this.floors = this.initFloors();
    this.floor = this.floors.length > 0 ? this.floors[0] : null;
    this.errors = false;
    this.errorText = '';
    this.findLinks();
    this.newLink = null;
    this.saveMatch = false;
  }

  goToUpload() {
    this.$state.go('home.editor.upload', {params: {location: this.location.name, floor: this.floor}});
  }

  switchLocations(){
    this.$state.go('home.editor.links', {name:this.location.name});
  }

  switchFloors() {
    this.findLinks();
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
            .then((newLinks) => this.preSave(newLinks));

  }

  preSave(newLinks) {
    this.newLink = _.cloneDeep(newLinks[0]);
    if(this.newLink.location_id === this.location.location_id) {
      this.checkSave(this.pictures);
    }
    else {
      this.pictureService.getPictures({location_id: this.newLink.location_id})
        .then((results) => {
                            this.checkSave(results.data);
                          });
    }
    if(newLinks[1] === true){
      this.saveMatch = true;
    }
  }

  checkSave(picturesToUse) {
    if(this.matchPanos(picturesToUse)) {
      this.save();
    } else {
      this.$mdToast.show(
            this.$mdToast.simple()
           .textContent(this.errorText)
           .position('bottom right')
           .hideDelay(3000)
      );
      this.saveMatch = false;
    }
  }

   findId(pano, picturesToUse) {
    let picture = _.find(picturesToUse, (item) => {return item.pano === pano;});
    if(angular.isUndefined(picture)) {
      this.errors = true;
      return -1;
    }
    return picture.picture_id;
  }

  matchPanos(picturesToUse) {
    this.errors = false;
    this.newLink.first_picture_id = this.findId(this.newLink.first_picture_id, picturesToUse);
    if(this.errors) {
      this.errorText = 'Invalid "From Panorama"';
      return false;
    }
    this.newLink.second_picture_id = this.findId(this.newLink.second_picture_id, picturesToUse);
    if(this.errors) {
      this.errorText = 'Invalid "To Panorama"';
      return false;
    }
    return true;
  }

  reverseHeading(heading) {
    heading = heading + 180;
    if(heading >= 360) {
      heading = heading - 360;
    }
    return heading;
  }

  makeMatchingLink(oldLink){
    let firstId = oldLink.first_picture_id;
    oldLink.first_picture_id = oldLink.second_picture_id;
    oldLink.second_picture_id = firstId;
    oldLink.heading = this.reverseHeading(oldLink.heading);
    return oldLink;
  }

  getMatch() {
    if(this.saveMatch) {
      this.newLink = this.makeMatchingLink(this.newLink);
      this.save();
    }
    this.saveMatch = false;
  }

  save() {
    this.pictureLinkService.create(this.newLink)
        .then((response) => {
        let toastText;
        if(response.data.success === true) {
         toastText = 'Success!';
        }
        else {
          toastText = 'Update failed';
        }
         this.$mdToast.show(
            this.$mdToast.simple()
           .textContent(toastText)
           .position('bottom right')
           .hideDelay(3000)
          );
          this.getMatch();
      });
  }


}
