import _ from 'lodash';
import poiModalTemplate from './poi-modal-template.html!text';
export default class poiController {

  static get $inject(){
    return ['$stateParams', '$state', '$mdToast', '$mdDialog', 'locations', 'placesOfInterest', 'pictures', 'pictureService', 'placeOfInterestService'];
  }

  constructor($stateParams, $state, $mdToast, $mdDialog, locations, placesOfInterest, pictures, pictureService, placeOfInterestService) {
    this.$stateParams = $stateParams;
    this.$state = $state;
    this.$mdToast = $mdToast;
    this.$modal = $mdDialog;
    this.locations = locations;
    this.placesOfInterest = placesOfInterest;
    this.pictures = pictures;
    this.pictureService = pictureService;
    this.placeOfInterestService = placeOfInterestService;
    this.location = _.find(locations, (location) => {return location.name === this.$stateParams.name});
    this.errors = false;
  }

  goToUpload() {
    this.$state.go('home.editor.upload', {params: {location: this.location.name, floor: this.floor}});
  }

  openNewPOIModal() {
        this.$modal.show({
          template: poiModalTemplate,
          controller: 'POIModalController as ctrl',
          clickOutsideToClose:true,
          bindToController: false,
          resolve: {
            locations: () => this.locations,
            location: () => this.location
          }
        })
            .then((poi) => this.preSave(poi));

  }

  switchLocations(loc){
    this.$state.go('home.editor.poi', {name:loc.name});
  }


  findPictures() {
    this.pictures = _.filter(this.allPictures, (picture) => {return picture.floor === this.floor});
  }

  save(poi, pics) {
    poi.picture_id = this.findId(poi, pics);
    if(!this.errors) {
    this.placeOfInterestService.create(poi)
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
      });
    }else {
      this.errors = false;
      this.$mdToast.show(
            this.$mdToast.simple()
           .textContent('Invalid Panorama Name')
           .position('bottom right')
           .hideDelay(3000)
          );
    }
  }

  findId(poi, pics) {
    let picture = _.find(pics, (item) => {return item.pano === poi.pano;});
    if(angular.isUndefined(picture)) {
      this.errors = true;
      return -1;
    }
    return picture.picture_id;
  }

  preSave(poi) {
    if(poi.location_id === this.location.location_id) {
      this.save(poi, this.pictures);
    }
    else {
      this.pictureService.getPictures({location_id: poi.location_id})
        .then((results) => {
                            this.save(poi, results.data);
                          });
    }
  }

}
