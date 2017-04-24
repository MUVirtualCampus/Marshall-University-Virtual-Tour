class HomeController {

  constructor($scope, $state) {
    this.$scope = $scope;
    this.$state = $state;
  }

  goToDashboard(){
    this.$state.go('home.dashboard');
  }

  goToHints(){
    this.$state.go('home.help');
  }

  showMenu(){
    return this.$state.current.name === 'home.tour';
  }


}

HomeController.$inject = ['$scope', '$state'];
export default HomeController;
