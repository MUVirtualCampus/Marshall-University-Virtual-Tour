export default class DashboardController {

  constructor($scope, $state) {
    this.$scope = $scope;
    this.$state = $state;
  }

}
DashboardController.$inject = ['$scope', '$state'];
export default DashboardController;
