import _ from 'lodash';
export default class POIModalController {

  static get $inject() {
    return ['$mdDialog', 'locations', 'location'];
  }

  constructor($mdDialog, locations, location){
    this.$mdDialog = $mdDialog;
    this.locations = locations;
    this.location = location;
    this.poi = this.createNewPoi();
  }

  createNewPoi() {
    let newPoi = {};
    newPoi.description = null;
    newPoi.pano = null;
    newPoi.location_id = this.location.location_id;
    newPoi.picture_id = null;
    newPoi.info = null;
    return newPoi;
  }

  switchLocation() {
    this.location = _.find(this.locations, (item) => {return item.location_id === this.link.location_id;});
  }

  cancel() {
    this.$mdDialog.cancel();
  }

  save() {
    this.$mdDialog.hide(this.poi);
  }

}
