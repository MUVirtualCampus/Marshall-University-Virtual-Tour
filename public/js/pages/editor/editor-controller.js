export default class editorController {

  static get $inject(){
    return ['$scope', '$state', '$auth'];
  }

  constructor($scope, $state, $auth) {
    this.$scope = $scope;
    this.$state = $state;
    this.$auth = $auth;
  }

}
