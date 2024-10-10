import { Outlet } from "react-router-dom";
import React from "react";
// import { Img } from "../Img/img";
// import { Text } from "../Text/Text";
// import { useSelector} from "react-redux";
// import { Traffic } from "../Traffic/Traffic";
// import { Account } from "../Account/Account";




function Layout() {

    // const isAuth = useSelector(state => state.auth);

    return (
        <div className="page">
            <header>   
                <h1>Шапка</h1>  
            </header>
            <main>
                <Outlet/>            
            </main>
            <footer>
                <h2>Подвал</h2>
            </footer>
      </div>
    )
}

export {Layout}