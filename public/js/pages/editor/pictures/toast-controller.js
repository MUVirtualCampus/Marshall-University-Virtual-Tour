export default class ToastController {

	constructor($scope, $mdToast, $mdDialog) {
		this.$scope = $scope;
		this.$mdToast = $mdToast;
		this.$mdDialog = $mdDialog;
		this.isDlgOpen = true;
	}

	clostToast() {
		if (isDlgOpen) return;

		this.$mdToast
			.hide()
			.then(function() {
				isDlgOpen = false;
			});
	}

	openMoreInfo() {
		if (isDlgOpen) return;
		isDlgOpen = true;

		$mdDialog
			.show($mdDialog
				.alert()
				.title('More info foes here.')
				.textContent('Something witty.')
				.ariaLabel('More info')
				.ok('Got it')
				.targetEvent(e)
				)
			.then(function() {
				isDlgOpen = false;
			});
	}
}

ToastController.$inject = ['$scope', '$mdToast', '$mdDialog'];