import { useState } from "react"
import { useNavigate } from "react-router"

export default function CohortList()
{
    const navigate = useNavigate()
    const [allCohorts, setAllCohorts] = useState([])

    const [filteredAllCohorts, setFilteredAllCohorts] = useState([...allCohorts])
    const [allVenues, setAllVenues] = useState([])

    function handleView(cohortId)
    {
        console.log(cohortId)
        let getCohort = allCohorts.find((eachCohort) => eachCohort.cohortId === cohortId)
        console.log(getCohort)
        navigate("/training/cohort-view/"+ cohortId, {state: getCohort})
    }

    function handleEdit(cohortId)
    {
        console.log(cohortId)
    }

    function handleDelete(cohortId)
    {
        let newCohorts = allCohorts.filter((eachCohort) => (eachCohort.cohortId != cohortId))
        setAllCohorts(newCohorts)
        setFilteredAllCohorts(newCohorts)
    }

    let mappedAllCohorts = filteredAllCohorts.map((eachCohort) => (
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

    function handleSearch(event)
    {
        let filterAllCohorts = allCohorts.filter((eachCohort) => eachCohort.cohortStack.toLowerCase().includes(event.target.value.toLowerCase()))
        setFilteredAllCohorts([...filterAllCohorts])
    }

    return (
        <>
        <div className="container m-5">
            <h3>LIST OF COHORTS</h3>
            <div className="formC-control-group">
                <label htmlFor="sStack" className="form-label m-1">
                    Search Stack:
                </label>
                <input
                    type="text"
                    id="sStack"
                    placeholder="Enter search string"
                    onChange={(e) => handleSearch(e)}
                />
            </div>
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