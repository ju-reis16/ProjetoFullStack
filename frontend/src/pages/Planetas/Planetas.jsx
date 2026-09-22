import Header from "../components/Header";
import PlanetCard from "../components/PlanetCard";
import "./Planetas.css";

function Planetas() {
  const planetas = [
    {
      nome: "Mercúrio",
      imagem:
        "https://content.nationalgeographic.pt/medio/2024/02/27/el-planeta-mercurio-c7bafef8_86a72ec9_240227171326_1200x630.jpg",
      tipo: "Planeta Rochoso",
      descricao:
        "É o planeta mais próximo do Sol e o menor do Sistema Solar.",
      distancia: "57,9 milhões de km",
      diametro: "4.879 km",
    },
    {
      nome: "Vênus",
      imagem:
        "https://cdn.mos.cms.futurecdn.net/RifjtkFLBEFgzkZqWEh69P.jpg",
      tipo: "Planeta Rochoso",
      descricao:
        "Possui uma atmosfera muito densa e é o planeta mais quente do Sistema Solar.",
      distancia: "108,2 milhões de km",
      diametro: "12.104 km",
    },
    {
      nome: "Terra",
      imagem:
        "https://www.infoescola.com/wp-content/uploads/2008/04/planeta-terra_585359906.jpg",
      tipo: "Planeta Rochoso",
      descricao:
        "Terceiro planeta a partir do Sol e o único conhecido por possuir vida.",
      distancia: "149,6 milhões de km",
      diametro: "12.742 km",
    },
    {
      nome: "Marte",
      imagem:
        "https://s1.static.brasilescola.uol.com.br/be/2021/11/planeta-marte.jpg",
      tipo: "Planeta Rochoso",
      descricao:
        "Conhecido como Planeta Vermelho devido ao óxido de ferro presente em sua superfície.",
      distancia: "227,9 milhões de km",
      diametro: "6.779 km",
    },
    {
      nome: "Júpiter",
      imagem:
        "https://aventurasnahistoria.com.br/wp-content/uploads/2024/11/gettyimages-1409917723.jpg",
      tipo: "Gigante Gasoso",
      descricao:
        "É o maior planeta do Sistema Solar e possui uma atmosfera formada principalmente por hidrogênio e hélio.",
      distancia: "778,5 milhões de km",
      diametro: "139.820 km",
    },
    {
      nome: "Saturno",
      imagem:
        "https://static.todamateria.com.br/upload/pl/an/planeta-saturno-og.jpg",
      tipo: "Gigante Gasoso",
      descricao:
        "É conhecido por seu sistema de anéis formado principalmente por gelo e fragmentos rochosos.",
      distancia: "1,43 bilhão de km",
      diametro: "116.460 km",
    },
    {
      nome: "Urano",
      imagem:
        "https://static.escolakids.uol.com.br/2026/02/planeta-urano-o-setimo-planeta-a-partir-do-sol-e-o-mais-frio-do-sistema-solar.jpg",
      tipo: "Gigante de Gelo",
      descricao:
        "Possui uma coloração azul-esverdeada e um sistema de anéis.",
      distancia: "2,87 bilhões de km",
      diametro: "50.724 km",
    },
    {
      nome: "Netuno",
      imagem:
        "https://static.escolakids.uol.com.br/2026/02/planeta-netuno-um-dos-gigantes-gasosos-alem-do-planeta-mais-distante-do-sol.jpg",
      tipo: "Gigante de Gelo",
      descricao:
        "É o planeta mais distante do Sol e possui ventos extremamente rápidos.",
      distancia: "4,50 bilhões de km",
      diametro: "49.244 km",
    },
  ];
  