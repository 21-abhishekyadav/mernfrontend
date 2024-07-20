import React from 'react'
import '../App.css';
import { useContext } from 'react'
import noteContext from '../context/noteContext'
import Modal from './Modal';

export default function Display(props) {

    const { deletenote, waitt } = useContext(noteContext);


    //getting the id 
    const handleid = () => {
        console.log(note._id)
        waitt(note._id);

    }


    const { note } = props;
    const col = ["info", "warning", "primary", "success", "danger", "secondary"]
    return (

        <div className='col-md-4 ' >
            <div className={`  my-3 p-3 bg-${col[Math.floor(Math.random() * 6)]} bg-opacity-10 border-info  rounded-end`}>
                <h5 className="card-title">{note.Title}</h5>
                <p className="  box ">{note.Description}</p>

                <div>
                    <span className="material-symbols-outlined icon" onClick={() => { deletenote(note._id) }}>delete</span>
                    <span className="material-symbols-outlined icon" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={handleid}>edit</span>
                    
                </div>

            </div>

            <Modal/>

        </div>





    )
}


