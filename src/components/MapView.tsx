import { MapContainer, TileLayer } from 'react-leaflet';
import MarkerList from './MarkerList';

const MapView: React.FC = () => {
  return (
    <MapContainer center={[-14.1306, -47.5205]} zoom={10} style={{ height: '100vh', width: '100%' }}>
      <TileLayer 
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerList />
    </MapContainer>
  );
};

export default MapView;
