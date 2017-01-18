export default class DashboardController {

  constructor($scope, $state) {
    this.$scope = $scope;
    this.$state = $state;
    this.message = "Hello World";
  }

}
DashboardController.$inject = ['$scope', '$state'];
export default DashboardController;
