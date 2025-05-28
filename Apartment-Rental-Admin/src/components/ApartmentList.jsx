import {results} from "../data/listings.json"
import React, { useState } from 'react'

function ApartmentList() {
    const [data, setData] = useState(results);
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
    <main>{data.map((eachData)=>{
        return (<article className="listing">
            <section>
                <img id='picture' src={eachData.picture_url} alt="picture"/>

            </section>
            <section className="description"><h2>{eachData.name}</h2>
                <h4>Availability: {eachData.has_availability ? "✅": "❌"}</h4>
                <button onClick={() =>{
                    handleDelete(eachData.id)
                }}>delete</button></section>
            
                </article>

    )})}
  </main>
  </>
  )
}


export default ApartmentList