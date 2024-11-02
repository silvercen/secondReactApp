import { useState } from "react"

export default function VenueListHttp()
{
    const [allVenues, setAllVenues] = useState([])

    function handleView(venueId)
    {
        console.log(venueId)
    }

    function handleEdit(venueId)
    {
        console.log(venueId)
    }

    function handleDelete(venueId)
    {
        let newVenues = allVenues.filter((eachVenue) => (eachVenue.venueId != venueId))
        setAllVenues(newVenues)
    }

    let mappedAllVenues = allVenues.map((eachVenue) => (
        <tr>
            <td>{eachVenue.venueId}</td>
            <td>{eachVenue.venueName}</td>
            <td>{eachVenue.venueSeater}</td>
            <td>{eachVenue.isVenueAC ? "Yes" : "No"}</td>
            <td>{eachVenue.venueCity}</td>
            <td>{eachVenue.venueState}</td>
            <td><button onClick={() => handleView(eachVenue.venueId)} className="btn btn-primary">VIEW</button></td>
            <td><button onClick={() => handleEdit(eachVenue.venueId)} className="btn btn-success">EDIT</button></td>
            <td><button onClick={() => handleDelete(eachVenue.venueId)} className="btn btn-danger">DELETE</button></td>
        </tr>
    ))
    return (
        <>
        <div className="container m-5">
            <h3>LIST OF VENUES</h3>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>CAPACITY</th>
                        <th>AC</th>
                        <th>CITY</th>
                        <th>STATE</th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {mappedAllVenues}
                </tbody>
            </table>
        </div>
        </>
    )
}