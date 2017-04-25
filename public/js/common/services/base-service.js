export default class BaseService {
  constructor($http, path) {
    this.$http = $http;
    this.path = path
  }

  getAll(type) {
    return this.$http.get('api/' + type);
  }

  update(data, path) {
    return this.$http({
                method: 'PATCH',
                url: '/api/' + this.path,
                headers: {'Content-Type' : 'application/json' },
                data: JSON.stringify(data)
              });
  }

  create(data) {
    return this.$http({
                method: 'POST',
                url: 'api/' + this.path + '/create',
                headers: {'Content-Type' : 'application/json'},
                data: JSON.stringify(data)
              });
  }

}
