import React from "react";
import { Todo } from "./models/Todo";

interface TodoListItemProps {
    todo:Todo
}

const TodoListitem = (props:TodoListItemProps) => {
    const handleChange = () => {
        console.log('mudou')
    }

    const onRemove = (todo: Todo) => {
        console.log(todo)
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