import { useState } from "react"
import { useNavigate } from "react-router"

export default function CohortAddHttp()
{
    let navigate = useNavigate()
    const [cohort, setCohort] = useState(
        {
            cohortId: 0,
            cohortSize: 0,
            cohortVenueId: 0,
            cohortStack: ``,
            cohortStartDate: ``,
            cohortDurationWeeks: 0,
            cohortSPOC: ``,
            cohortInstructor: ``
        }
    )

    const [cohortErrorData, setCohortErrorData] = useState(
        {
            cohortStack: true,
            cohortSize: true,
            cohortStartDate: true,
            cohortDuraton: true
        }
    )

    function handleFormChange(event)
    {
        setCohortErrorData({ ...cohortErrorData, [event.target.name]: event.target.validity.valid })
        setCohort({...cohort, [event.target.name]: event.target.value})
    }

    function handleFormSubmit(event)
    {
        event.preventDefault()
        navigate("/training-http/cohort-list-http")
    }

    return (
        <>
            <div className="container m-5">
                <div className="card">
                    <form onSubmit={(e) => handleFormSubmit(e)}>
                        <div className="card-header bg-success text-light">
                            <h3>ADD A NEW COHORT</h3>
                        </div>
                        <div className="card-body">
                            <div className="form-control-group m-1">
                                <label htmlFor="cStack" className="form-label">
                                    Cohort Stack:
                                </label>
                                <input
                                    type="text"
                                    id="cStack"
                                    placeholder="Enter Cohort Stack"
                                    className="form-control"
                                    required
                                    name="cohortStack"
                                    onChange={(e) => handleFormChange(e)}
                                />
                                <div className="text-danger small">
                                    {cohortErrorData.cohortStack ? "" : "Cohort Stack is Required!!"}
                                </div>
                            </div>
                            <div className="form-control-group m-1">
                                <label htmlFor="cSize" className="form-label">
                                    Cohort Size:
                                </label>
                                <input
                                    type="text"
                                    id="cSize"
                                    placeholder="Enter Cohort Size"
                                    className="form-control"
                                    required
                                    name="cohortSize"
                                    onChange={(e) => handleFormChange(e)}
                                />
                                <div className="text-danger small">
                                    {cohortErrorData.cohortStack ? "" : "Cohort Size is Required!!"}
                                </div>
                            </div>
                            <div className="form-control-group m-1">
                                <label htmlFor="cStartDate" className="form-label">
                                    Cohort Start Date:
                                </label>
                                <input
                                    type="date"
                                    id="cStartDate"
                                    placeholder="Enter Cohort Start Date"
                                    className="form-control"
                                    required
                                    name="cohortStartDate"
                                    onChange={(e) => handleFormChange(e)}
                                />
                                <div className="text-danger small">
                                    {cohortErrorData.cohortStartDate ? "" : "Cohort Start Date is Required"}
                                </div>
                            </div>
                            <div className="form-control-group m-1">
                                <label htmlFor="cDuration" className="form-label">
                                    Cohort Duration:
                                </label>
                                <input
                                    type="text"
                                    id="cDuration"
                                    placeholder="Enter Cohort Duration"
                                    className="form-control"
                                    required
                                    name="cohortDurationWeeks"
                                    onChange={(e) => handleFormChange(e)}
                                />
                                <div className="text-danger small">
                                    {cohortErrorData.cohortDuraton ? "" : "Cohort Duration is Required"}
                                </div>
                            </div>
                        </div>
                        <div className="card-footer bg-success text-light">
                            <button type="submit" className="btn btn-light text-success">
                                ADD
                            </button>
                            <button type="reset" className="btn btn-light text-success mx-5">
                                CLEAR
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}