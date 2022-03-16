import { GoogleMap, LoadScript } from '@react-google-maps/api';
import React from 'react';

const API_KEY = process.env.REACT_APP_API_KEY as string;

const containerStyle = {
  width: '800px',
  height: '800px',
};

const center = {
  lat: 35.69575,
  lng: 139.77521,
};

const App: React.FC = () => (
  <LoadScript googleMapsApiKey={API_KEY}>
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={17}
    />
  </LoadScript>
);

export default App;
