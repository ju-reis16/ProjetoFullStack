import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Admin.css";

function Admin({ onAbrirCard }) {
  const navigate = useNavigate();
  const [pagina, setPagina] = useState("inicio");
  const [modoPerfil, setModoPerfil] = useState("");

  function abrirCard(topico) {
    if (onAbrirCard) {
      onAbrirCard(topico);
      return;
    }

    navigate("/card", { state: { topico } });
  }

  function sair() {
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");
    navigate("/login", { replace: true });
  }

  function abrirPerfil(modo = "") {
    setPagina("perfil");
    setModoPerfil(modo);
  }

  function voltarInicio() {
    setPagina("inicio");
    setModoPerfil("");
  }

  if (pagina === "perfil") {
    return (
      <div className="admin">
        <header className="admin-header">
          <div className="logo">
            <div className="logo-circulos">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div>
              <h1>COSMOS</h1>
              <p>OBSERVATORY</p>
            </div>
          </div>

          <nav>
            <button onClick={voltarInicio}>
              Início
            </button>

            <button onClick={() => navigate("/explorar")}>
              Explorar
            </button>

            <button onClick={() => navigate("/planetas")}>
              Planetas
            </button>

            <button onClick={() => navigate("/sistemas")}>
              Sistemas
            </button>

            <button
              className="nav-ativo"
              onClick={() => abrirPerfil()}
            >
              Meu Perfil
            </button>
          </nav>

          <div className="usuario">
            <span>👤</span>
            <p>Elena Costa</p>
            <button type="button" onClick={sair}>Sair</button>
          </div>
        </header>

        <p className="missao">
          MISSÃO ATIVA • 8 DE SETEMBRO DE 2026
        </p>

        <section className="perfil">
          <div className="perfil-icone">
            ♙
          </div>

          <h2>Meu Perfil</h2>

          <p className="perfil-texto">
            Gerencie as informações de acesso da sua conta.
          </p>

          {!modoPerfil && (
            <div className="perfil-opcoes">
              <button
                onClick={() => setModoPerfil("alterar")}
              >
                <strong>Alterar</strong>

                <span>
                  Altere seu e-mail ou sua senha.
                </span>
              </button>

              <button
                onClick={() => setModoPerfil("novo")}
              >
                <strong>Novo</strong>

                <span>
                  Adicione um novo e-mail ou senha.
                </span>
              </button>

              <button
                className="opcao-excluir"
                onClick={() => setModoPerfil("excluir")}
              >
                <strong>Excluir</strong>

                <span>
                  Exclua o perfil desta conta.
                </span>
              </button>
            </div>
          )}

          {modoPerfil === "alterar" && (
            <PerfilFormulario
              tipo="alterar"
              voltar={() => setModoPerfil("")}
            />
          )}

          {modoPerfil === "novo" && (
            <PerfilFormulario
              tipo="novo"
              voltar={() => setModoPerfil("")}
            />
          )}

          {modoPerfil === "excluir" && (
            <ExcluirPerfil
              voltar={() => setModoPerfil("")}
            />
          )}
        </section>
      </div>
    );
  }

  return (
    <div className="admin">
      <header className="admin-header">
        <div className="logo">
          <div className="logo-circulos">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div>
            <h1>COSMOS</h1>
            <p>OBSERVATORY</p>
          </div>
        </div>

        <nav>
          <button className="nav-ativo">
            Início
          </button>

          <button onClick={() => navigate("/explorar")}>
            Explorar
          </button>

          <button onClick={() => navigate("/planetas")}>
            Planetas
          </button>

          <button onClick={() => navigate("/sistemas")}>
            Sistemas
          </button>

          <button onClick={() => abrirPerfil()}>
            Meu Perfil
          </button>
        </nav>

        <div className="usuario">
          <span>👤</span>
          <p>Elena Costa</p>
          <button type="button" onClick={sair}>Sair</button>
        </div>
      </header>

      <p className="missao">
        MISSÃO ATIVA • 8 DE SETEMBRO DE 2026
      </p>

      <h2 className="bem-vindo">
        Bem - Vindo, <span>Admin</span>
      </h2>

      <section className="topicos">
        <h3>Conteúdos do Cosmos</h3>

        <div className="botoes-principais">
          <button
            onClick={() =>
              abrirCard("Sistema Estelares")
            }
          >
            ✦ SISTEMA ESTELARES
          </button>

          <button
            onClick={() =>
              abrirCard("Mapa do Universo")
            }
          >
            ✦ MAPA DO UNIVERSO
          </button>

          <button
            onClick={() =>
              abrirCard("Catálogo de Objetos")
            }
          >
            ✦ CATÁLOGO DE OBJETOS
          </button>

          <button
            onClick={() => abrirPerfil()}
          >
            ✦ MEU PERFIL
          </button>
        </div>
      </section>
    </div>
  );
}

function PerfilFormulario({ tipo, voltar }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [salvo, setSalvo] = useState(false);

  if (salvo) {
    return (
      <div className="perfil-sucesso">
        <div>✓</div>

        <h3>
          {tipo === "alterar"
            ? "Alteração realizada!"
            : "Novo acesso adicionado!"}
        </h3>

        <p>
          As informações foram salvas com sucesso.
        </p>

        <button onClick={voltar}>
          Voltar para o perfil
        </button>
      </div>
    );
  }

  return (
    <div className="perfil-form">
      <h3>
        {tipo === "alterar"
          ? "Alterar informações"
          : "Adicionar novo"}
      </h3>

      <label>
        {tipo === "alterar"
          ? "Alterar e-mail"
          : "Novo e-mail"}
      </label>

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Digite o e-mail"
      />

      <label>
        {tipo === "alterar"
          ? "Alterar senha"
          : "Nova senha"}
      </label>

      <input
        type="password"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        placeholder="Digite a senha"
      />

      <div className="perfil-acoes">
        <button
          className="perfil-voltar"
          onClick={voltar}
        >
          Voltar
        </button>

        <button
          className="perfil-salvar"
          onClick={() => setSalvo(true)}
        >
          {tipo === "alterar"
            ? "Salvar alterações"
            : "Adicionar"}
        </button>
      </div>
    </div>
  );
}

function ExcluirPerfil({ voltar }) {
  const [confirmado, setConfirmado] = useState(false);

  if (confirmado) {
    return (
      <div className="perfil-sucesso">
        <div>✓</div>

        <h3>
          Perfil excluído!
        </h3>

        <p>
          O perfil foi excluído com sucesso.
        </p>

        <button onClick={voltar}>
          Voltar para o perfil
        </button>
      </div>
    );
  }

  return (
    <div className="perfil-excluir">
      <div className="excluir-icone">
        !
      </div>

      <h3>
        Excluir perfil
      </h3>

      <p>
        Tem certeza que deseja excluir este perfil?
      </p>

      <div className="perfil-acoes">
        <button
          className="perfil-voltar"
          onClick={voltar}
        >
          Cancelar
        </button>

        <button
          className="botao-excluir"
          onClick={() => setConfirmado(true)}
        >
          Excluir perfil
        </button>
      </div>
    </div>
  );
}

export default Admin;