import React, { useState } from "react";
import ToDoList from "./ToDoList";

const Todo = () => {

    const [item, setItem] = useState("");

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

    const deleteItem = (id)=>{
        
        setList((oldItems)=>{
            return oldItems.filter((arrElem , index)=>{
                  return index !== id ;
            })
        })
        console.log("deleted");
    }


    return (
        <>
            <div className="main_div">

                <div className=" container center_div" >
                    <div className="card text-center rounded-2 card_div">
                        <div className="card-header card-heading">
                            <h1 >To Do List</h1>
                        </div>
                        <div className="card-body ">
                            <h4 className="card-title ">Add Items in List...</h4>
                            <p className="card-text">
                                <input className="input" type="text" id="itemInput"
                                    onChange={(e) =>  setItem(e.target.value) } value={item} />
                                <button className="btnn" onClick={AddItem}>+</button>
                            </p>
                            <ol>
                                {  // Iterate over the list array and return all items
                                    list.map((curElem , index) => {

                                        // key is used to identify a particular item
                                        return <ToDoList key={index} 
                                           id={index} item={curElem}
                                           onSelect={deleteItem}
                                        />
                                    })
                                }
                            </ol>
                        </div>
                        <div className="card-footer text-body-secondary">
                            @copyright Agrawal
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo;