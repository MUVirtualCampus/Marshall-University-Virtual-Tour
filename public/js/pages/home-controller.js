class HomeController {

  constructor($scope, $state) {
    this.$scope = $scope;
    this.$state = $state;
  }

  goToDashboard(){
    this.$state.go('home.dashboard');
  }
}

HomeController.$inject = ['$scope', '$state'];
export default HomeController;
