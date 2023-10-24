// import React from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

// const SchoolMap = () => {
//   // Define your initial map center and zoom level
//   const center = [51.505, -0.09];
//   const zoom = 13;
//   const bounds = [
//     [51.49, -0.12], // Southwest corner (latitude, longitude)
//     [51.52, -0.07], // Northeast corner (latitude, longitude)
//   ];

//   return (
//     <div className="flex flex-col items-center">
//     <h2 className="text-3xl font-semibold mb-4 mt-2">Nearest Schools, Colleges, and Universities</h2>
//     <div className="w-full h-screen">
//         <iframe
//             title="Google Map"
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7301.608081777158!2d90.3679078395039!3d23.78999143181835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0b58914ed45%3A0xb88612d8fbfb11a9!2sWest%20Shewrapara%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1698064507562!5m2!1sen!2sbd"
//             width="100%"
//             height="100%"
//             frameBorder="0"
//             allowFullScreen
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade"
//         ></iframe>
//     </div>
// </div>
//   );
// };

// export default SchoolMap;

import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class SchoolMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userLocation: { lat: null, lng: null },
      nearbyPlaces: [],
    };
  }

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const userLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        this.setState({ userLocation }, () => {
          this.searchNearbyPlaces();
        });
      });
    }
  }

  searchNearbyPlaces = () => {
    const { google } = this.props;
    const { userLocation } = this.state;
    const service = new google.maps.places.PlacesService(document.createElement('div'));
    const request = {
      location: userLocation,
      radius: 5000, // You can adjust the radius as needed
      type: ['school'], // You can add more types as needed
    };

    service.nearbySearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        this.setState({ nearbyPlaces: results });
      }
    });
  };

  render() {
    const { google } = this.props;
    const { userLocation, nearbyPlaces } = this.state;

    return (
      <div className='mb-20'>
        <h2 className='text-center text-xl m-2'>Nearest Schools and Colleges</h2>
        <Map
          google={google}
          initialCenter={userLocation}
          center={userLocation}
          zoom={15}
        >
          <Marker
            position={userLocation}
            title="Your Location"
          />
          {nearbyPlaces.map((place, index) => (
            <Marker
              key={index}
              title={place.name}
              name={place.name}
              position={place.geometry.location}
            />
          ))}
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAT1rHIwuPWxsPR7ttblCLYj6hZ1kXtERk',
})(SchoolMap);
