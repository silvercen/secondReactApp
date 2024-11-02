import { useState } from "react"

export default function CohortAddHttp()
{
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
            cohort
        }
    )

    return (
        <>

        </>
    )
}