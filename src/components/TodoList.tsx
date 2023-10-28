import React, { useContext } from "react";
import TodoListitem from "./TodoListItem";
import { TodoContextType } from "../contexts/TodoContextType";
import { TodoContext } from "../contexts/TodoContext";

const TodoList = () => {
    const { todos } = useContext<TodoContextType>(TodoContext);

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