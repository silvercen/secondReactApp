import { Link } from 'react-router-dom'
export default function HeaderApp()
{
    return (
       <>
       <nav className="navbar navbar-expand-sm bg-dark">
           <div className="container-fluid">
               <ul className="navbar-nav">
                   <li className="nav-item">
                       <Link to="/" className="nav-link text-white">Counter Component</Link>
                   </li>
                   <li className="nav-item">
                        <Link to="/ecom-list" className="nav-link text-white">
                            Ecommerce Component
                        </Link>
                   </li>
                   <li className="nav-item">
                       <Link to="/product-list" className="nav-link text-white">
                           Product Component
                       </Link>
                   </li>
                   <li className="nav-item">
                       <Link to="/todo" className="nav-link text-white">
                           Todo Component
                       </Link>
                   </li>
                   <li className="nav-item">
                       <Link to="/actor-list" className="nav-link text-white">
                           Actor Component
                       </Link>
                   </li>
                   <li className="nav-item">
                        <Link to="/training" className="nav-link text-white">
                            Training
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/training-http" className="nav-link text-white">
                            Training Http
                        </Link>
                   </li>
                   <li className="nav-item">
                        <Link to="/fake-api" className="nav-link text-white">
                            Fake API
                        </Link>
                   </li>
               </ul>
           </div>
       </nav>
       </>
    )
}