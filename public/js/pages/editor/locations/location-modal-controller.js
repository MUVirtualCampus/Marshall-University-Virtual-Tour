import _ from 'lodash';
export default class LocationModalController {

  static get $inject(){
    return ['$mdDialog', 'locationService', '$scope', '$mdToast'];
  }

  constructor($mdDialog, locationService, $scope, $mdToast) {
    this.$mdDialog = $mdDialog;
    this.locationService = locationService;
    this.location = $scope.location;
    this.$scope = $scope;
    this.$mdToast = $mdToast;
  }

  create() {
    this.locationService.create(this.location)
      .then((response) => {
        let toastText;
        if(response.data.success === true) {
          toastText = 'Location created!';
        }
        else {
          toastText = 'Creation failed';
        }
        this.$mdToast.show(
          this.$mdToast.simple()
          .textContent(toastText)
          .position('bottom right')
          .hideDelay(3000)
          );
      });
      this.$mdDialog.hide(true);
  }

  cancel() {
    this.$mdDialog.hide(false);
  }

}
