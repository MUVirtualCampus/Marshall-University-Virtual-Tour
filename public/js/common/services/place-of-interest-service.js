import BaseService from './base-service.js';

export default class PlaceOfInterestService extends BaseService {
  static get $inject() {
    return [
      '$location', '$http'
    ];
  }
  constructor($location, $http) {
    super($http);
    //this.baseUrl = $location.$$absUrl
  }

  getPicture(id) {
    this.$http.get('api/placesofinterest/' + id).then((response) => {
      return response;
    });
  }

}
