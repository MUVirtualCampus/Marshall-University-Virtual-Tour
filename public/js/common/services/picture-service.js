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

  savePicture(data) {
    this.$http.post('api/savePicture', {
      location_id: data.location_id,
      floor: data.floor,
      description: data.description,
      heading: data.heading,
      url: data.url,
      pano: data.pano,
      info: data.info,
      is_landing: data.is_landing
    });
  }

}
