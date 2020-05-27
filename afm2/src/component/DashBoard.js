
import React,{useState, useEffect} from 'react'
import axiosWithAuth from '../axiosWithAxios/axiosWithAxios'
import Header from './Header'

import AddItem from './AddItem'
import {Link, useParams, Route} from 'react-router-dom'

// const {id} =useParams() 
const DashBoard = () => {
  
   
   const [dashItems, setdashItems] = useState([])


    useEffect(()=>{
        axiosWithAuth()
        .get(`/market`)
        .then(res =>{
            console.log('dashres', res)
           setdashItems(res.data.data)
        })
        .catch(err =>{
            console.log('err',err)
        })
    },[]
    )


    return (
        <div className='WhatsThis'>

            <Link to ='/addItem'>AddItem</Link>
<div component ={Header}/>
            <p>dashboard</p>
            
            <div component={AddItem}/>
            {dashItems.map(item =>{

                return(
                    <div className='whatsthis2'>
                    <div className='FriendsCardContainer'>
                <h2>{item.product_name}</h2>
                        <h3>{item.product_category}</h3>
                       <h3> { item.product_description}</h3>
                       <div>                </div> 
                       <h3> {item.country}</h3>
                       <h3>{item.market_name} </h3>
                       <h3>{item.product_price} </h3>
                       <h3> {item.product_quantity}</h3>
                       
                    </div>
                    </div>
                )
            })}


            
        </div>
    )
}

export default DashBoard