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
  function escolherAcao(tipo) {
    setAcao(tipo);
    setPasso(2);
  }

  function salvar() {
    setPasso(5);
  }

  function excluir() {
    setPasso(7);
  }

  return (
    <div className="card-page">
      <header className="card-topo">
        <button className="voltar" onClick={onVoltar}>
          ← Voltar
        </button>

        <div className="marca">
          <h1>COSMOS</h1>
          <span>OBSERVATORY</span>
        </div>

        <div className="card-titulo">
          <h2>Como criar ou editar um card</h2>

          <p>
            Cada tópico do sistema pode receber um card.
            Veja abaixo como funciona.
          </p>
        </div>

        <div className="exemplo-card">
          <small>Exemplo:</small>
          <span>✦ Mapa do Universo</span>
        </div>
      </header>

      <div className="passos">
        <div className={passo === 1 ? "passo ativo" : "passo"}>
          <b>1</b>
          <span>Escolha a opção</span>
        </div>

        <div className={passo === 2 ? "passo ativo" : "passo"}>
          <b>2</b>
          <span>Escolha o tópico</span>
        </div>

        <div className={passo === 3 ? "passo ativo" : "passo"}>
          <b>3</b>
          <span>Formulário</span>
        </div>

        <div className={passo === 4 ? "passo ativo" : "passo"}>
          <b>4</b>
          <span>Confira o card</span>
        </div>

        <div className={passo === 5 ? "passo ativo" : "passo"}>
          <b>5</b>
          <span>Salvar</span>
        </div>

        <div className={passo === 6 ? "passo ativo" : "passo"}>
          <b>6</b>
          <span>Resultado</span>
        </div>
      </div>

      <main className="card-conteudo">
        {passo === 1 && (
          <section className="tela-passo">
            <div className="numero-grande">
              1
            </div>

            <h2>
              Escolha a opção
            </h2>

            <p>
              Escolha o que deseja fazer com o card.
            </p>

            <div className="opcoes-card">
              <button
                onClick={() => escolherAcao("alterar")}
              >
                <b>✎</b>

                <strong>
                  Alterar
                </strong>

                <span>
                  Edite um card que já existe.
                </span>
              </button>

              <button
                onClick={() => escolherAcao("novo")}
              >
                <b>＋</b>

                <strong>
                  Novo
                </strong>

                <span>
                  Crie um card do zero.
                </span>
              </button>
            </div>
          </section>
        )}

        {passo === 2 && (
          <section className="tela-passo">
            <div className="numero-grande">
              2
            </div>

            <h2>
              Escolha o tópico
            </h2>

            <p>
              Selecione o tópico que deseja trabalhar.
            </p>

            <div className="topico-escolhido">
              <div className="topico-info">
                <div className="icone-topico">
                  ✦
                </div>

                <h3>
                  {topico}
                </h3>

                <p>
                  Você selecionou este tópico para{" "}
                  {acao === "alterar"
                    ? "alterar o card."
                    : "criar um novo card."}
                </p>

                <button onClick={() => setPasso(3)}>
                  Continuar →
                </button>
              </div>
            </div>
          </section>
        )}

        {passo === 3 && (
          <section className="tela-passo">
            <div className="numero-grande">
              3
            </div>

            <h2>
              {acao === "alterar"
                ? "Editar card"
                : "Criar novo card"}
            </h2>

            <p>
              {acao === "alterar"
                ? "Altere as informações do card selecionado."
                : "Preencha as informações para criar um novo card."}
            </p>

            <div className="form-card">
              <div className="form-titulo">
                <span>
                  {acao === "alterar" ? "EDITAR" : "NOVO"}
                </span>

                <h3>
                  Card - {topico}
                </h3>
              </div>

              <label>
                Nome do card *
              </label>

              <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Ex.: Via Láctea"
              />

              <label>
                Categoria *
              </label>

              <select
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
              >
                <option value="Galáxias">
                  Galáxias
                </option>

                <option value="Planetas">
                  Planetas
                </option>

                <option value="Estrelas">
                  Estrelas
                </option>

                <option value="Sistemas">
                  Sistemas
                </option>
              </select>

              <label>
                Link da imagem *
              </label>

              <input
                type="url"
                value={imagem}
                onChange={(e) => setImagem(e.target.value)}
                placeholder="Cole aqui o link da imagem"
              />

              <small className="ajuda-imagem">
                Cole o link de uma imagem da internet.
              </small>

              {imagem && (
                <div className="preview-imagem">
                  <p>
                    Pré-visualização
                  </p>

                  <img
                    src={imagem}
                    alt="Pré-visualização"
                  />
                </div>
              )}

              <label>
                Descrição *
              </label>

              <textarea
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                placeholder="Digite uma breve descrição..."
              />

              <div className="form-acoes">
                <button
                  className="botao-voltar"
                  onClick={() => setPasso(2)}
                >
                  Voltar
                </button>

                <button
                  className="botao-continuar"
                  onClick={() => setPasso(4)}
                >
                  Continuar →
                </button>
              </div>

              {acao === "alterar" && (
                <div className="excluir-area">
                  <div className="linha-excluir"></div>

                  <p>
                    Este card já existe no sistema.
                  </p>

                  <button
                    className="botao-excluir"
                    onClick={excluir}
                  >
                    <span className="icone-lixeira">
                      <span className="tampa-lixeira"></span>
                      <span className="corpo-lixeira"></span>
                    </span>

                    Excluir card
                  </button>
                </div>
              )}
            </div>
          </section>
        )}

        {passo === 4 && (
          <section className="tela-passo">
            <div className="numero-grande">
              4
            </div>

            <h2>
              Confira o card
            </h2>

            <p>
              Revise as informações preenchidas antes de salvar o card.
            </p>

            <div className="resumo">
              <img
                src={imagem}
                alt={nome}
              />

              <div className="resumo-conteudo">
                <span>
                  {categoria}
                </span>

                <h3>
                  {nome}
                </h3>

                <p>
                  {descricao}
                </p>
              </div>
            </div>

            <div className="conferencia-info">
              <strong>
                Tudo certo?
              </strong>

              <p>
                Confira a imagem, o nome, a categoria
                e a descrição antes de continuar.
              </p>
            </div>

            <button
              className="botao-principal"
              onClick={salvar}
            >
              ✓ Salvar card
            </button>
          </section>
        )}

        {passo === 5 && (
          <section className="tela-passo">
            <div className="numero-grande sucesso">
              ✓
            </div>

            <h2>
              Card salvo com sucesso!
            </h2>

            <p>
              As informações do card foram salvas.
            </p>

            <button
              className="botao-principal"
              onClick={() => setPasso(6)}
            >
              Ver resultado →
            </button>
          </section>
        )}

        {passo === 6 && (
          <section className="tela-passo">
            <div className="numero-grande">
              6
            </div>

            <h2>
              Resultado no site
            </h2>

            <p>
              Veja como o card ficará disponível no site.
            </p>

            <div className="resultado-card">
              <img
                src={imagem}
                alt={nome}
              />

              <div>
                <span>
                  {categoria}
                </span>

                <h3>
                  {nome}
                </h3>

                <p>
                  {descricao}
                </p>
              </div>
            </div>

            <button
              className="botao-principal"
              onClick={onVoltar}
            >
              Voltar para o Admin
            </button>
          </section>
        )}

        {passo === 7 && (
          <section className="tela-passo">
            <div className="numero-grande sucesso">
              ✓
            </div>

            <h2>
              Card excluído com sucesso!
            </h2>

            <p>
              O card foi removido do sistema.
            </p>

            <button
              className="botao-principal"
              onClick={onVoltar}
            >
              Voltar para o Admin
            </button>
          </section>
        )}
      </main>
    </div>
  );
}

export default Card;
