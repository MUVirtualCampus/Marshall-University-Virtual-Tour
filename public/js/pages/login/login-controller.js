class loginController {

  constructor($scope, $state, $auth, $mdToast) {
    this.$scope = $scope;
    this.$state = $state;
    this.$auth = $auth;
    this.$mdToast = $mdToast;
    this.email = null;
    this.password = null;
  }

  login() {
    let credentials = {email:this.email, password:this.password};

    this.$auth.login(credentials).then((data) => {

      this.$state.go('home.editor.locations', {name:'waec'});
    })
    .catch((response) => {
      this.$mdToast.show(
            this.$mdToast.simple()
           .textContent('Invalid Credentials')
           .position('bottom right')
           .hideDelay(3000)
          );
    });
  }

}
loginController.$inject = ['$scope', '$state', '$auth', '$mdToast'];
export default loginController;
