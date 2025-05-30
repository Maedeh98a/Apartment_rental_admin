import { Link } from "react-router-dom";

import React, { useState } from 'react'
import NewItemForm from "../components/NewItemForm";


function DashboardPage({data, setData}) {
  
    function handleDelete(id){
         const deleteList = data.filter((newData) =>{
                        if(id !== newData.id){
                            return true
                        }else{
                            return false
                        }
                    })
        setData(deleteList);
    }
    // console.log(data)
  return (
    <>
    <main className="dashboard">
        
        <article id="form">
        <h1 id='add-apartment'>Add Your Apartment</h1>
        <NewItemForm data={data} setData={setData}/>
        </article>
    <article>
        {data.map((eachData)=>{
        return (<Link to={`item-details/${eachData.id}`} key={eachData.id}><article className="listing">
            <section>
                <img id='picture' src={eachData.picture_url} alt="picture"/>

            </section>
            <section className="description"><h2>{eachData.name}</h2>
                <h4>Availability: {eachData.has_availability ? "✅": "❌"}</h4>
                <button onClick={() =>{
                    handleDelete(eachData.id)
                }}>delete</button></section>
            
                </article></Link>

    )})}
    </article>
  </main>
  </>
  )
}

export default DashboardPage