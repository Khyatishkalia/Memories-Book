import React, { useEffect, useState } from 'react';
import './App.css';
//import ExpenseItem from './components/ExpenseItem';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpenses/NewExpense';

let dummyexpenses = [];
function App() {

  const [expenses, setExpenses] = useState(dummyexpenses);
  
  function fetchData() {
     fetch('http://localhost/sample-api/api/read.php').then(
      response => {
        return response.json();
      }
    ).then(
      data => {
        //console.log(data);
        setExpenses(data);
      }
    )
  }
  useEffect(() => {
    fetchData();
  }, []);
  
 
  
  // let expenseDate = new Date(2021, 3, 25);
  // let expenseTitle = "car";
  // let expenseAmount = 300;
  const addExpenseHandler = (expense) => {
    //console.log(expense)
// const updatedExpense = [expense,...expenses]
//     setExpenses(updatedExpense);
    fetch('url', {
      method: 'POST',
      body: JSON.stringify(expense),
      headers: {
        'content-Type': 'application/json'
      }
    }).then(
      response => {
        fetchData();
      }
    )
  }
  return (

    <div className="App">
     
      <NewExpense onAddExpense={ addExpenseHandler}/>
     <Expenses item={expenses}/>
    </div>
  );
}

export default App;

 /* {<ExpenseItem date={expenseDate} title={expenseTitle} amount={expenseAmount}/>
      <ExpenseItem date={expenseDate} title={expenseTitle} amount={expenseAmount} />
      <ExpenseItem date={expenseDate} title={expenseTitle} amount={expenseAmount} />
       <ExpenseItem date={expenseDate} title={expenseTitle} amount={expenseAmount}/> */
      /* <ExpenseItem
        date={expenses[0].date}
        title={expenses[0].title}
        amount={expenses[0].amount} 
        />
      <ExpenseItem
        date={expenses[1].date}
        title={expenses[1].title}
        amount={expenses[1].amount}
      />
      <ExpenseItem
        date={expenses[2].date}
        title={expenses[2].title}
        amount={expenses[2].amount}   
        />
      <ExpenseItem
        date={expenses[3].date}
      title={expenses[3].title}
      amount={expenses[3].amount} 
      /> }*/
    //    {
    //   id: "e1",
    //   title: "school fee",
    //   amount: 250,
    //   date: new Date(2021, 3, 28)
    // },
    //  {
    //   id: "e12",
    //   title: "car",
    //   amount: 2340,
    //   date: new Date(2021, 3, 26)
    // },
    //   {
    //   id: "e3",
    //   title: "drg",
    //   amount: 670,
    //   date: new Date(2021, 2, 27)
    // },
    //   {
    //   id: "e4",
    //   title: "bhguy",
    //   amount: 2570,
    //   date: new Date(2021, 3, 24)
    // },