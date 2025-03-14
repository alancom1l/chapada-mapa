export type Location = {
    name: string;
    coordinates: [number, number];
    description: string;
    difficulty: "Fácil" | "Moderado" | "Difícil";
    duration: string;
    entryFee: string;
    bestSeason: string;
    moreInfo: string;
    images: string[]; // Lista de imagens
  };
  
  const locations: Location[] = [
    {
      name: "Cachoeira Santa Bárbara",
      coordinates: [-13.539808493079663, -47.49320887976748],
      description: "Uma das cachoeiras mais famosas da Chapada, conhecida por suas águas azul-turquesa.",
      difficulty: "Fácil",
      duration: "40 min de trilha",
      entryFee: "R$ 20,00",
      bestSeason: "Maio - Setembro",
      moreInfo: "/cachoeira-santa-barbara",
      images: [
        "/images/cachoeira-santa-barbara-1.jpg",
        "/images/cachoeira-santa-barbara-2.jpg",
        "/images/cachoeira-santa-barbara-3.jpg"
      ],
    },
    {
      name: "Cachoeira dos Couros",
      coordinates: [-14.278191634008092, -47.75794894074043],
      description: "Conjunto de quedas d'água impressionantes, ótimo para contemplação e banho.",
      difficulty: "Moderado",
      duration: "1h de trilha",
      entryFee: "Gratuito",
      bestSeason: "Ano todo",
      moreInfo: "/cachoeira-dos-couros",
      images: [
        "/images/cachoeira-dos-couros-1.jpg",
        "/images/cachoeira-dos-couros-2.jpg",
        "/images/cachoeira-dos-couros-3.jpg"
      ],
    },
    {
      name: "Vale da Lua",
      coordinates: [-14.186606865030745, -47.78916247921409],
      description: "Formações rochosas únicas esculpidas pela água, lembrando a superfície lunar.",
      difficulty: "Fácil",
      duration: "20 min de caminhada",
      entryFee: "R$ 30,00",
      bestSeason: "Maio - Setembro",
      moreInfo: "/vale-da-lua",
      images: [
        "/images/vale-da-lua-1.jpg",
        "/images/vale-da-lua-2.jpg",
        "/images/vale-da-lua-3.jpg"
      ],
    },
  ];
  
  export default locations;
  