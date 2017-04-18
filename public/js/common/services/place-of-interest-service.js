import BaseService from './base-service.js';

export default class PlaceOfInterestService extends BaseService {
  static get $inject() {
    return [
      '$location', '$http'
    ];
  }
  constructor($location, $http) {
    super($http, 'placesofinterest');
    //this.baseUrl = $location.$$absUrl
  }

  getPlacesOfInterest(id) {
    return this.$http.get('api/placesofinterest/' + id);
  }

}
