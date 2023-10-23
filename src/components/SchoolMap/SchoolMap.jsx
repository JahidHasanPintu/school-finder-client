import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const SchoolMap = () => {
  // Define your initial map center and zoom level
  const center = [51.505, -0.09];
  const zoom = 13;
  const bounds = [
    [51.49, -0.12], // Southwest corner (latitude, longitude)
    [51.52, -0.07], // Northeast corner (latitude, longitude)
  ];

  return (
    <div className="flex flex-col items-center">
    <h2 className="text-3xl font-semibold mb-4 mt-2">Nearest Schools, Colleges, and Universities</h2>
    <div className="w-full h-screen">
        <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7301.608081777158!2d90.3679078395039!3d23.78999143181835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0b58914ed45%3A0xb88612d8fbfb11a9!2sWest%20Shewrapara%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1698064507562!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
    </div>
</div>
  );
};

export default SchoolMap;
