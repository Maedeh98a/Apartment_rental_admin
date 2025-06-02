import React, { useState } from 'react';
import {v4 as uuidv4} from "uuid";


function NewItemForm({data, setData}) {
const[picture_url, SetPicture_url] = useState("");
const [name, setName] = useState("");
const [description, setDescription] = useState("");
const [host_name, setHost_Name] = useState("");
const [host_picture_url, setHost_picture_url]= useState("");
const [price, setPrice] = useState(0);




const handlePictureUrlChange = (e) => SetPicture_url(e.target.value);
const handleNameChange = (e) => setName(e.target.value);
const handlePriceChange = (e) => setPrice(e.target.value);
const handleDescriptionChange = (e) => setDescription(e.target.value);
const handleFullNameChange = (e) => setHost_Name(e.target.value);
const handleHostPictureChange = (e) => setHost_picture_url(e.target.value);


function handleAddNewApartment(event){
    event.preventDefault();
    const apartmentToAdd = {
        id: uuidv4(),
        picture_url,
        name, 
        description, 
        host_name, 
        host_picture_url,
        price
    }
    console.log(apartmentToAdd, data);
    setData([apartmentToAdd, ...data ]);



}
  return (
    <>
    
    <form  onSubmit={handleAddNewApartment}>
        <div className="form-style">
        <div className='ap-style'><label> Picture
            <input name='picture-url' type='url' onChange={handlePictureUrlChange}/>
            
        </label>
        <label> Name
            <input name='name' type='text' placeholder='Apartment Name' onChange={handleNameChange}/>
        </label>
        <label> Price
            <input name='price' type='number'  onChange={handlePriceChange}/> 
        </label>
        </div> 
        <div className='host-style'>
        <label>Description
            <input name="description" type='text' onChange={handleDescriptionChange}/>
        </label>
        <label> Full Name
            <input name="host-name" type='text' placeholder='Your Name' onChange={handleFullNameChange}/>
        </label>
            <label> Your Picture
            <input name='host-picture-url' type='url' onChange={handleHostPictureChange}/>
        </label>
        </div>
        </div>
           
        
        <button className='create-btn'>Create New Apartment</button>
        
    
    </form>
 
    </>
  )
}

export default NewItemForm
