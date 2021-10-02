import React from "react";
import { QuoteList } from "./quote/Quote";
import banner from "../images/banner.png"
import "./Home.css"
import boarding from "../images/boardingicon.png"
import grooming from "../images/groomingicon.png"
import daycare from "../images/daycareicon.png"
import training from "../images/trainingicon.png"
import dropin from "../images/dropinicon.png"

export const Home = () => (
    <>
        <div className="parent__home">
            <img className="banner__child" src={banner} alt="Banner Promo" />
            <div className="info__child">
                <h1>The very best boarding Nashville has to offer</h1>
                <div className="service__row">
                    <img className="boarding__icon" src={boarding} alt="Boarding Icon" />
                    <p><h4>Boarding</h4> Dogs stay overnight at our state of the art boarding facility. The dogs will be taken on daily walks, allowed group play, and one on one with our loving trainers.</p>
                    <img className="grooming__icon" src={grooming} alt="Grooming Icon" />
                    <p><h4>Grooming</h4>Bring your dog in for a visit to our premier grooming salon. Featuring free nail trims, and self serve dog wash stations.</p>
                    <img className="daycare__icon" src={daycare} alt="Daycare Icon" />
                    <p><h4>Doggy Day Care</h4>Your dog spends the day at our facility. Drop them off in the morning, and pick them up in the evening after a day of fun.</p>
                    <img className="training__icon" src={training} alt="Training Icon" />
                    <p><h4>Training</h4>AKC-licensed dog trainig. We offer group classes and one on ones. Our trainers strive for obedience, socialization, and building community.</p>
                    <img className="dropin__icon" src={dropin} alt="Drop-In Icon" />
                    <p> <h4>Drop-In</h4>We come to you! Schedule one of our sitters to come to your home and give your dog potty breaks and midday walks.</p>
                </div>
            </div>
        </div>
    </>
)


{/* <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>
        <QuoteList /> */}
{/* {isAdmin ?
        <p>you are an admin</p>
        : 
        <p>you are not an admin</p>
        } */}

{/* <PropsAndState yourName={"Moon Unit"} /> */ }