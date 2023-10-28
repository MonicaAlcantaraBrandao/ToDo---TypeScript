import React, { useContext } from "react";
import { Todo } from "../models/Todo";
import { TodoContextType } from "../contexts/TodoContextType";
import { TodoContext } from "../contexts/TodoContext";

interface TodoListItemProps {
    todo:Todo
}

const TodoListitem = (props:TodoListItemProps) => {
    const {removeTodo, toggle} = useContext<TodoContextType>(TodoContext);

    const handleChange = (event:any) => {
        toggle(props.todo)
    }

    const onRemove = (todo: Todo) => {
        removeTodo(todo);
    }

    return(
        <tr className="uk-animation-slide-bottom-medium">
            <td className="uk-width-auto">
                <label>
                    <input type="checkbox" className="uk-checkbox" checked={props.todo.done} onChange={handleChange}/>
                </label>
            </td>
            <td className="uk-width-expand">{props.todo.title}</td>
            <td className="uk-width-auto">
                <button onClick={() => {onRemove(props.todo)}}
                    className="uk-icon-button uk-button-danger"
                    uk-icon="trash">
                </button>
            </td>
        </tr>
    )
}

export default TodoListitem