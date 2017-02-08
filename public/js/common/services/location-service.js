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

  getLocation(id) {
    this.$http.get('api/locations/', {id: id}).then((response) => {
      return response;
    });
  }

}
