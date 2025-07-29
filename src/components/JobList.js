import React from "react";

const JobList = ({ jobs, onDelete }) => {

    if (jobs.length === 0) {
        return <p>No job applications yet.</p>;
    }

    return (
        <>
        <table className="job-table">
            <thead>
            <tr>
                <th>Company</th>
                <th>Date Applied</th>
                <th>Status</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {jobs.map((job) => (
                <tr key={job.id}>
                <td>{job.company}</td>
                <td>{job.date}</td>
                <td>
                    <span className={`status-badge status-${job.status.toLowerCase()}`}>
                    {job.status}
                    </span>
                </td>
                <td className="actions">
                    <button onClick={() => onDelete(job.id)}>Delete</button>
                </td>
                </tr>
            ))}
            </tbody>
        </table>
        </>
    );
    };

export default JobList;
