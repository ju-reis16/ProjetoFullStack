import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const API_URL = "http://localhost:3001";

async function requisicaoJson(url, opcoes) {
  try {
    const resposta = await fetch(url, opcoes);
    const dados = await resposta.json(); // This line remains unchanged

    if (!resposta.ok) {
      throw new Error(dados.error || "Não foi possível concluir a operação.");
    }

    return dados;
  } catch (error) {
    if (error instanceof TypeError) {
      throw new Error(
        "Não foi possível conectar ao servidor. Inicie e tente novamente.",
        { cause: error },
      );
    }

    throw error;
  }
}

export default function LoginCadastro() {
  const navigate = useNavigate();
  const [tela, setTela] = useState("login");
  const [mensagem, setMensagem] = useState("");
  const [carregando, setCarregando] = useState(false);

  const [login, setLogin] = useState({
    email: "",
    senha: ""
  });

  const [cadastro, setCadastro] = useState({
    nome: "",
    email: "",
    senha: "",
    confirmarSenha: ""
  });

  async function handleLogin(e) {
    e.preventDefault();
    setMensagem("");
    setCarregando(true);

    try {
      const dados = await requisicaoJson(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(login),
      });

      localStorage.setItem("token", dados.token);
      localStorage.setItem("usuario", JSON.stringify(dados.usuario));
      navigate("/home");
    } catch (error) {
      setMensagem(error.message || "Não foi possível entrar.");
    } finally {
      setCarregando(false);
    }
  }

  async function handleCadastro(e) {
    e.preventDefault();

    if (cadastro.senha !== cadastro.confirmarSenha) {
      setMensagem("As senhas não coincidem.");
      return;
    }

    setMensagem("");
    setCarregando(true);

    try {
      const dados = await requisicaoJson(`${API_URL}/api/auth/cadastro`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: cadastro.nome,
          email: cadastro.email,
          senha: cadastro.senha,
        }),
      });

      localStorage.setItem("token", dados.token);
      localStorage.setItem("usuario", JSON.stringify(dados.usuario));
      navigate("/home");
    } catch (error) {
      setMensagem(error.message || "Não foi possível criar a conta.");
    } finally {
      setCarregando(false);
    }
  }

  return (
    <main className="auth-page">

      <div className="stars"></div>

      <section className="auth-container">

        <button
          type="button"
          className="back-home"
          onClick={() => navigate("/")}
        >
          ← Voltar para o início
        </button>

        {tela === "login" ? (
          <div className="auth-box">

            <div className="logo">
              <div className="logo-icon">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div>
                <h2>COSMOS</h2>
                <p>OBSERVATORY</p>
              </div>
            </div>

            <h1>Entrar na sua conta</h1>

            <p className="subtitle">
              Explore o universo do conhecimento.
            </p>

            <form onSubmit={handleLogin}>

              <label>E-MAIL</label>

              <div className="input-box">
                <span>✉</span>

                <input
                  type="email"
                  placeholder="seu@email.com"
                  value={login.email}
                  onChange={(e) =>
                    setLogin({
                      ...login,
                      email: e.target.value
                    })
                  }
                  required
                />
              </div>

              <label>SENHA</label>

              <div className="input-box">
                <span>♙</span>

                <input
                  type="password"
                  placeholder="Digite sua senha"
                  value={login.senha}
                  onChange={(e) =>
                    setLogin({
                      ...login,
                      senha: e.target.value
                    })
                  }
                  required
                />

                <span className="eye">◉</span>
              </div>

              <div className="login-options">

                <label className="remember">
                  <input type="checkbox" />
                  <span>Lembrar de mim</span>
                </label>

                <button
                  type="button"
                  className="forgot"
                >
                  Esqueceu sua senha?
                </button>

              </div>

              <button className="main-button" type="submit">
                {carregando ? "Entrando..." : "Entrar"}
              </button>

            </form>

            {mensagem && <p role="alert">{mensagem}</p>}

            <div className="divider">
              <span></span>
              <p>ou</p>
              <span></span>
            </div>

            <p className="bottom-text">
              Não tem uma conta?

              <button
                onClick={() => {
                  setMensagem("");
                  setTela("cadastro");
                }}
              >
                Criar conta
              </button>
            </p>

          </div>

        ) : (

          <div className="auth-box cadastro-box">

            <div className="logo">
              <div className="logo-icon">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div>
                <h2>COSMOS</h2>
                <p>OBSERVATORY</p>
              </div>
            </div>

            <h1>Criar conta</h1>

            <p className="subtitle">
              Faça parte dessa jornada e explore o universo de possibilidades.
            </p>

            <form onSubmit={handleCadastro}>

              <label>NOME COMPLETO</label>

              <div className="input-box">
                <span>♙</span>
                 <input
                  type="text"
                  placeholder="Nome Sobrenome"
                  value={cadastro.nome}
                  onChange={(e) =>
                    setCadastro({
                      ...cadastro,
                      nome: e.target.value
                    })
                  }
                  required
                />
              </div>

              <label>E-MAIL</label>

              <div className="input-box">
                <span>✉</span>

                <input
                  type="email"
                  placeholder="seu@email.com"
                  value={cadastro.email}
                  onChange={(e) =>
                    setCadastro({
                      ...cadastro,
                      email: e.target.value
                    })
                  }
                  required
                />
              </div>

              <label>SENHA</label>

              <div className="input-box">
                <span>♙</span>

                <input
                  type="password"
                  placeholder="Digite sua senha"
                  value={cadastro.senha}
                  onChange={(e) =>
                    setCadastro({
                      ...cadastro,
                      senha: e.target.value
                    })
                  }
                  required
                />

                <span className="eye">◉</span>
              </div>

              <label>CONFIRMAR SENHA</label>

              <div className="input-box">
                <span>♙</span>

                <input
                  type="password"
                  placeholder="Confirme sua senha"
                  value={cadastro.confirmarSenha}
                  onChange={(e) =>
                    setCadastro({
                      ...cadastro,
                      confirmarSenha: e.target.value
                    })
                  }
                  required
                />

                <span className="eye">◉</span>
              </div>

              <button className="main-button" type="submit">
                {carregando ? "Criando..." : "Criar conta"}
              </button>

            </form>

            {mensagem && <p role="alert">{mensagem}</p>}

            <p className="bottom-text">
              Já tem uma conta?

              <button
                onClick={() => {
                  setMensagem("");
                  setTela("login");
                }}
              >
                Entrar
              </button>
            </p>

          </div>
        )}

      </section>

    </main>
  );
}
