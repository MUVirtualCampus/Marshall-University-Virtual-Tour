import _ from 'lodash';
export default class POIEditorController {
  static get $inject() {
    return ['placeOfInterestService', 'pictureService', '$scope', '$mdToast'];
  }

  constructor(placeOfInterestService, pictureService, $scope, $mdToast) {
    this.placeOfInterestService = placeOfInterestService;
    this.pictureService = pictureService;
    this.poi = $scope.poi;
    this.picture = this.findPicture($scope.pictures);
    this.$mdToast = $mdToast
    this.locations = $scope.locations;

  }

  save() {
    this.placeOfInterestService.update(this.poi, this.picture.info)
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

  findPicture(pictures) {
    return _.find(pictures, (picture) => {return picture.picture_id === this.poi.picture_id;});
  }

}
