import "./ExpenseItem.css";
import React, { useState } from 'react';
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
const ExpenseItem = (props) => {
   
  const [title, setTitle] = useState(props.title);
  const [newTitle, setNewTitle] = useState("");

  const clickHandler = () => {
  //  alert("clicked");
    setTitle(newTitle);
  }
  const changeHandler = (e) => {
    setNewTitle(e.target.value);
    
}
  
  //  let title = "car"
    return (
        <>
          {/* //  <div className="expense-item"> */}
                <Card>
                <ExpenseDate date={props.date }/>
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">{props.amount}</div>
          </div>
          <input type="text" value={newTitle} onChange={ changeHandler}/>
          <button onClick={clickHandler}>Change Title</button>
                    </Card>
            {/* </div> */}
        </>
    )
}
export default ExpenseItem;
 {/* // <div> {props.date.toISOString()}</div>
                // nas date is also a object to usko sidha render nhi krskte isliye
                // usko phele strring m convert kia */}
                {/* <div>{month} </div>
                <div> {year}</div>
                <div>{day} </div> */}