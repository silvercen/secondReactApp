import { Link, Outlet } from 'react-router-dom'
export default function TrainingHeaderHttp()
{
    return (
       <>
       <nav className="navbar navbar-expand-sm bg-dark">
           <div className="container-fluid">
               <ul className="navbar-nav">
                   <li className="nav-item">
                       <Link to="/training-http/venue-list-http" className="nav-link text-white">Venue List</Link>
                   </li>
                   <li className="nav-item">
                        <Link to="/training-http/cohort-list-http" className="nav-link text-white">
                            Cohort List
                        </Link>
                   </li>
                   <li className="nav-item">
                        <Link to="/training-http/cohort-add-http" className="nav-link text-white">
                            Add Cohort
                        </Link>
                   </li>
                   <li className="nav-item">
                        <Link to="/training-http/venue-add-http" className="nav-link text-white">
                            Add Venue 
                        </Link>
                   </li>
                </ul>
           </div>
       </nav>
       <Outlet></Outlet>
       </>
    )
}