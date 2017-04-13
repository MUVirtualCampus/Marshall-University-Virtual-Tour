class loginController {

  constructor($scope, $state, $auth) {
    this.$scope = $scope;
    this.$state = $state;
    this.$auth = $auth;
  }

  login(email,password) {
    let credentials = {email:email, password:password};

    this.$auth.login(credentials).then((data) => {

      this.$state.go('home.editor', {});
    });
  }

}
loginController.$inject = ['$scope', '$state', '$auth'];
export default loginController;
