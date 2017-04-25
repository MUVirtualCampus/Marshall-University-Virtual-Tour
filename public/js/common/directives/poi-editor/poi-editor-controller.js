import _ from 'lodash';
export default class POIEditorController {
  static get $inject() {
    return ['placeOfInterestService', 'pictureService', '$scope', '$mdToast'];
  }

  constructor(placeOfInterestService, pictureService, $scope, $mdToast) {
    this.placeOfInterestService = placeOfInterestService;
    this.pictureService = pictureService;
    this.poi = $scope.poi;
    this.pictures = $scope.pictures;
    this.original = _.cloneDeep($scope.poi);
    this.picture = this.findPicture();
    this.originalPicture = _.cloneDeep(this.picture);
    this.$mdToast = $mdToast
    this.locations = $scope.locations;
    this.showCancel = false;

  }

  save() {
    this.placeOfInterestService.update(this.poi, this.picture.info)
      .then((response) => {
        let toastText;
        if(response.data.success === true) {
         toastText = 'Success!';
         this.original = _.cloneDeep(this.poi);
         this.originalPicture = _.cloneDeep(this.picture);
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

  findPicture() {
    return _.find(this.pictures, (picture) => {return picture.picture_id === this.poi.picture_id;});
  }

  cancel() {
    this.poi = _.cloneDeep(this.original);
    this.picture = _.cloneDeep(this.originalPicture);
    this.showCancel = false;
  }

  toggleCancel(){
    if(this.showCancel === false)
      this.showCancel = true;
  }

}
