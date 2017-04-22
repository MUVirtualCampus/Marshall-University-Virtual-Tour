import linkEditorController from './link-editor-controller';
import linkEditorTemplate from './link-editor.html!text';

export default class LinkEditor {
  static get directiveName() {
    return 'linkEditor';
  }

  constructor() {
    // Set the directive properties
    this.restrict = 'E';
    this.replace = true;
    this.template = linkEditorTemplate;
    this.scope = {
      link: '=',
      locations: '=',
      pictures: '='
    };

    this.controller = linkEditorController;
    this.controllerAs = 'ctrl';
  }

  static directiveFactory() {
    LinkEditor.instance = new LinkEditor();
    return LinkEditor.instance;
  }
}
