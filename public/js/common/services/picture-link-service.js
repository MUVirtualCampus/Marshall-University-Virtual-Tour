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

  getPictureLink(location_id) {
    this.$http.get('api/picturelinks/' + location_id).then((response) => {
      return response;
    });
  }

}
