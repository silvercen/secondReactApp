import { useLocation, useNavigate, useParams } from "react-router"

export default function CohortView()
{
    let {cid} = useParams()
    let navigate = useNavigate()
    let {state}  = useLocation()

    return (
        <>
        <div>
            <button onClick={() => navigate("/training/cohort-list")}
            className="btn btn-primary m-1">GO BACK</button>
            <div className="card m-2">
                <div className="card-header bg-warning text-light">
                    <h3>Cohort details for cohort id: {cid}</h3>
                </div>
                <div className="card-body">
                    <h6>Cohort Stack: {state.cohortStack}</h6>
                    <h6>Cohort Size: {state.cohortSize}</h6>
                    <h6>Cohort Duration: {state.cohortDurationWeeks}</h6>
                    <h6>Cohort Start Date: {state.cohortStartDate.toDateString()}</h6>
                </div>
            </div>
        </div>
        </>
    )
}