export default function Profile({ profile, error, updateProfile, saveProfile }) {
  if (error && !profile) return <div className="status-message">{error}</div>
  if (!profile) return <div className="status-message">Carregando perfil...</div>

  return <>
    <div className="eyebrow">CONTA</div>
    <h1>Meu Perfil</h1>
    <div className="content-grid">
      <aside className="sidebar">
        <section className="identity card">
          <div className="avatar large">EC<span className="online" /></div>
          <h2>{profile.name}</h2>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <span className="role">Astrônoma Pesquisadora</span>
          <small>{profile.institution || 'Observatório Cosmos'}</small>
        </section>
        <section className="stats card">
          <div className="card-label">ATIVIDADE</div>
          <p>Objetos adicionados <b>8</b></p>
          <p>Sistemas explorados <b className="purple">4</b></p>
          <p>Anos ativos <b className="green">3</b></p>
          <p>Colaborações <b className="orange">12</b></p>
        </section>
        <section className="quick card">
          <div className="card-label">ACESSO RÁPIDO</div>
          <a href="#home">Dashboard <span>›</span></a>
          <a href="#planetas">Catálogo de Planetas <span>›</span></a>
          <a href="#sistemas">Sistemas Estelares <span>›</span></a>
          <a href="#universo">Mapa do Universo <span>›</span></a>
        </section>
      </aside>

      <div className="settings">
        <section className="card form-card">
          <div className="card-label">INFORMAÇÕES PESSOAIS</div>
          <div className="form-grid">
            <Field label="Nome completo" value={profile.name} onChange={(value) => updateProfile('name', value)} />
            <Field label="E-mail" value={profile.email} onChange={(value) => updateProfile('email', value)} />
            <Field label="Instituição" value={profile.institution} onChange={(value) => updateProfile('institution', value)} />
            <Field label="Especialização" value={profile.specialty} onChange={(value) => updateProfile('specialty', value)} />
            <label className="full">BIOGRAFIA<textarea value={profile.bio || ''} onChange={(event) => updateProfile('bio', event.target.value)} /></label>
          </div>
          {error && <p className="form-error">{error}</p>}
          <button className="primary" onClick={saveProfile}>Salvar alterações</button>
        </section>

        <section className="card preferences">
          <div className="card-label">PREFERÊNCIAS</div>
          <Toggle label="Notificações de sistema" hint="Alertas de novos objetos catalogados" checked={profile.systemAlerts} onChange={() => updateProfile('systemAlerts', !profile.systemAlerts)} />
          <Toggle label="Atualizações científicas" hint="Novidades em descobertas astronômicas" checked={profile.scienceUpdates} onChange={() => updateProfile('scienceUpdates', !profile.scienceUpdates)} />
          <div className="units"><b>Unidades de medida</b><div><button className={profile.unitSystem === 'metric' ? 'unit selected' : 'unit'} onClick={() => updateProfile('unitSystem', 'metric')}>Métrico (km, kg)</button><button className={profile.unitSystem === 'imperial' ? 'unit selected' : 'unit'} onClick={() => updateProfile('unitSystem', 'imperial')}>Imperial (mi, lb)</button></div></div>
        </section>

        <section className="card security">
          <div className="card-label">SEGURANÇA</div>
          <button type="button">Alterar senha <span>›</span></button>
          <button type="button">Autenticação de dois fatores <span>›</span></button>
        </section>

        <section className="card danger"><div><div className="card-label">ZONA DE RISCO</div><b>Encerrar sessão</b><small>Sair da plataforma COSMOS</small></div><button type="button">Sair</button></section>
      </div>
    </div>
  </>
}

function Field({ label, value, onChange }) {
  return <label>{label}<input value={value || ''} onChange={(event) => onChange(event.target.value)} /></label>
}

function Toggle({ label, hint, checked, onChange }) {
  return <div className="toggle-row"><div><b>{label}</b><small>{hint}</small></div><button type="button" className={checked ? 'toggle on' : 'toggle'} onClick={onChange} aria-label={`Alternar ${label}`}><span /></button></div>
}
