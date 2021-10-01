import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"
import logo from "../../images/logo.png";

export const NavBar = () => {
    return (
        <>
            <div className="nav__flex">
                <div className="logo_image"><img className="logo" src={logo} alt="Nashville Kennels" /></div>
                <div className="nav__flex__bar">
                    {/* <div className="nav__links"> */}
                        <ul className="navbar">
                        <li className="navbar__item active">
                            <Link className="navbar__link" to="/">NSS Kennels</Link>
                        </li>
                        <li className="navbar__item">
                            <Link className="navbar__link" to="/locations">Locations</Link>
                        </li>
                        <li className="navbar__item">
                            <Link className="navbar__link" to="/animals">Animals</Link>
                        </li>
                        <li className="navbar__item">
                            <Link className="navbar__link" to="/customers">Customers</Link>
                        </li>
                        <li className="navbar__item">
                            <Link className="navbar__link" to="/employees">Employees</Link>
                        </li>
                    </ul></div>
                {/* </div> */}
            </div>
        </>
    )
}


