import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Order() {
    const [orders, setOrders] = useState([]);

    useEffect(()=>{
        axios.get('https://blooming-falls-29149.herokuapp.com/orders')
        .then(res => setOrders(res.data))
    },[orders])

    //Try to delete order
    const deleteOrder = id =>{
        const isAgree = prompt('Are you sure? If you want, type "Yes"');
        if(isAgree.toLowerCase() === 'yes'){
            axios.delete(`https://blooming-falls-29149.herokuapp.com/order/${id}`)
            .then(res => {
                if(res.data.deletedCount > 0){
                    alert('Delete Successful')
                }
            })
            
        }
    }

    return (
        <div className='container py-5'>
            <h1>Your All orders Here</h1>
            {
                orders.map(order => <div key={order.address}>
                    <div className='d-flex justify-content-between align-items-center bg-light border m-2 px-4 lg:m-50 md:w-50 sm-w order-page'>
                        <div>
                            <img width="150px" src={order?.image} alt="" />
                        </div>
                        <div className='d-flex justify-content-between'>
                            <h3>{order?.product_name}</h3>
                            <h4  className='mx-4'>{order?.price}</h4>
                            <button onClick={() => deleteOrder(order?._id)} className='btn btn-danger'>X</button>
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
}
