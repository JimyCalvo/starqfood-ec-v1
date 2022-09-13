import React from 'react';
import Footer from '../Components/App/Footer';
import NavBar from '../Components/App/NavBar';
import Show from '../Components/Platillos/Show.js';
function Platos() {
    return(
        <>
            <header>
                <NavBar/>
            </header>
            <main>
                <Show/>
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}
export default Platos

