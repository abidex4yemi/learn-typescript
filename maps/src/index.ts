import { User } from './User';
import { Company } from './Company';

const mapContainer = document.querySelector('#map');

const mapOptions = {
  zoom: 1,
  center: {
    lat: 0,
    lng: 0
  }
};

new google.maps.Map(mapContainer, mapOptions);
