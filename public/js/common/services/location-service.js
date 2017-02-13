import BaseService from './base-service.js';

export default class LocationService extends BaseService {
  static get $inject() {
    return [
      '$location', '$http'
    ];
  }
  constructor($location, $http) {
    super($http);
    //this.baseUrl = $location.$$absUrl
  }

  getLocations(id) {
    return this.$http.get('api/locations/' + id);
  }

}
