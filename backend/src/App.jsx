import { useEffect, useState } from 'react'
import './App.css'
import Home from './pages/Home.jsx'
import Universe from './pages/Universe.jsx'
import Planets from './pages/Planets.jsx'
import Systems from './pages/Systems.jsx'
import Profile from './pages/Profile.jsx'

const navigation = [['home', 'Início'], ['universo', 'Explorar'], ['planetas', 'Planetas'], ['sistemas', 'Sistemas']]

function App() {
  const [page, setPage] = useState(() => window.location.hash.slice(1) || 'home')
  const [profile, setProfile] = useState(null)
  const [error, setError] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const syncPage = () => {
      setPage(window.location.hash.slice(1) || 'home')
      setMenuOpen(false)
    }
    window.addEventListener('hashchange', syncPage)
    return () => window.removeEventListener('hashchange', syncPage)
  }, [])

  useEffect(() => {
    if (page !== 'perfil' || profile) return
    fetch('/api/profile')
      .then((response) => {
        if (!response.ok) throw new Error('Não foi possível carregar o perfil.')
        return response.json()
      })
      .then(setProfile)
      .catch((requestError) => setError(requestError.message))
  }, [page, profile])

  function navigate(target) {
    window.location.hash = target
  }

  function updateProfile(field, value) {
    setProfile((current) => ({ ...current, [field]: value }))
    setError('')
  }

  async function saveProfile() {
    const response = await fetch('/api/profile', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(profile) })
    if (!response.ok) {
      const result = await response.json()
      setError(result.error || 'Não foi possível salvar as alterações.')
      return
    }
    setProfile(await response.json())
  }

  return <div className="app-shell">
    <header className="topbar">
      <a className="brand" href="#home" aria-label="Cosmos Observatory"><span className="planet-mark"><i /><i /><i /></span><span><strong>COSMOS</strong><small>OBSERVATORY</small></span></a>
      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu">☰</button>
      <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>{navigation.map(([id, label]) => <a className={page === id ? 'active' : ''} href={`#${id}`} key={id}>{label}</a>)}</nav>
      <div className="account"><button className="profile-pill" onClick={() => navigate('perfil')}>Meu Perfil</button><span className="avatar mini">EC</span><span className="account-name">Elena Costa</span><span className="divider">|</span><button className="sign-out">Sair</button></div>
    </header>
    <main id="top">
      {page === 'home' && <Home navigate={navigate} />}
      {page === 'universo' && <Universe navigate={navigate} />}
      {page === 'planetas' && <Planets />}
      {page === 'sistemas' && <Systems />}
      {page === 'perfil' && <Profile profile={profile} error={error} updateProfile={updateProfile} saveProfile={saveProfile} />}
    </main>
    <footer>© 2026 Cosmos. Todos os direitos reservados.</footer>
  </div>
}

export default App
