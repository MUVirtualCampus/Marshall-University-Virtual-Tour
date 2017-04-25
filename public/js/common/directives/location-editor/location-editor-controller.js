export default class LocationEditorController {
  static get $inject() {
    return ['locationService', '$scope', '$mdToast'];
  }

  constructor(locationService, $scope, $mdToast) {
    this.locationService = locationService;
    this.location = $scope.location;
    this.original = _.cloneDeep($scope.location);
    this.$mdToast = $mdToast;
    this.showCancel = false;
  }

  save() {
    this.locationService.update(this.location)
      .then((response) => {
        let toastText;
        if(response.data.success === true) {
          toastText = 'Success!';
          this.original = _.cloneDeep(this.location);
          this.showCancel = false;
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
  }

  cancel() {
    this.location = _.cloneDeep(this.original);
    this.showCancel = false;
  }

  toggleCancel() {
    if(this.showCancel === false)
    this.showCancel = true;
  }
}
