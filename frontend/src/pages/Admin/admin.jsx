import { useState } from "react";
import "./Admin.css";

function Admin({ onAbrirCard }) {
  const [pagina, setPagina] = useState("inicio");
  const [modoPerfil, setModoPerfil] = useState("");

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

            <button>
              Explorar
            </button>

            <button>
              Planetas
            </button>

            <button>
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
            <b>Sair</b>
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

          <button>
            Explorar
          </button>

          <button>
            Planetas
          </button>

          <button>
            Sistemas
          </button>

          <button onClick={() => abrirPerfil()}>
            Meu Perfil
          </button>
        </nav>

        <div className="usuario">
          <span>👤</span>
          <p>Elena Costa</p>
          <b>Sair</b>
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
              onAbrirCard("Sistema Estelares")
            }
          >
            ✦ SISTEMA ESTELARES
          </button>

          <button
            onClick={() =>
              onAbrirCard("Mapa do Universo")
            }
          >
            ✦ MAPA DO UNIVERSO
          </button>

          <button
            onClick={() =>
              onAbrirCard("Catálogo de Objetos")
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