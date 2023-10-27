import React from "react";
import Navbar from "./Navbar";
import TodoList from "./TodoList";

const App = () => {
    return(
        <div className="uk-container">
            <Navbar/>
            <h1>Meu Primeiro App</h1>
            <TodoList/>
        </div>
    )
}

export default App;