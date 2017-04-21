import _ from 'lodash';
export default class locationController {

  static get $inject(){
    return ['$scope', '$state', 'locations'];
  }

  constructor($scope, $state, locations) {
    this.$scope = $scope;
    this.$state = $state;
    this.locations = locations;
  }

  goToUpload() {
    this.$state.go('home.editor.upload', {params: {location: this.location.name, floor: this.floor}});
  }

}
