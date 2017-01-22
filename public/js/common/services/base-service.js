export default class BaseService {
  constructor($http) {
    this.$http = $http;
  }

  getAll(types) {
    this.$http.get('api/' + types).then((response) => {
      return response;
    });
  }
}
