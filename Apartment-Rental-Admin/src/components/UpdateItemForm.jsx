import {React, use, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom';

function UpdateItemForm({data, setData}) {
    const {itemId} = useParams(); 
    const updateItem = data.find((item) =>{
        if(item.id == itemId){
            return item
        }
    })
    console.log(updateItem)
    const[picture_url, SetPicture_url] = useState(updateItem.picture_url);
    const [name, setName] = useState(updateItem.name);
    const [description, setDescription] = useState("");
    const [host_name, setHost_Name] = useState(updateItem.host_name);
    const [host_picture_url, setHost_picture_url] = useState(updateItem.host_picture_url);
    const [price, setPrice] = useState(0);
    const nav = useNavigate();



const handlePictureUrlChange = (e) => SetPicture_url(e.target.value);
const handleNameChange = (e) => setName(e.target.value);
const handlePriceChange = (e) => setPrice(e.target.value);
const handleDescriptionChange = (e) => setDescription(e.target.value);
const handleFullNameChange = (e) => setHost_Name(e.target.value);
const handleHostPictureChange = (e) => setHost_picture_url(e.target.value);

function handleUpdateApartment(event){
    event.preventDefault();
    const updatedApartmentInfo = {
        id : itemId,
        picture_url,
        name,
        description,
        host_name,
        host_picture_url,
        price,
    };

    const newUpdatedApartment = data.map((apartment) =>{
        if(apartment.id == itemId){
            return updatedApartmentInfo;
        }else {
            return apartment;
        }
    })
    setData(newUpdatedApartment);
    nav("/");

}
  return (
   <>
   <form onSubmit={handleUpdateApartment}>
    <div className='form-style'>
        <div className='ap-style'>
            <label>Picture
                <input name='picture-url' value={picture_url} type='url' onChange={handlePictureUrlChange}></input>
            </label>
            <label>Name
                <input name='name' type='text' value={name} onChange={handleNameChange}></input>
            </label>
            <label>Price
                <input name='price' type='number' value={price} onChange={handlePriceChange}></input>
            </label>
            <div className='host-style'>
                <label>Description
                <input name='description' type='text' value={description} onChange={handleDescriptionChange}></input>
            </label>
            <label>Full Name
                <input name='host-name' type='text' value={host_name} onChange={handleFullNameChange}></input>
            </label>
            <label>Your Picture
                <input name='host-picture-url' type='url' value={host_picture_url} onChange={handleHostPictureChange}></input>
            </label>
            

            </div>
        </div>

    </div>

        <button className='update-btn'>Update</button>
   </form>
   </>
  )
}

export default UpdateItemForm