import React, { useState, useEffect } from "react";

import { LoadScript, GoogleMap, Marker } from "@react-google-maps/api";

const MapComponent = () => {
  const [map, setMap] = useState(null);

  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    const getGeolocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          setCurrentLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        });
      }
    };

    getGeolocation();
  }, []);

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyDBNVKkwhZCT_G00hbWnbSif8thyTUGvm8"
      libraries={["places"]}
    >
      <GoogleMap
        mapContainerStyle={{ width: "700px", height: "500px" }}
        zoom={12}
        center={currentLocation || { lat: 37.783333, lng: -122.416667 }}
        onMapLoad={(mapInstance) => setMap(mapInstance)}
      >
        {currentLocation && <Marker position={currentLocation} />}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
