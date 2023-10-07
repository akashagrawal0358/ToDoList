import React from 'react'

const ToDoList = (props) => {

    return (
        <>
            <div className='todolist'>

                {/* click occurs here but function is defined in parent component 
                    onSelect calls the function in parent component 
                */}
                <i className="fa fa-times" onClick={() => {
                    // props.id gives the id of item that to be deleted
                    props.onSelect(props.id)
                     
                }} />

                <li> {props.item} </li>
            </div>
        </>
    )
}

export default ToDoList