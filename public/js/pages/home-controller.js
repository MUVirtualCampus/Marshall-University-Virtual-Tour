class HomeController {

  constructor($scope, $state) {
    this.$scope = $scope;
    this.$state = $state;
  }

  goToDashboard(){
    this.$state.go('home.dashboard');
  }

  showMenu(){
    return this.$state.current.name === 'home.tour';
  }

  openMenu() {
    this.$scope.$broadcast('open', 'this.$scope');
  }



}

HomeController.$inject = ['$scope', '$state'];
export default HomeController;
