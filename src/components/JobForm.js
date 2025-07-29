import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const JobForm = ({onAdd}) => {

    const [company, setcompany] = useState("")
    const [date, setdate] = useState("")
    const [status, setstatus] = useState("applied")

    const handlesSubmit = (event)=>{
        event.preventDefault()

        if (!company.trim() || !date){
            alert("please fill all the fields.")
            return
        }

        const newJob = {
          id: uuidv4(),
          company,
          date,
          status,
        };

        onAdd(newJob);
        setcompany("");
        setdate("")
        setstatus("applied")
    }

  return (
    <>
    <form onSubmit={handlesSubmit} style={{marginBottom:"1rem"}}>
        <input type='text' placeholder='Company Name' value={company} 
        onChange={(event) => setcompany(event.target.value)}
        style={{ marginRight:"0.5rem"}}
        />

        <input type='date' onChange={(event)=> setdate(event.target.value)}
        style={{marginRight:"0.5rem"}}
        />
        
        <select value={status} onChange={(event)=> setstatus(event.target.value)}
        style={{marginRight:"0.5rem"}}>
        
        <option value="applied">Applied</option>
        <option value="interview">Interview</option>
        <option value="offer"> Offer</option>
        <option value="rejected">Rejected</option>

        </select>

        <button type='submit'>Add Job</button>

    </form>
    
    </>
  )
}

export default JobForm