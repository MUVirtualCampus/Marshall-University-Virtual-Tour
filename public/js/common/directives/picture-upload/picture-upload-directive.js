import pictureUploadController from './picture-upload-controller';
import pictureUploadTemplate from './picture-upload.html!text';

export default class PictureUpload {
  static get directiveName() {
    return 'pictureUpload';
  }

  constructor() {
    // Set the directive properties
    this.restrict = 'E';
    this.replace = true;
    this.template = pictureUploadTemplate;
    this.scope = {
      locations: '='
    };

    this.controller = pictureUploadController;
    this.controllerAs = 'ctrl';
  }

  static directiveFactory() {
    PictureUpload.instance = new PictureUpload();
    return PictureUpload.instance;
  }
}
