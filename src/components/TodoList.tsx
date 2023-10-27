import React from "react";
import { Todo } from "./models/Todo";
import TodoListitem from "./TodoListItem";

const TodoList = () => {
    const todos : Todo[] = [
        {id:1, title:'Ir ao supermercado', done:false},
        {id:2, title:'Ir à academia', done:false},
    ];
    return(
    <table className="uk-table">
        <caption>Lista de Tarefas</caption>
        <thead>
            <th>id</th>
            <th>Tarefas</th>
            <th>done</th>
        </thead>

        <tbody>
            { todos?.map(todo => (
                <TodoListitem todo={todo} key={todo.id}></TodoListitem>
            ))

            }
        </tbody>
    </table>
    )
}

export default TodoList;