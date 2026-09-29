import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";
import HeaderRouter from "../components/HeaderRouter";

function Profile() {
  const navigate = useNavigate();

  const usuario = JSON.parse(localStorage.getItem("usuario") || "{}");

  const [profile, setProfile] = useState({
    name: usuario.nome || "",
    email: usuario.email || "",
    institution: "Observatório Cosmos",
    specialty: "Astronomia",
    bio: "",
    systemAlerts: true,
    scienceUpdates: true,
    unitSystem: "metric"
  });

  const [error, setError] = useState("");
  const [salvo, setSalvo] = useState(false);

  function updateProfile(campo, valor) {
    setProfile((atual) => ({
      ...atual,
      [campo]: valor
    }));

    setSalvo(false);
  }

  function saveProfile() {
    if (!profile.name.trim() || !profile.email.trim()) {
      setError("Nome e e-mail são obrigatórios.");
      return;
    }

    setError("");

    const usuarioAtualizado = {
      ...usuario,
      nome: profile.name,
      email: profile.email
    };

    localStorage.setItem(
      "usuario",
      JSON.stringify(usuarioAtualizado)
    );

    setSalvo(true);
  }

  function sair() {
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");
    navigate("/login", { replace: true });
  }

  const iniciais = profile.name
    .split(" ")
    .filter(Boolean)
    .map((parte) => parte[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <>
        <HeaderRouter />
    <div className="profile-page">
      <div className="eyebrow">CONTA</div>

      <h1>Meu Perfil</h1>

      <div className="content-grid">

        <aside className="sidebar">

          <section className="identity card">
            <div className="avatar large">
              {iniciais || "EC"}
              <span className="online" />
            </div>

            <h2>{profile.name}</h2>

            <a href={`mailto:${profile.email}`}>
              {profile.email}
            </a>

            <span className="role">
              Administrador
            </span>

            <small>
              {profile.institution || "Observatório Cosmos"}
            </small>
          </section>

          <section className="stats card">
            <div className="card-label">
              ATIVIDADE
            </div>

            <p>
              Objetos adicionados <b>8</b>
            </p>

            <p>
              Sistemas explorados{" "}
              <b className="purple">4</b>
            </p>

            <p>
              Anos ativos{" "}
              <b className="green">3</b>
            </p>

            <p>
              Colaborações{" "}
              <b className="orange">12</b>
            </p>
          </section>

          <section className="quick card">
            <div className="card-label">
              ACESSO RÁPIDO
            </div>

            <button onClick={() => navigate("/admin")}>
              Dashboard <span>›</span>
            </button>

            <button onClick={() => navigate("/planetas")}>
              Catálogo de Planetas <span>›</span>
            </button>

            <button onClick={() => navigate("/sistemas")}>
              Sistemas Estelares <span>›</span>
            </button>

            <button onClick={() => navigate("/explorar")}>
              Mapa do Universo <span>›</span>
            </button>
          </section>

        </aside>

        <div className="settings">

          <section className="card form-card">

            <div className="card-label">
              INFORMAÇÕES PESSOAIS
            </div>

            <div className="form-grid">

              <Field
                label="Nome completo"
                value={profile.name}
                onChange={(value) =>
                  updateProfile("name", value)
                }
              />

              <Field
                label="E-mail"
                value={profile.email}
                onChange={(value) =>
                  updateProfile("email", value)
                }
              />

              <Field
                label="Instituição"
                value={profile.institution}
                onChange={(value) =>
                  updateProfile("institution", value)
                }
              />

              <Field
                label="Especialização"
                value={profile.specialty}
                onChange={(value) =>
                  updateProfile("specialty", value)
                }
              />

              <label className="full">
                BIOGRAFIA

                <textarea
                  value={profile.bio}
                  onChange={(event) =>
                    updateProfile(
                      "bio",
                      event.target.value
                    )
                  }
                />
              </label>

            </div>

            {error && (
              <p className="form-error">
                {error}
              </p>
            )}

            {salvo && (
              <p className="form-success">
                Alterações salvas com sucesso.
              </p>
            )}

            <button
              className="primary"
              onClick={saveProfile}
            >
              Salvar alterações
            </button>

          </section>

          <section className="card preferences">

            <div className="card-label">
              PREFERÊNCIAS
            </div>

            <Toggle
              label="Notificações de sistema"
              hint="Alertas de novos objetos catalogados"
              checked={profile.systemAlerts}
              onChange={() =>
                updateProfile(
                  "systemAlerts",
                  !profile.systemAlerts
                )
              }
            />

            <Toggle
              label="Atualizações científicas"
              hint="Novidades em descobertas astronômicas"
              checked={profile.scienceUpdates}
              onChange={() =>
                updateProfile(
                  "scienceUpdates",
                  !profile.scienceUpdates
                )
              }
            />

            <div className="units">
              <b>Unidades de medida</b>

              <div>
                <button
                  className={
                    profile.unitSystem === "metric"
                      ? "unit selected"
                      : "unit"
                  }
                  onClick={() =>
                    updateProfile(
                      "unitSystem",
                      "metric"
                    )
                  }
                >
                  Métrico (km, kg)
                </button>

                <button
                  className={
                    profile.unitSystem === "imperial"
                      ? "unit selected"
                      : "unit"
                  }
                  onClick={() =>
                    updateProfile(
                      "unitSystem",
                      "imperial"
                    )
                  }
                >
                  Imperial (mi, lb)
                </button>
              </div>
            </div>

          </section>

          <section className="card security">

            <div className="card-label">
              SEGURANÇA
            </div>

            <button type="button">
              Alterar senha <span>›</span>
            </button>

            <button type="button">
              Autenticação de dois fatores <span>›</span>
            </button>

          </section>

          <section className="card danger">

            <div>
              <div className="card-label">
                ZONA DE RISCO
              </div>

              <b>Encerrar sessão</b>

              <small>
                Sair da plataforma COSMOS
              </small>
            </div>

            <button
              type="button"
              onClick={sair}
            >
              Sair
            </button>

          </section>

        </div>

      </div>
    </div>
    </>
  );
}

function Field({ label, value, onChange }) {
  return (
    <label>
      {label}

      <input
        value={value || ""}
        onChange={(event) =>
          onChange(event.target.value)
        }
      />
    </label>
  );
}

function Toggle({
  label,
  hint,
  checked,
  onChange
}) {
  return (
    <div className="toggle-row">

      <div>
        <b>{label}</b>
        <small>{hint}</small>
      </div>

      <button
        type="button"
        className={
          checked ? "toggle on" : "toggle"
        }
        onClick={onChange}
        aria-label={`Alternar ${label}`}
      >
        <span />
      </button>

    </div>
  );
}

export default Profile;