import _ from 'lodash';
export default class LocationModalController {

  static get $inject(){
    return ['$mdDialog'];
  }

  constructor($mdDialog) {
    this.$mdDialog = $mdDialog;
  }

  cancel() {
    this.$mdDialog.cancel();
  }

}
