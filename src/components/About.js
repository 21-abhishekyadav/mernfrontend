import React from 'react'
import { useContext } from 'react'
import noteContext from '../context/noteContext'

export default function About() {
  const a =useContext(noteContext);

  return (
    <div>
      this is about page
      this is about the author of page 
      he is {a[0].Title} and his occupation is {a.occ}
      

    </div>
  )
}
