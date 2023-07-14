

import Itemlist from "../components/Itemlist";
import {getCustomers} from '../utils/rest';
import React, { useState, useEffect } from 'react';





function Homepage (){

    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        let promise = getCustomers();
        promise.then(
            (text) => {
                let customerArray = JSON.parse(text);
                setCustomers(customerArray);
            }
        )
    },[]);

    return(
        <div className="App">
      <h3>Testing Api</h3>
        <Itemlist customers={customers}/>
    </div>
    )
}

export default Homepage;