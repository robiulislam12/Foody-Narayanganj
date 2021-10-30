import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Order() {
    const [orders, setOrders] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:5000/orders')
        .then(res => setOrders(res.data))
    },[])

    const handleDelivered = e =>{
       let btnText = e.target.innerText;
       btnText = 'Delivered'
       e.target.innerText = btnText;
    }
    
    return (
        <div className='container py-5'>
            <h1>Manage All orders Here</h1>
            {
                orders.map(order => <div key={order.address}>
                    <div className='d-flex justify-content-between align-items-center bg-light border m-2 px-4 w-75'>
                        <div>
                            <img width="150px" src={order?.image} alt="" />
                        </div>
                        <div className='d-flex justify-content-between'>
                            <h3>{order?.product_name}</h3>
                            <h4  className='mx-4'>{order?.price}</h4>
                            <button onClick={handleDelivered} className='btn btn-info'>Pending</button>
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
}
