import { Link, Outlet } from 'react-router-dom'
export default function TrainingHeader()
{
    return (
       <>
       <nav className="navbar navbar-expand-sm bg-dark">
           <div className="container-fluid">
               <ul className="navbar-nav">
                   <li className="nav-item">
                       <Link to="/training/venue-list" className="nav-link text-white">Venue List</Link>
                   </li>
                   <li className="nav-item">
                        <Link to="/training/cohort-list" className="nav-link text-white">
                            Cohort List
                        </Link>
                   </li>
                   <li className="nav-item">
                        <Link to="/training/cohort-add" className="nav-link text-white">
                            Add Cohort
                        </Link>
                   </li>
                   <li className="nav-item">
                        <Link to="/training/venue-add" className="nav-link text-white">
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