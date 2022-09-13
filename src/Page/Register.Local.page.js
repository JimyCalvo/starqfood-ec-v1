import React from 'react';
// import Navbar from '../components/Navbar.component';
import RegisterLocal from '../Components/RegisterLocal/Register.Local.component'
import Footer from '../Components/App/Footer';
import NavBar from '../Components/App/NavBar';


function RegisterP() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <RegisterLocal />
      </main>
      <footer>
        <Footer />
      </footer>

    </>
  )
}
export default RegisterP
