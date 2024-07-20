import React from 'react';
import Notes from './Notes';
import { useContext, useState } from 'react'
import noteContext from '../context/noteContext'
export default function Home() {

  const {addnote} =useContext(noteContext);

  const [title ,settitle]=useState("");
  const [desc,setdesc]=useState("");

  const handletitle=(event)=>{
    settitle(event.target.value);
  }
  const handledesc=(event)=>{
    setdesc(event.target.value);
  }
  const handleclick=()=>{
    const note={
      Title:title,
      Description:desc
    }
    addnote(note);
    settitle("enter your title here")
    setdesc("your description here")

}
  

  return (
    <div>
      <div>
        <h1 className='container my-3'>Create a new note </h1>
        <div className="mb-3 container">
          <label for="exampleFormControlInput1" className="form-label">Title</label>
          <input type="text" className="form-control" id="exampleFormControlInput1" name='Title' value={title} onChange={handletitle}  placeholder="your title here"/>
        </div>
        <div className="mb-3 container">
          <label for="exampleFormControlTextarea1" className="form-label">Description</label>
          <input type="text" className="form-control" id="exampleFormControlInput1" name='Description' value={desc} onChange={handledesc} placeholder=" enter your description"/>
          
        </div>
        <div class="col-auto container">
          <button type="submit" class="btn btn-primary mb-3" onClick={handleclick}>Add Note</button>
        </div>
      </div>
      <hr className='container'/>
     <div className='container'>
      <Notes/>
     </div>


    </div>

  )
}
