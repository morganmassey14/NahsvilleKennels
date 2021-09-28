import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalCard } from "./animal/AnimalCard"
import { LocationCard } from "./location/Location"
import { CustomerCard } from "./customer/Customer"
import { EmployeeCard } from "./employee/Employee"
import { AnimalList } from "./animal/AnimalList"

export const ApplicationViews = ({ isAdmin }) => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home isAdmin={isAdmin} />

            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <Route exact path="/animals">
                <AnimalList />
            </Route>

            <Route path="/locations">
                <LocationCard />
            </Route>

            <Route path="/customers">
                <CustomerCard />
            </Route>

            <Route path="/employees">
                <EmployeeCard />
            </Route>

        </>


    )
}
