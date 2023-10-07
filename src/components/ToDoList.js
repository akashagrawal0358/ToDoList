import React from 'react'

const ToDoList = (props) => {
    return (
        <>
            <div className='todolist'>
                <i class="fa fa-times" />
                <li> {props.item} </li>
            </div>
        </>
    )
}

export default ToDoList