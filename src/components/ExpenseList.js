import React, { useContext } from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';

const ExpenseList = () => {
    const { expenses } = useContext(AppContext);

    return (
        <table className='table'>
      <tr>
        <th scope="col">Items</th>
        <th scope="col">Quantity</th>
        <th scope="col">Unit Price</th>
        <th scope="col">Items Price</th>
        <th scope="col">Add Item</th>
        <th scope="col">Minus Item</th>
        <th scope="col">Remove</th>
      </tr>

        <tbody>
            {expenses.map((expense) => (
                <ExpenseItem id={expense.id} key={expense.id} name={expense.name} quantity={expense.quantity} unitprice={expense.unitprice} />
            ))}
        </tbody>
        </table>
    );
};

export default ExpenseList;
