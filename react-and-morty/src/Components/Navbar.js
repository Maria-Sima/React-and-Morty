import React from 'react';
import {NavLink,Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="">
                <div className="container">
                    <Link to="/" className="">Rick &Morty <span className="text-primary"> Wiki</span></Link>
                    <button className="" type="button" data-bs-toggle="collapse"
                            data-bs-target="v" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="">
                        <span className=""></span>
                    </button>
                    <div className="" id="navbarNav">
                        <div className="">
                            <NavLink to="/characters" className="nav-link">
                                Characters
                            </NavLink>
                            <NavLink to="/episodes" className="nav-link">
                                Episode
                            </NavLink>
                            <NavLink
                                className="nav-link"
                                to="/locations"
                            >
                                Locations
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;