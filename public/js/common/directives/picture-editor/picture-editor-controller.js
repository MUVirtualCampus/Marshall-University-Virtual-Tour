export default class PictureEditorController {
  static get $inject() {
    return ['pictureService', '$scope', '$mdToast'];
  }

  constructor(pictureService, $scope, $mdToast) {
    this.pictureService = pictureService;
    this.picture = $scope.picture;
    this.$mdToast = $mdToast

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

}
