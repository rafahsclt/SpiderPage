import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaPlaystation } from 'react-icons/fa'

import logoImg from '../public/logo-spiderman.svg'
import marvelImg from '../public/marvel.svg'
import spiderText from '../public/spiderman-text.png'
import spiderImg from '../public/spider-man.png'

const Home:React.FC = () => {
  return (
    <>
    <header>
      <nav className="navbar">
        <div className="navbar-menu">
          <div className="logo">
            <img src={logoImg} className="logo-image" alt="Logo"/>
          </div>
          <ul className="navbar-list">
            <li><a href="" className="nav-link">Home</a></li>
            <li><a href="" className="nav-link">Story</a></li>
            <li><a href="" className="nav-link">Wallpapers</a></li>
            <li><a href="" className="nav-link">#BeYourself</a></li>
          </ul>
        </div>
        <div className="navbar-social">
          <FaFacebook size={24} />
          <FaInstagram size={24} />
          <FaYoutube size={24} />
          <FaTwitter size={24} />
        </div>
        <div className="bx mr-2">

        </div>
      </nav>
    </header>

    <div className="bg-video">
      <video 
        className="video"
        autoPlay
        muted
        loop  
      >
        <source src="video/spiderman-video.mp4" type="video/mp4"/>
      </video>
    </div>

    <main className="container">
      <div className="container-item-1">
        <section className="px-1">
          <img src={spiderText} className="spider-text" alt="Spider Man Text"/>
        </section>
        <p className="my-2">
          Na aventura mais recente do universo de Marvel's Spider-Man, 
          o adolescente Miles Morales está se adaptando à sua nova 
          casa enquanto segue os passos de seu mentor, Peter Parker, 
          para se tornar um novo Spider-Man. Mas uma violenta disputa 
          de forças ameaça destruir seu novo lar e faz o aspirante a 
          herói perceber que com grandes poderes também vêm grandes 
          responsabilidades. Para salvar a Nova York da Marvel, 
          Miles precisa reconhecer e assumir o título de Spider-Man.
        </p>

        <section className="my-1">
          <a href="" className="btn-primary">Pre-order Now</a>
          <a href="" className="btn-secondary ml-2">Watch the Teaser</a>
        </section>

        <section className="flex my-2">
          <FaPlaystation size={36} className="mr-2" />
          <img src={marvelImg} alt="Marvel" width={70} height={36} />
        </section>
      </div>

      <div className="container-item-2">
        <img src={spiderImg} className="spider-img" alt="Spider Man Image"/>
      </div>
    </main>
    </>
  )
}

export default Home