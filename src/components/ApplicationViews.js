import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { LocationCard } from "./location/Location"
import { CustomerList } from "./customer/Customer"
import { EmployeeList } from "./employee/Employee"
import { AnimalList } from "./animal/AnimalList"

export const ApplicationViews = ({ isAdmin }) => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home isAdmin={isAdmin} />

            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <Route path="/animals">
                <AnimalList />
            </Route>

            <Route path="/locations">
                <LocationCard />
            </Route>

            <Route path="/customers">
                <CustomerList />
            </Route>

            <Route path="/employees">
                <EmployeeList />
            </Route>

        </>


    )
}
