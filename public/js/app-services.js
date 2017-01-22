import angular from 'angular';

import BaseService from './common/services/base-service';

import LocationService from './common/services/location-service';
import PictureService from './common/services/picture-service';
import PictureLinkService from './common/services/picture-link-service';
import PlaceOfInterestService from './common/services/place-of-interest-service';

let servicesModule = angular.module('mutour.services', [])
    .service('baseService', BaseService)
    .service('locationService', LocationService)
    .service('pictureService', PictureService)
    .service('pictureLinkService', PictureLinkService)
    .service('placeOfInterestService', PlaceOfInterestService)
    ;

export default servicesModule;
