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
        return (<section className="listing">{eachData.name}
                <h4>{eachData.has_availability ? "available": "not available"}</h4>
                <button onClick={() =>{
                    handleDelete(eachData.id)
                }}>delete</button>
                </section>

    )})}
  </main>
  </>
  )
}


export default ApartmentList