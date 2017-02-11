import _ from 'lodash';

export default class WaecController {
  static resolve() {
    return {
      pictures: ['$stateParams', 'pictureService', ($stateParams, pictureService) => {
        return pictureService.getPictures(1).then((results) => {
            return results.data;
          });
        }

      ],
      pictureLinks: ['$stateParams', 'pictureLinkService', ($stateParams, pictureLinkService) => {
        return pictureLinkService.getPictureLinks(1).then((results) => {
            return results.data;
          });
        }
      ]
    }
  }

  static get $inject(){
    return ['$scope', '$state', 'locationService', 'pictureService', 'pictureLinkService', 'pictures', 'pictureLinks'];
  }

  constructor($scope, $state, locationService, pictureService, pictureLinkService, pictures, pictureLinks) {
    this.$scope = $scope;
    this.$state = $state;
    this.locationService = locationService;
    this.pictureService = pictureService;
    this.pictureLinkService = pictureLinkService;
    this.pictures = pictures;
    this.pictureLinks = pictureLinks;
    this.initPano(pictures[0]);

  }

    initPano(picture) {
        // Set up Street View and initially set it visible. Register the
        // custom panorama provider function. Set the StreetView to display
        // the custom panorama 'reception' which we check for below.
        var panorama = new google.maps.StreetViewPanorama(
          document.getElementById('pano'), {
            pano: 'waec_3_1',
            visible: true,
            panoProvider: () => {return this.getCustomPanorama(panorama.pano);}
        });
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
            centerHeading: 0,//picture.heading,
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

}
