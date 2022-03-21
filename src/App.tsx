import {
  GoogleMap, Marker, StandaloneSearchBox, useLoadScript,
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

const onLoadMacker = (marker: any) => {
  console.log('marker: ', marker);
};

const onLoad = (ref: any) => {
  console.log(ref);
};

const onPlacesChanged = () => {
  console.log('a');
};

const App: React.FC = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: API_KEY,
    libraries: ['places', 'drawing'],
  });

  const renderMap = () => (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={17}
      clickableIcons
      onClick={(e) => console.log(e.latLng?.lat())}
    >
      <StandaloneSearchBox
        onLoad={onLoad}
        onPlacesChanged={
          onPlacesChanged
        }
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
      </StandaloneSearchBox>
      <Marker
        onLoad={onLoadMacker}
        position={center}
      />
    </GoogleMap>
  );

  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>;
  }

  return isLoaded ? renderMap() : <div>Wait a minute...</div>;
};

export default App;
