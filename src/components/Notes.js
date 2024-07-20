import React from 'react'
import Display from './Display';
import { useContext, useEffect } from 'react'
import noteContext from '../context/noteContext'
import {useNavigate} from "react-router-dom";

export default function Notes() {
    const navigate = useNavigate();
    const {notes,getnotes} =useContext(noteContext);
    useEffect(()=>{
        if(localStorage.getItem('token')){
        getnotes()
        }
        else{
            navigate("/signup");
        }
    },[])
  return (
    
      

       <div className='row '>
        
        <h1> Your Notes here </h1>
        {notes.map((note)=> {return < Display note = {note}/>})}

      </div>

  )
}
