import React from 'react';
import Register from '../Components/Register/Register.component';
import NavBar from '../Components/App/NavBar';



function RegisterP() {
    return(
        <>
            <header>
              <NavBar/>
            </header>
            <main>
              <Register/>
            </main>
            <footer>
              <div> Pie de pagina va aqui </div>
            </footer>
            
        </>
    )
}
export default RegisterP

