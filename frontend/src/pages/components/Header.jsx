function Header() {
  return (
    <header className="site-header">
      <div className="site-logo">
        <strong>COSMOS</strong>
        <span>OBSERVATORY</span>
      </div>

      <nav aria-label="Navegação principal">
        <a href="/home">Início</a>
        <a href="/explorar">Explorar</a>
        <a href="/planetas" aria-current="page">Planetas</a>
        <a href="/sistemas">Sistemas</a>
        <a href="/perfil">Meu Perfil</a>
      </nav>
    </header>
  );
}

export default Header;
