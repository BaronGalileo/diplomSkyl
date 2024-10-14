import { Outlet } from "react-router-dom";
import React from "react";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";







function Layout() {
    
    return (
        <div className="page">
            <header> 
                <Header/>
            </header>
            <main>
                <Outlet/>            
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}

export {Layout}