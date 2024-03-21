'use client'
import React from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

// Define types for your component's props and state if needed. For this simple component, we might not have props or state, but here's how you could define them if needed:
// interface MapComponentProps {}
// interface MapComponentState {}

const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';


const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: 52.3676, // Latitude for Almere, Netherlands
  lng: 5.2167, // Longitude for Almere, Netherlands
};

const MapComponent: React.FC = () => {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: googleMapsApiKey  // Replace "YOUR_API_KEY" with your actual Google Maps API key
  });

  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>;
  }

  return isLoaded ? (
    <div className="flex justify-center items-center">
      <div className="w-[500px] h-[500px] sm:w-[250px] sm:h-[250px]">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          {/* Marker */}
          <Marker position={center} />
        </GoogleMap>
      </div>
    </div>
  ) : <></>;
};

export default React.memo(MapComponent);