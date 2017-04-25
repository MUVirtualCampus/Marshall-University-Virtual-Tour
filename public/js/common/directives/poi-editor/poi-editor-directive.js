import poiEditorController from './poi-editor-controller';
import poiEditorTemplate from './poi-editor.html!text';

export default class POIEditor {
  static get directiveName() {
    return 'poiEditor';
  }

  constructor() {
    // Set the directive properties
    this.restrict = 'E';
    this.replace = true;
    this.template = poiEditorTemplate;
    this.scope = {
      poi: '=',
      locations: '=',
      pictures: '='
    };

    this.controller = poiEditorController;
    this.controllerAs = 'ctrl';
  }

  static directiveFactory() {
    POIEditor.instance = new POIEditor();
    return POIEditor.instance;
  }
}
