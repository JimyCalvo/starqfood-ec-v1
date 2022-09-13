import React from 'react';
import ModuleName from '../Components/Home/Home.component';
import Footer from '../Components/App/Footer';
import NavBar from '../Components/App/NavBar';


function home() {
    return (
        <>
            <header>
                <NavBar/>
            </header>
            <main>
                <ModuleName />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}
export default home;