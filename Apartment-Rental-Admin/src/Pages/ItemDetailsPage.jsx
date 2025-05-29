import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import {results} from "../data/listings.json"

function ItemDetailsPage() {
  const{itemId} = useParams();
  const itemDetails = results.find((result)=>{
    if(result.id == itemId){
      return true
    }else{
      return false
    }
  })
  const [item, setItem] = useState(itemDetails)
  console.log(item)



  return (
    <section className='apartment-details'>
      <img src={item.picture_url}/>
      <h3>{item.name} </h3> 
      <h4>Cost Per Night: {item.price}</h4>
      <p>{item.description}</p>

      <div className='host-details'>
        <h5>By: {item.host_name}</h5>
        <img src={item.host_picture_url} alt="host-picture"/>
      </div>
    </section>
  
  )
}

export default ItemDetailsPage