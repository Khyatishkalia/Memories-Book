import "./NewExpense.css";
import React from 'react'
import ExpenseForm from "./ExpenseForm";

export default function NewExpense(props) {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    console.log(expenseData);
    props.onAddExpense(expenseData);// ssending data to app.js (parent)
  }
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler }/>
    </div>
  )
}
