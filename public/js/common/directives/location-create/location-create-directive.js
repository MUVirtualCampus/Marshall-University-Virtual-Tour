import locationCreateController from './location-create-controller';
import locationCreateTemplate from './location-create.html!text';

export default class LocationCreate {
  static get directiveName() {
    return 'locationCreate';
  }

  constructor() {
    // Set the directive properties
    this.restrict = 'E';
    this.replace = true;
    this.template = locationCreateTemplate;
    this.scope = {
      location: '=', cancel: '&'
    };
    this.controller = locationCreateController;
    this.controllerAs = 'ctrl';
  }

  static directiveFactory() {
    LocationCreate.instance = new LocationCreate();
    return LocationCreate.instance;
  }
}
