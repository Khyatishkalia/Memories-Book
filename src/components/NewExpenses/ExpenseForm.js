import "./ExpenseForm.css";
import React, { useState } from 'react'

export default function ExpenseForm(props) {

    const [enteredTtile, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");
    
    const titleChangeHandler = (e) => {
      //  console.log(e.target.value); value aarhaa h
        setEnteredTitle(e.target.value);
    }
 const amountChangeHandler = (e) => {
     setEnteredAmount(e.target.value);
    }
     const dateChangeHandler = (e) => {
         setEnteredDate(e.target.value);
    }
    const submitHandler = (e) => {
        e.preventDefault();
        const expenseData = {
            title: enteredTtile,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData);//passing data to parent componenet
        console.log(expenseData);
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
    }
  return (
      <form onSubmit={submitHandler}>
          <div className="new-expense__controls">
              <div className="new-expense__control">
                  <label>Title</label>
                  <input type="text" value={ enteredTtile} onChange={titleChangeHandler}/>
              </div>
              <div className="new-expense__control">
                  <label>Amount</label>
                  <input type="number" min="0.01" step="0.01" value={ enteredAmount}onChange={amountChangeHandler}/>
              </div>
              <div className="new-expense__control">
                  <label>Date</label>
                  <input type="date" value={enteredDate }onChange={dateChangeHandler}/>
              </div>
          </div>
          <div>
              <button type="submit">Add Expense</button>
          </div>
     </form>
  )
}
