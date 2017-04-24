class HomeController {

  constructor($scope, $state) {
    this.$scope = $scope;
    this.$state = $state;
  }


}

HomeController.$inject = ['$scope', '$state'];
export default HomeController;
