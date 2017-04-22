export default class LocationEditorController {
  static get $inject() {
    return ['locationService', '$scope', '$mdToast'];
  }

  constructor(locationService, $scope, $mdToast) {
    this.locationService = locationService;
    this.location = $scope.location;
    this.$mdToast = $mdToast;
  }

  save() {
    this.locationService.update(this.location)
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
  }

}
