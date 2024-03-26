import React, { useState } from 'react'

export const ProductDetails = () => {

    const[proCount,setProCount]=useState(0)

    const products =[{
        id:1,
        name:'ud',
        price:100
    },{
        id:2,
        name:'bunny',
        price:200
    },]   

    const addpro=(pro)=>{
            setProCount(proCount+1);
            console.log(products.name)
    }
        
  return (
    <div>
        <div>
            <div >Product</div>
            {products.map((pro,index)=>{
                return(
                    <div key={pro.id} >
                <span>{pro.name}</span>
                <span>{pro.price}</span>
                <button onClick={addpro}>+</button>
                <span>{proCount}</span>
                <button>-</button>
                </div>
                )
            })}
        </div>
        <div>

        </div>
    </div>
  )
}
