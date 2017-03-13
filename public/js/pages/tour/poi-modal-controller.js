export default class POIModalController {

  constructor($mdDialog, placesOfInterest, locations, location) {

    this.$mdDialog = $mdDialog;
    this.placesOfInterest = placesOfInterest;
    this.locations = locations;
    this.location = location;
    this.placeOfInterest = null;

  }

  transitionTo() {
    this.$mdDialog.hide(this.placeOfInterest);
  }

  formNotValid() {
    return this.placeOfInterest === null;
  }
  cancel() {
    this.$mdDialog.cancel();
  }
}

POIModalController.$inject = [ '$mdDialog', 'placesOfInterest', 'locations', 'location'];
