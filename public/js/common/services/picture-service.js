import BaseService from './base-service.js';

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

  getPicture(id) {
    this.$http.get('api/pictures/', {id:id}).then((response) => {
      return response;
    });
  }

}
