import "./SistemasEstelares.css";

function SistemasEstelares() {
  const sistemas = [
    {
      nome: "Alpha Centauri",
      tipo: "3 estrelas",
      descricao:
        "Sistema estelar triplo formado por duas estrelas semelhantes ao Sol e uma anã vermelha. Proxima Centauri abriga apenas Proxima Centauri b.",
      tipoEstelar: "Anã Amarela (G2V)",
      distancia: "4,37 anos-luz",
      idade: "5 bilhões de anos",
      objetos: (
        <>
          Alpha Centauri A
          <br />
          Alpha Centauri B
          <br />
          Proxima Centauri
        </>
      ),
      constelacao: (
        <>
          3 estrelas
        </>
      ),
      imagem:
        "https://img.odcdn.com.br/wp-content/uploads/2025/02/alfa-centauri-1920x1080.jpg",
    },

    {
      nome: "Sistema Sirius",
      tipo: "0 planetas confirmados",
      descricao:
        "Sistema formado por duas estrelas que orbitam entre si. Sirius A é uma estrela branca muito brilhante, enquanto Sirius B é uma anã branca.",
      tipoEstelar: (
        <>
          Sirius A: A1V
          <br />
          Sirius B: Anã branca
        </>
      ),
      distancia: "8,6 anos-luz",
      idade: "Aproximadamente 242 milhões de anos",
      objetos: (
        <>
          Sirius A – estrela branca e a mais brilhante do sistema.
          <br />
          Sirius B – anã branca que orbita Sirius A.
        </>
      ),
      constelacao: (
        <>
          Canis Major
          <br />
          2 estrelas
        </>
      ),
      imagem:
        "https://www.espacotempo.com.br/wp-content/uploads/2024/08/sirius-997x1280.jpg",
    },

    {
      nome: "Sistema Procyon",
      tipo: "0 planetas confirmados",
      descricao:
        "Procyon é um sistema formado por duas estrelas. Procyon A é uma estrela branca e brilhante, enquanto Procyon B é uma anã branca, que é o núcleo remanescente de uma estrela que já evoluiu.",
      tipoEstelar: (
        <>
          Procyon A: F5IV-V
          <br />
          Procyon B: Anã branca
        </>
      ),
      distancia: "11,46 anos-luz",
      idade: "Aproximadamente 1,7 bilhão de anos",
      objetos: (
        <>
          Procyon A: estrela branca e mais brilhante do sistema.
          <br />
          Procyon B: anã branca que orbita Procyon A.
        </>
      ),
      constelacao: (
        <>
          Canis Minor
          <br />
          2 estrelas
        </>
      ),
      imagem:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNoh7655OshAeuMuhhf2YAt4j3doaby7whpIviGUijDoHr39vWFzm7Z9Pq&s=10",
    },

    {
      nome: "Epsilon Eridani",
      tipo: "1 planeta confirmado",
      descricao:
        "Epsilon Eridani é um sistema relativamente próximo formado por uma estrela semelhante ao Sol. Ela possui o planeta Epsilon Eridani b, que orbita a estrela a uma grande distância.",
      tipoEstelar: "Anã Laranja (K2V)",
      distancia: "10,5 anos-luz",
      idade: "Aproximadamente 800 milhões de anos",
      objetos: (
        <>
          Epsilon Eridani, estrela principal do sistema.
        </>
      ),
      constelacao: (
        <>
          Eridanus
          <br />
          1 estrela
        </>
      ),
      imagem:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-h08FLCLKDjTVNU6VHM7HCleMti77-59UWHl2VdLLjTb63mWAKdrfunk&s=10",
    },
  ];