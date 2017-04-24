import _ from 'lodash';
import locationModalTemplate from './location-modal-template.html!text';
export default class locationController {

  static get $inject(){
    return ['$scope', '$state', '$mdDialog', 'locations'];
  }

  constructor($scope, $state, $mdDialog, locations) {
    this.$scope = $scope;
    this.$state = $state;
    this.$modal = $mdDialog;
    this.locations = locations;
  }

  openNewLocationModal() {
    this.$modal.show({
      template: locationModalTemplate,
      controller: 'LocationModalController as ctrl',
      clickOutsideToClose: true,
      bindToController: false,
    }).then((resp) => this.reloadPage(resp));
  }

  reloadPage(resp) {
    if(resp === true) {
      window.location.reload(true); 
    } 
  }

}
