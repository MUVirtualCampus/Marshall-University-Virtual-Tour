import _ from 'lodash';

export default class ManagementController {
  static resolve() {
    return {
      locations: ['$stateParams', 'locationService', ($stateParams, locationService) => {
        return locationService.getAll('locations').then((results) => {
            return results.data;
          });
        }

      ],
      location: ['$stateParams', 'locations', ($stateParams, locations) => {
        return _.find(locations, item => item.name === $stateParams.name);
        }
      ],
      pictures: ['$stateParams', 'pictureService', 'location', ($stateParams, pictureService, location) => {
        return pictureService.getPictures(location.location_id).then((results) => {
            return results.data;
          });
        }

      ],
      pictureLinks: ['$stateParams', 'pictureLinkService', 'location', ($stateParams, pictureLinkService, location) => {
        return pictureLinkService.getPictureLinks(location.location_id).then((results) => {
            return results.data;
          });
        }
      ],
      placesOfInterest: ['$stateParams', 'placeOfInterestService', 'location', ($stateParams, placeOfInterestService, location) => {
        return placeOfInterestService.getPlacesOfInterest(location.location_id).then((results) => {
            return results.data;
          });
        }
      ]
    }
  }

  static get $inject(){
    return ['$scope', '$state', '$timeout', '$mdDialog', '$mdSidenav', 'locationService', 'pictureService', 'pictureLinkService', 'locations', 'location', 'pictures', 'pictureLinks'];
  }

  constructor($scope, $state, $timeout, $mdDialog, $mdSidenav, locationService, pictureService, pictureLinkService, locations, location, pictures, pictureLinks, placesOfInterest) {
    this.$scope = $scope;
    this.$state = $state;
    this.$modal = $mdDialog;
    this.$mdSidenav = $mdSidenav;
    this.$timeout = $timeout; //$timeout(() => {this.sideNav = $mdSidenav('left');}, false);
    this.locationService = locationService;
    this.pictureService = pictureService;
    this.pictureLinkService = pictureLinkService;
    this.locations = locations;
    this.location = location;
    this.pictures = pictures;
    this.pictureLinks = pictureLinks;
  }

  switchLocation() {
  	//add code
  }

  switchFloor() {
  	//add code
  }

}

