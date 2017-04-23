export default class LocationCreateController {
  static get $inject() {
    return ['locationService', '$scope', '$mdToast'];
  }

  constructor(locationService, $scope, $mdToast) {
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
  }

  onCancel() {
    this.$scope.cancel();
  }

}
