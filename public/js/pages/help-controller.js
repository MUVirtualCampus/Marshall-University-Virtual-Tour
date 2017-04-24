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

 showHint(){
  var location = '../manuals/usersManualPDF';
  window.open(location,"resizeable,scrollbar"); 
  //var currentState = this.$state.current.name;
  console.log("IM IN THIS FUNCTION");
  return false;
 }


}

HomeController.$inject = ['$scope', '$state'];
export default HomeController;
