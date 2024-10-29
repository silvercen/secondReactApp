import { useState } from "react"

export default function CohortList()
{
    const [allCohorts, setAllCohorts] = useState([
        {
            cohortId: 201,
            cohortSize: 26,
            cohortVenueId: 0,
            cohortStack: `Java Full Stack`,
            cohortStartDate: `2024-12-12`,
            cohortDurationWeeks: 6,
            cohortSPOC: ``,
            cohortInstructor: ``
        },
        {
            cohortId: 202,
            cohortSize: 23,
            cohortVenueId: 2,
            cohortStack: `Python Full Stack`,
            cohortStartDate: `2024-11-11`,
            cohortDurationWeeks: 6,
            cohortSPOC: ``,
            cohortInstructor: ``
        }
    ])

function handleView(cohortId)
    {
        console.log(cohortId)
    }

    function handleEdit(cohortId)
    {
        console.log(cohortId)
    }

    function handleDelete(cohortId)
    {
        let newCohorts = allCohorts.filter((eachCohort) => (eachCohort.cohortId != cohortId))
        setAllCohorts(newCohorts)
    }

    let mappedAllCohorts = allCohorts.map((eachCohort) => (
        <tr>
            <td>{eachCohort.cohortId}</td>
            <td>{eachCohort.cohortSize}</td>
            <td>{eachCohort.cohortVenueId === 0 ? (<>
            <button className="btn btn-success">MAP</button></>) : eachCohort.cohortVenueId}</td>
            <td>{eachCohort.cohortStack}</td>
            <td>{eachCohort.cohortStartDate}</td>
            <td>{eachCohort.cohortDurationWeeks}</td>
            <td>{eachCohort.cohortSPOC}</td>
            <td>{eachCohort.cohortInstructor}</td>
            <td><button onClick={() => handleView(eachCohort.cohortId)} className="btn btn-primary">VIEW</button></td>
            <td><button onClick={() => handleEdit(eachCohort.cohortId)} className="btn btn-success">EDIT</button></td>
            <td><button onClick={() => handleDelete(eachCohort.cohortId)} className="btn btn-danger">DELETE</button></td>
        </tr>
    ))
    return (
        <>
        <div className="container m-5">
            <h3>LIST OF COHORTS</h3>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>SIZE</th>
                        <th>VENUE</th>
                        <th>STACK</th>
                        <th>STARTDATE</th>
                        <th>DURATION WEEKS</th>
                        <th>SPOC</th>
                        <th>INSTRUCTOR</th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {mappedAllCohorts}
                </tbody>
            </table>
        </div>
        </>
    )
}