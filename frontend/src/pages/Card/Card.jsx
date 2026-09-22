import { useState } from "react";
import "./Card.css";

function Card({ topico, onVoltar }) {
  const [passo, setPasso] = useState(1);
  const [acao, setAcao] = useState("");

  const [nome, setNome] = useState("Via Láctea");
  const [categoria, setCategoria] = useState("Galáxias");

  const [imagem, setImagem] = useState(
    "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=700&q=80"
  );

  const [descricao, setDescricao] = useState(
    "A Via Láctea é a galáxia onde está localizado o nosso sistema solar."
  );
