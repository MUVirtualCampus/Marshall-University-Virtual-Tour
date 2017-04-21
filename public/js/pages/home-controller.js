class HomeController {

  constructor($scope, $state, $mdMedia) {
    this.$scope = $scope;
    this.$state = $state;
    this.$mdMedia = $mdMedia;
  }

  goToDashboard(){
    this.$state.go('home.dashboard');
  }

  showMenu(){
    return this.$state.current.name === 'home.tour' || this.showEditorMenu();
  }

  showEditorMenu() {
    return this.$state.current.name.includes('editor') && (this.$mdMedia('sm') || this.$mdMedia('xs'));
  }

  openMenu() {
    this.$scope.$broadcast('open', 'this.$scope');
  }



}

HomeController.$inject = ['$scope', '$state', '$mdMedia'];
export default HomeController;
