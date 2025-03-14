import { Marker, Popup } from 'react-leaflet';
import { Link } from 'react-router-dom';
import locations from '../data/locations';

const MarkerList: React.FC = () => {
  return (
    <>
      {locations.map((place, index) => (
        <Marker key={index} position={place.coordinates}>
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
