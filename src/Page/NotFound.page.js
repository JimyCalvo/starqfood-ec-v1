import React from 'react';
import Footer from '../Components/App/Footer';
import img from '../img/3828537.jpg'
import NavBar from '../Components/App/NavBar';
function NotFound() {
    return(
        <>
            <header>
                <NavBar/>
            </header>
            <main>
                <figure className='figure'>
                    <img className='img-fluid' src={img} alt='Pagina no Encontrada' width='100%' />
                </figure>
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}
export default NotFound

