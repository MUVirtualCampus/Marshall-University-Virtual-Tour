import _ from 'lodash';
import angular from 'angular';

export default class PictureEditorController {
  static get $inject() {
    return ['pictureService', '$scope', '$mdToast'];
  }

  constructor(pictureService, $scope, $mdToast) {
    this.pictureService = pictureService;
    this.picture = $scope.picture;
    this.$mdToast = $mdToast
    this.locations = $scope.locations;

  }

  save() {
    this.pictureService.update(this.picture)
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

  maxFloor() {
    let location = _.find(this.locations, (item) => {return item.location_id === this.picture.location_id;});
    if (!angular.isUndefined(location)) {
      return location.floors;
    }
    else {
      return 99;
    }
  }

}
