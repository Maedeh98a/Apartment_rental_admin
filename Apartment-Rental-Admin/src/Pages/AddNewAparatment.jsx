import React from 'react'
import NewItemForm from "../components/NewItemForm";


function AddNewAparatment({data, setData}) {
    console.log(data)
  return (
    <article id="form">
        <h1 id='add-apartment'>Add Your Apartment</h1>
        
        <NewItemForm data={data} setData={setData}/>
        </article>
  )
}

export default AddNewAparatment