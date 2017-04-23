import _ from 'lodash';
export default class LinkModalController {

  static get $inject() {
    return ['$mdDialog', 'locations', 'location'];
  }

  constructor($mdDialog, locations, location){
    this.$mdDialog = $mdDialog;
    this.locations = locations;
    this.location = location;
    this.link = this.createNewLink();
    this.pano1 = null;
    this.pano2 = null;
  }

  createNewLink() {
    let newLink = {};
    newLink.first_picture_id = null;
    newLink.second_picture_id = null;
    newLink.location_id = this.location.location_id;
    newLink.floor = null;
    newLink.heading = 0;
    return newLink;
  }

  maxFloor() {
    if(!angular.isUndefined(this.location)) {
      return this.location.floors;
    }
    else {
      return 99;
    }
  }

  switchLocation() {
    this.location = _.find(this.locations, (item) => {return item.location_id === this.link.location_id;});
  }

  cancel() {
    this.$mdDialog.cancel();
  }

  save(savePair) {
    let saveItem = [];
    saveItem.push(this.link);
    saveItem.push(savePair);
    this.$mdDialog.hide(saveItem);
  }

}
