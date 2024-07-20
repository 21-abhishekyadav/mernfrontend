import React from 'react'
import {  useState } from 'react'
import { useContext } from 'react'
import noteContext from '../context/noteContext'


export default function Modal() {

    const {  editnote } = useContext(noteContext);

    //getting the data
const [title, settitle] = useState("");
const [desc, setdesc] = useState("");
const handletitle = (event) => {
    settitle(event.target.value);
}
const handledesc = (event) => {
    setdesc(event.target.value);
}
const handleclick = () => {
    const newnote = {
        Title: title,
        Description: desc
    }
    editnote(newnote);
    setdesc("")
    settitle("")
}


    return (
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">Edit your note </h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="mb-3 container">
                            <label for="exampleFormControlInput1" className="form-label">Title</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" name='Title' value={title} onChange={handletitle} />
                        </div>
                        <div className="mb-3 container">
                            <label for="exampleFormControlTextarea1" className="form-label">Description</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" name='Description' value={desc} onChange={handledesc} />

                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleclick}>Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
