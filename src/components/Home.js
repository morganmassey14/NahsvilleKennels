import React from "react";
import { QuoteList } from "./quote/Quote";
import banner from "../images/banner.png"
import "./Home.css"

export const Home = () => (
    <>
    <div className="home__flex">
        <img className="banner" src={banner} alt="Banner Promo" />
    <div className="home__flex__box">
        <h1>Nashville Kennels</h1>
        <h3>Boarding and Grooming</h3>
        <small>Loving care when you're not there.</small>

        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>
        <QuoteList />
        </div>
        </div>
    </>
)



        {/* {isAdmin ?
        <p>you are an admin</p>
        : 
        <p>you are not an admin</p>
        } */}

        {/* <PropsAndState yourName={"Moon Unit"} /> */}