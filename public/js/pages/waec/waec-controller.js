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
    this.initPano();

  }

    initPano() {
        // Set up Street View and initially set it visible. Register the
        // custom panorama provider function. Set the StreetView to display
        // the custom panorama 'reception' which we check for below.
        var panorama = new google.maps.StreetViewPanorama(
          document.getElementById('pano'), {
            pano: 'waec_3_1',
            visible: true,
            panoProvider: this.getCustomPanorama
        });
      }

      // Return a pano image given the panoID.
      getCustomPanoramaTileUrl(pano, zoom, tileX, tileY) {
        // Note: robust custom panorama methods would require tiled pano data.
        // Here we're just using a single tile, set to the tile size and equal
        // to the pano "world" size.
        return 'https://developers.google.com/maps/documentation/javascript/examples/full/images/panoReception1024-0.jpg';
      }

      // Construct the appropriate StreetViewPanoramaData given
      // the passed pano IDs.
      getCustomPanorama(pano, zoom, tileX, tileY) {
        if (pano === 'waec_3_1') {
          return {
            location: {
              pano: 'waec_3_1',
              description: 'WAEC 3rd Floor'
            },
            links: [{
              heading: 60,
              description: 'Exit',
              pano: 'test_image'
            }],
            // The text for the copyright control.
            copyright: '',
            // The definition of the tiles for this panorama.
            tiles: {
              tileSize: new google.maps.Size(1024, 512),
              worldSize: new google.maps.Size(1024, 512),
              // The heading in degrees at the origin of the panorama
              // tile set.
              centerHeading: 105,
              getTileUrl: () => {return 'http://res.cloudinary.com/muvirtualcampus/image/upload/c_scale,w_6600/v1486063191/PANO_20170202_125452_2_iu844f.jpg';}
            }
          };
        } else if (pano === 'test_image') {
          return {
            location: {
              pano: 'test_image',
              description: 'WAEC 3rd Floor'
            },
            links: [{
              heading: 195,
              description: 'WAEC 3rd Floor',
              pano: 'waec_3_1'
            }],
            // The text for the copyright control.
            copyright: '',
            // The definition of the tiles for this panorama.
            tiles: {
              tileSize: new google.maps.Size(1024, 512),
              worldSize: new google.maps.Size(1024, 512),
              // The heading in degrees at the origin of the panorama
              // tile set.
              centerHeading: 105,
              getTileUrl: () => {return 'http://res.cloudinary.com/muvirtualcampus/image/upload/c_scale,w_6000/v1486063942/PANO_20170202_142958_1_xaua1r.jpg';}
            }
          };
        }
      }

      setLinks(pictureId) {
        let links = [];

        _.forEach(this.pictureLinks), (item) => {
          if(item.firstPictureId === pictureId) {
            links.push(
              _.find(this.pictures, (picture) => {
                return picture.pictureId === item.secondPictureId;
              })
            );
          }
        }

        return links;
      }

}
