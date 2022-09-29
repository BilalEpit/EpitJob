import React from 'react'
import image from '../image/logo.png'

const Navbar = () => {
  return (
    <div>
       <img src={"image"} alt="logoo" style="height:110px"/>
        <ul id="liste_header">
            <li>Nos companies</li>
            <li>Authentification</li>
            <li>S'inscrire</li>
        </ul>
    </div>
  )
}

export default Navbar
