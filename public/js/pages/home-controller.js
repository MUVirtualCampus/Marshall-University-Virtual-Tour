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
  /*
  console.log("HEEEEEEEEEEEEEEEEEEEEEEEEEEEYYYYYYYYYYYYYYYYYYY");
    var currentState = this.$state.current.name;
    var currentScope = this.$scope;
    if (currentState == "home.dashboard"){
      console.log(currentState);
    }
    console.log(currentState);
    console.log(currentSc+ope);
    return currentState
*/
  var location = '../manuals/usersManualPDF';
  window.open(location,"resizeable,scrollbar"); 
  //var currentState = this.$state.current.name;
  console.log("IM IN THIS FUNCTION");
  return false;
 }


}

HomeController.$inject = ['$scope', '$state'];
export default HomeController;
