export default class PictureEditorController {
  static get $inject() {
    return ['pictureService', '$scope'];
  }

  constructor(pictureService, $scope) {
    this.pictureService = pictureService;
    this.picture = $scope.picture;

  }

  save() {
    this.pictureService.update(this.picture);
  }

}
