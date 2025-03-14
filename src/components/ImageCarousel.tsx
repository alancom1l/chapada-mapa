import Slider from "react-slick";

type ImageCarouselProps = {
  images: string[];
};

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const settings = {
    dots: true,          // Mostra os indicadores (bolinhas)
    infinite: true,      // Loop infinito
    speed: 500,          // Velocidade da transição
    slidesToShow: 1,     // Quantidade de imagens visíveis por vez
    slidesToScroll: 1,   // Quantidade de imagens por rolagem
    autoplay: true,      // Auto play
    autoplaySpeed: 3000, // Tempo entre as transições (3 segundos)
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <img
            src={image}
            alt={`Imagem ${index + 1}`}
            style={{
              width: "100%",
              height: "400px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
        </div>
      ))}
    </Slider>
  );
};

export default ImageCarousel;
