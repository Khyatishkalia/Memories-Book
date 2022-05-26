import React from 'react';
import "./Card.css"
export default function Card(props) {
  return (
      <div className="">
          {props.children}
      </div>
  )
}
// as ExpenseDate is children of card component