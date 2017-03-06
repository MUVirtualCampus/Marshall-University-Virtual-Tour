import _ from 'lodash';
import poiModalTemplate from './poi-modal.html!text';

export default class TourController {
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
    return ['$scope', '$state', '$mdDialog', 'locationService', 'pictureService', 'pictureLinkService', 'locations', 'location', 'pictures', 'pictureLinks', 'placesOfInterest'];
  }

  constructor($scope, $state, $mdDialog, locationService, pictureService, pictureLinkService, locations, location, pictures, pictureLinks, placesOfInterest) {
    this.$scope = $scope;
    this.$state = $state;
    this.$modal = $mdDialog;
    this.locationService = locationService;
    this.pictureService = pictureService;
    this.pictureLinkService = pictureLinkService;
    this.locations = locations;
    this.location = location;
    this.pictures = pictures;
    this.pictureLinks = pictureLinks;
    this.placesOfInterest = placesOfInterest;
    this.floors = this.initFloors();
    this.floor = 1;
    this.initPano(this.findLandingPicture());

  }

    initPano(picture) {
        // Set up Street View and initially set it visible. Register the
        // custom panorama provider function. Set the StreetView to display
        // the custom panorama 'reception' which we check for below.
        this.panorama = new google.maps.StreetViewPanorama(
          document.getElementById('pano'), {
            visible: false,
            panoProvider: () => {return this.getCustomPanorama(this.panorama.pano);},
            pano: picture.pano
        });
        this.panorama.setVisible(true);
      }

      // Construct the appropriate StreetViewPanoramaData given
      // the passed picture.
      getCustomPanorama(pano) {
        let picture = _.find(this.pictures, item => item.pano === pano);
        return {
          location: {
            pano: picture.pano,
            description: picture.description
          },
          links: this.setLinks(picture.picture_id),
          // The text for the copyright control.
          copyright: '',
          // The definition of the tiles for this panorama.
          tiles: {
            tileSize: new google.maps.Size(1024, 512),
            worldSize: new google.maps.Size(1024, 512),
            // The heading in degrees at the origin of the panorama
            // tile set.
            centerHeading: picture.heading,
            getTileUrl: () => { return picture.url; }
          }
        };
      }

      setLinks(picture_id) {
        let links = [];
        _.forEach(this.pictureLinks, (item) => {
          if(item.first_picture_id === picture_id) {
            let link =
              _.find(this.pictures, picture =>
                picture.picture_id === item.second_picture_id
              );
              links.push({heading: item.heading, description: link.description, pano: link.pano});
          }
        });
        return links;
      }

      initFloors() {
        let floorArray = [];
        for(let i = 1; i <= this.location.floors; i++) {
          floorArray.push(i);
        }
        return floorArray;
      }

      switchFloors() {
        let newPicture = this.findLandingPicture();

        this.panorama.setPano(newPicture.pano);

      }

      switchLocations() {
        //TODO: Replace with code to change locations
        console.log('Location changed!');
      }

      showFloors() {
        return this.location.floors > 0;
      }

      findLandingPicture() {
        let landing = _.find(this.pictures, picture => {
          return (picture.floor === this.floor && picture.is_landing == 1)
        });

        return landing;
      }

      openPOIModal(schedule) {
        this.$modal.show({
          template: poiModalTemplate,
          controller: 'POIModalController as ctrl',
          clickOutsideToClose:true,
          bindToController: false,
          resolve: {
            placesOfInterest: () => this.placesOfInterest,
            locations: () => this.locations,
            location: () => this.location
          }
        })
            .then((poi) => this.panorama.setPano(poi.pano));

      }

}
