import _ from 'lodash';
import angular from 'angular';

export default class LinkEditorController {
  static get $inject() {
    return ['pictureLinkService', '$scope', '$mdToast'];
  }

  constructor(pictureLinkService, $scope, $mdToast) {
    this.pictureLinkService = pictureLinkService;
    this.$scope = $scope;
    this.link = $scope.link;
    this.original = _.cloneDeep($scope.link);
    this.$mdToast = $mdToast
    this.locations = $scope.locations;
    this.pictures = $scope.pictures;
    this.pano1 = this.findPano(this.link.first_picture_id);
    this.pano2 = this.findPano(this.link.second_picture_id);
    this.errors = false;
    this.errorText = '';
    this.showCancel = false;

  }

  save() {
    if(this.matchPanos()) {
    this.pictureLinkService.update(this.link)
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
    } else {
      this.$mdToast.show(
            this.$mdToast.simple()
           .textContent(this.errorText)
           .position('bottom right')
           .hideDelay(3000)
      );
    }
  }

  maxFloor() {
    let location = _.find(this.locations, (item) => {return item.location_id === this.link.location_id;});
    if (!angular.isUndefined(location)) {
      return location.floors;
    }
    else {
      return 99;
    }
  }

  findPano(id) {
    let picture = _.find(this.pictures, (item) => {return item.picture_id === id;});
    return picture.pano;
  }

  findId(pano) {
    let picture = _.find(this.pictures, (item) => {return item.pano === pano;});
    if(angular.isUndefined(picture)) {
      this.errors = true;
      return -1;
    }
    return picture.picture_id;
  }

  matchPanos() {
    this.errors = false;
    this.link.first_picture_id = this.findId(this.pano1);
    if(this.errors) {
      this.errorText = 'Invalid "From Panorama"';
      return false;
    }
    this.link.second_picture_id = this.findId(this.pano2);
    if(this.errors) {
      this.errorText = 'Invalid "To Panorama"';
      return false;
    }
    return true;
  }

  cancel() {
    this.link = _.cloneDeep(this.original);
    this.pano1 = this.findPano(this.link.first_picture_id);
    this.pano2 = this.findPano(this.link.second_picture_id);
    this.showCancel = false;
  }

  toggleCancel(){
    if(this.showCancel === false)
      this.showCancel = true;
  }

}
