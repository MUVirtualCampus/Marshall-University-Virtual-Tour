import _ from 'lodash';
export default class pictureController {

  static get $inject(){
    return ['$scope', '$state', 'locations', 'pictures'];
  }

  constructor($scope, $state, locations, pictures) {
    this.$scope = $scope;
    this.$state = $state;
    this.locations = locations;
    this.pictures = _.filter(pictures, (picture) => {return picture.floor === 4});
  }

}
