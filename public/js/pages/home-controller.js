class HomeController {

  constructor($scope, $state) {
    this.$scope = $scope;
    this.$state = $state;
    this.showMenu = false;
  }

  goToDashboard(){
    this.$state.go('home.dashboard');
  }



}

HomeController.$inject = ['$scope', '$state'];
export default HomeController;
