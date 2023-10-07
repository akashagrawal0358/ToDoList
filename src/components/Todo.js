import React, { useState } from "react";
import ToDoList from "./ToDoList";

const Todo = () => {

    const [item, setItem] = useState();

    // list array contains all the items 
    const [list, setList] = useState([]);

    const AddItem = () => {

        setList((oldItems) => {
            //  add all the old items present in array then add new item 
            return [...oldItems, item]
        });

        // Remove the previous item from input
        setItem("");
    }
    return (
        <>
            <div className="main_div">

                <div class=" container center_div" >
                    <div class="card text-center rounded-2 card_div">
                        <div class="card-header card-heading">
                            <h1 >To Do List</h1>
                        </div>
                        <div class="card-body">
                            <h4 class="card-title ">Add Items in List...</h4>
                            <p class="card-text">
                                <input className="input" type="text" id="itemInput"
                                    onChange={(e) => setItem(e.target.value)} value={item} />
                                <button className="btnn" onClick={AddItem}>+</button>
                            </p>
                            <ol>
                                {  // Iterate over the list array and return all items
                                    list.map((curElem) => {
                                        return <ToDoList item={curElem}/>
                                    })
                                }
                            </ol>
                        </div>
                        <div class="card-footer text-body-secondary">
                            @copyright Agrawal
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo;