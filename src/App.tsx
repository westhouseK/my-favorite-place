import {
  Autocomplete, GoogleMap, LoadScript, Marker,
} from '@react-google-maps/api';
import React from 'react';

const API_KEY = process.env.REACT_APP_API_KEY as string;

const containerStyle = {
  width: '600px',
  height: '600px',
};

const center = {
  lat: 35.69575,
  lng: 139.77521,
};

// eslint-disable-next-line no-undef
const onLoadMacker = (marker: any) => {
  console.log('marker: ', marker);
};

const onLoadAutoComplate = () => {
  console.log('a');
};

const onPlaceChanged = () => {
  console.log();
};

const App: React.FC = () => (
  <LoadScript googleMapsApiKey={API_KEY}>
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={17}
      clickableIcons
      onClick={(e) => console.log(e.latLng?.lat())}
    >
      {/* <Autocomplete
        onLoad={onLoadAutoComplate}
        onPlaceChanged={onPlaceChanged}
      >
        <input
          type="text"
          placeholder="Customized your placeholder"
          style={{
            boxSizing: 'border-box',
            border: '1px solid transparent',
            width: '240px',
            height: '32px',
            padding: '0 12px',
            borderRadius: '3px',
            boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
            fontSize: '14px',
            outline: 'none',
            textOverflow: 'ellipses',
            position: 'absolute',
            left: '50%',
            marginLeft: '-120px',
          }}
        />
      </Autocomplete> */}
      <Marker
        onLoad={onLoadMacker}
        position={center}
      />
    </GoogleMap>
  </LoadScript>
);

export default App;
