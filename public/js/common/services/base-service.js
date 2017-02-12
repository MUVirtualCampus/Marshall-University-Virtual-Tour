export default class BaseService {
  constructor($http) {
    this.$http = $http;
  }

  getAll(type) {
    return this.$http.get('api/' + type);
  }
}
