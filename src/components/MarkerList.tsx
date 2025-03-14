import { Marker, Popup } from 'react-leaflet';
import { Link } from 'react-router-dom';
import { Icon } from 'leaflet';
import locations from '../data/locations';

// Criando um ícone personalizado
const markerIcon = new Icon({
    iconUrl: "/images/marker-icon.png", // Caminho do ícone dentro de "public/"
    iconSize: [22, 32], // Tamanho do ícone
    iconAnchor: [16, 32], // Centraliza o ícone corretamente
    popupAnchor: [0, -32], // Ajusta a posição do popup
  });

const MarkerList: React.FC = () => {
  return (
    <>
      {locations.map((place, index) => (
        <Marker key={index} position={place.coordinates} icon={markerIcon}>
          <Popup>
            <div>
              <h3>{place.name}</h3>
              <p>{place.description}</p>
              <p><strong>Dificuldade:</strong> {place.difficulty}</p>
              <p><strong>Tempo de trilha:</strong> {place.duration}</p>
              <p><strong>Entrada:</strong> {place.entryFee}</p>
              <p><strong>Melhor época:</strong> {place.bestSeason}</p>
              <Link to={place.moreInfo} style={{ color: 'blue', textDecoration: 'underline' }}>
                🔗 Mais informações
              </Link>
            </div>
          </Popup>
        </Marker>
      ))}
    </>
  );
};

export default MarkerList;
