export default class managementController {
  static resolve() {
    return {
		//
    }
  }

  static get $inject(){
    return ['$scope', '$state', '$auth', '$mdSidenav'];
  }

  constructor($scope, $state, $auth, $mdSidenav) {
    this.$scope = $scope;
    this.$state = $state;
    this.$auth = $auth;
    this.$mdSidenav = $mdSidenav;
    this.$scope.$on('open', () => this.openSideNav());

    this.tabs = [
      { title: 'Images', state: 'home.editor.pictures'},
	  { title: 'User Management', state: 'home.management'},
	  { title: 'Logout', state: 'home.login'},
    ];
	
  }

  transitionTo(tab) {
    if(tab.title === 'Logout') {
      this.$auth.logout();
    }
    this.$state.go(tab.state);
  }
  
  openSideNav(){
        let nav = this.$mdSidenav('managementNav');
        nav.toggle();
      }
	  
}