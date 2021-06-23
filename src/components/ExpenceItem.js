import React from 'react'
import './ExpenceItem.css'
import { Expenses } from './data'
// expenceItem
function ExpenceItem() {
  const expenseDate = new Date(2021, 2, 28)
  const expenseTitle = 'Car Insurence'
  const expenseAmount = 294.43
  return (
    <div>
      {Expenses.map(({ title, amount, date, id }) => {
        return (
          <div className='expense-item'>
            <div>
              <div>{date.toLocaleString('en-US', { month: 'long' })}</div>
              <div>{date.toLocaleString('en-US', { day: '2-digit' })}</div>
              <div>{date.getFullYear()}</div>
            </div>
            <div className='expense-item__description'>
              <h2>{title}</h2>
              <div className='expense-item__price'>{amount}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ExpenceItem
