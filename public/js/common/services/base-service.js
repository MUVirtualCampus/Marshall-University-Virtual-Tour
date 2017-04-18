export default class BaseService {
  constructor($http) {
    this.$http = $http;
  }

  getAll(type) {
    return this.$http.get('api/' + type);
  }

  update(data, path) {
    this.$http({
        method: 'PATCH',
        url: '/api/' + path + '/',
        headers: {'Content-Type' : 'application/json' },
        data: JSON.stringify(data)
    });
  }

}
