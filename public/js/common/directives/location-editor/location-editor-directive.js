import locationEditorController from './location-editor-controller';
import locationEditorTemplate from './location-editor.html!text';

export default class LocationEditor {
  static get directiveName() {
    return 'locationEditor';
  }

  constructor() {
    // Set the directive properties
    this.restrict = 'E';
    this.replace = true;
    this.template = locationEditorTemplate;
    this.scope = {
      location: '='
    };

    this.controller = locationEditorController;
    this.controllerAs = 'ctrl';
  }

  static directiveFactory() {
    LocationEditor.instance = new LocationEditor();
    return LocationEditor.instance;
  }
}
