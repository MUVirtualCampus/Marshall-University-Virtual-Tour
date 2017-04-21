export default class LocationEditorController {
  static get $inject() {
    return ['locationService', '$scope'];
  }

  constructor(locationService, $scope) {
    this.locationService = locationService;
    this.location = $scope.location;

  }

  save() {
    this.locationService.update(this.location);
  }

}
