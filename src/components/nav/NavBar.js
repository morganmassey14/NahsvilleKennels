import React from "react"
import { Link, useHistory } from "react-router-dom"
import "./NavBar.css"
import logo from "../../images/logo.png";

export const NavBar = ({ clearUser, isAuthenticated }) => {
    const history = useHistory()

    const handleLogout = () => {
        clearUser();
        history.push('/');
    }


    return (
        <>
            <div className="nav__flex">
                <div className="logo_image"><img className="logo" src={logo} alt="Nashville Kennels" /></div>
                <div className="nav__flex__bar">
                    <ul className="navbar">
                        <li className="navbar__item active">
                            <Link className="navbar__link" to="/">Home</Link>
                        </li>
                        <li className="navbar__item">
                            <Link className="navbar__link" to="/locations">Locations</Link>
                        </li>
                        {isAuthenticated && <li className="navbar__item">
                            <Link className="navbar__link" to="/animals">Animals</Link>
                        </li>}
                        {isAuthenticated && <li className="navbar__item">
                            <Link className="navbar__link" to="/customers">Customers</Link>
                        </li>}
                        {isAuthenticated && <li className="navbar__item">
                            <Link className="navbar__link" to="/employees">Employees</Link>
                        </li>}
                        {isAuthenticated
                            ? <li className="navbar__item">
                                <span className="navbar__link" onClick={handleLogout}> Logout </span>
                            </li>
                            : <li className="navbar__item">
                                <Link className="navbar__link" to="/login">Login</Link>
                            </li>}
                    </ul>
                </div>
            </div>
        </>
    );
};


