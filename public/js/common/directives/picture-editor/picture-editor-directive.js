import pictureEditorController from './picture-editor-controller';
import pictureEditorTemplate from './picture-editor.html!text';

export default class PictureEditor {
  static get directiveName() {
    return 'pictureEditor';
  }

  constructor() {
    // Set the directive properties
    this.restrict = 'E';
    this.replace = true;
    this.template = pictureEditorTemplate;
    this.scope = {
      picture: '='
    };

    this.controller = pictureEditorController;
    this.controllerAs = 'ctrl';
  }

  static directiveFactory() {
    PictureEditor.instance = new PictureEditor();
    return PictureEditor.instance;
  }
}
