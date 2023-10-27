import React, { createContext } from "react";
import { TodoContextType } from "./TodoContextType";

export const TodoContext = createContext<TodoContextType>({
    todos:[
        {id:1, title:'Ir ao supermercado', done:true},
        {id:2, title:'Ir à academia', done:false},
    ],
    removeTodo: () => {},
    addTodo: () => {},
    toggle: () => {}
})