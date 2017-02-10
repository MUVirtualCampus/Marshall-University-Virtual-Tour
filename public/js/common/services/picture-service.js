import BaseService from './base-service.js';
import Promise from 'bluebird';

export default class PictureService extends BaseService {
  static get $inject() {
    return [
      '$location', '$http'
    ];
  }
  constructor($location, $http) {
    super($http);
    //this.baseUrl = $location.$$absUrl
  }

  getPictures(location_id) {
    return this.$http.get('api/pictures/' + location_id);
  }

}
