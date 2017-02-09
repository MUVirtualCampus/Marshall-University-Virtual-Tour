import BaseService from './base-service.js';

export default class PictureLinkService extends BaseService {
  static get $inject() {
    return [
      '$location', '$http'
    ];
  }
  constructor($location, $http) {
    super($http);
    //this.baseUrl = $location.$$absUrl
  }

  getPictureLinks(location_id) {
    return this.$http.get('api/picturelinks/' + location_id);
  }

}
