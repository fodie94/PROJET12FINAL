import '../styles/Header.css'
import React from 'react'
import logo from '../assets/logo1.png'
function Header() {
  return (
    <>
      <section className="header">
        <div className="LogoWeb">
          <img src={logo} alt="logoWeb" />
        </div>
        <div className="Accueil">Accueil</div>
        <div className="Profil">Profil</div>
        <div className="Reglage">Reglage</div>
        <div className="Communaute">Communaute</div>
      </section>
    </>
  )
}

export default Header
