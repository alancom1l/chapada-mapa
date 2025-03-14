import { useParams } from 'react-router-dom';
import locations from '../data/locations';
import ImageCarousel from '../components/ImageCarousel';

const CachoeiraPage = () => {
  const { cachoeiraId } = useParams();

  // Encontrar a cachoeira correspondente nos dados
  const cachoeira = locations.find((place) => 
    place.moreInfo === `/${cachoeiraId}`
  );

  if (!cachoeira) {
    return <h2>Cachoeira não encontrada!</h2>;
  }

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>{cachoeira.name}</h1>

      {/* Carrossel de Imagens */}
      <div style={{ maxWidth: '800px', margin: 'auto' }}>
        <ImageCarousel images={cachoeira.images} />
      </div>

      <p>{cachoeira.description}</p>
      <p><strong>Dificuldade:</strong> {cachoeira.difficulty}</p>
      <p><strong>Tempo de trilha:</strong> {cachoeira.duration}</p>
      <p><strong>Taxa de entrada:</strong> {cachoeira.entryFee}</p>
      <p><strong>Melhor época:</strong> {cachoeira.bestSeason}</p>
      <a href="/" style={{ color: 'blue', textDecoration: 'underline' }}>
        ⬅️ Voltar para o mapa
      </a>
    </div>
  );
};

export default CachoeiraPage;
