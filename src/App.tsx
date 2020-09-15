// @ts-ignore
import React from 'react'
import {Navbar} from "./component/Navbar";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {TodosPage} from "./pages/TodosPage";
import {AboutPage} from "./pages/AbouPage";

const App: React.FC = () => {

    return (
        <BrowserRouter>
            <Navbar/>

            <div className="container">
                <Switch>
                    <Route component={TodosPage} path="/" exact/>
                    <Route component={AboutPage} path="/about" exact/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
