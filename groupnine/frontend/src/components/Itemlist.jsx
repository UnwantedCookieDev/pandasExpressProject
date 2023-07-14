import React from 'react';



function Itemlist(props) {
    return (<div id={'book-list'}>
        <h4>Customer List</h4>
        <ul>
        {props.customers.slice(0,5).map(
    (customer, index) => {
        return <li key={index} >
            {customer.id} - {customer.first_name} - {customer.last_name}</li>
    }
)}
        </ul>
        <input type={'button'} value="New Book" />
    </div>
    );
}

export default Itemlist;