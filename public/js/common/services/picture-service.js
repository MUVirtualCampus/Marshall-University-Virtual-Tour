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
    let filter = {};
    filter.location_id = location_id;

    return this.$http({
                method: 'POST',
                url: '/api/pictures/',
                headers: { 'Content-Type' : 'application/json' },
                data: JSON.stringify(filter)
            });
  }

}
