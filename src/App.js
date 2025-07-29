import React, { useEffect, useState } from 'react'
import JobForm from './components/JobForm'
import JobList from './components/JobList'
import { v4 as uuidv4 } from 'uuid'
import './App.css'

const App = () => {

  const [jobs, setjobs] = useState(() =>{
    const saved =localStorage.getItem("jobs")
    return saved ? JSON.parse(saved): []
  })
  useEffect(() => {
    localStorage.setItem("jobs",JSON.stringify(jobs))
  }, [jobs])
  
  const handleAddJob = (job) =>{
    const newjob = {...job, id: uuidv4()}
    setjobs((prevjobs) => [newjob, ...prevjobs])
  }

  const handleDeleteJob = (id) =>{
    setjobs((prevjobs) =>prevjobs.filter((job) => job.id !== id))
  }

  return (
    <>
    <div style={{ padding: "2rem"}}>
    <h1>JobHive</h1>
    <JobForm onAdd={handleAddJob}/>
    <JobList jobs={jobs} onDelete={handleDeleteJob}/>
    </div>
    </>
  )
}

export default App