import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaTimesCircle, FaPlusCircle, FaMinusCircle } from 'react-icons/fa';

const ExpenseItem = (props) => {
    const { dispatch, Location} = useContext(AppContext);

    const handleAddItem = () => {
        const item = {
            name: props.name,
            quantity: 1,
        };

        dispatch({
            type: 'ADD_QUANTITY',
            payload: item,
        });
    };

    const handleReduceItem = () => {
        const item = {
            name: props.name,
            quantity: 1,
        };

        dispatch({
            type: 'RED_QUANTITY',
            payload: item,
        });
    };
    
    const handleDeleteItem = () => {
        const item = {
            name: props.name,
        };

        dispatch({
            type: 'DELETE_ITEM',
            payload: item,
        });
    };


    return (
        <tr>
        <td>{props.name}</td>
        <td>{props.quantity}</td>
        <td>{Location}{parseInt(props.unitprice)}</td>
        <td>{Location}{parseInt(props.quantity)*parseInt(props.unitprice)}</td>
        <td><FaPlusCircle size='2.2em' color="green" onClick={handleAddItem}></FaPlusCircle></td>
        <td><FaMinusCircle size='2.2em' color="grey" onClick={handleReduceItem}></FaMinusCircle></td>
        <td><FaTimesCircle size='2.2em' color="red" onClick={handleDeleteItem}></FaTimesCircle></td>
        </tr>
    );
};

export default ExpenseItem;
