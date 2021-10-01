import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { LocationList } from "./location/Location"
import { CustomerList } from "./customer/Customer"
import { EmployeeList } from "./employee/Employee"
import { AnimalList } from "./animal/AnimalList"
import { AnimalDetail } from "./animal/AnimalDetail"
import { CustomerDetail } from "./customer/CustomerDetails"
import { EmployeeDetail } from "./employee/EmployeeDetail"
import { LocationDetail } from "./location/LocationDetail"

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

            <Route path="/animals/:animalId(\d+)">
                <AnimalDetail />
            </Route>

            <Route exact path="/locations">
                <LocationList />
            </Route>

            <Route path="/locations/:locationId(\d+)">
                <LocationDetail />
            </Route>

            <Route exact path="/customers">
                <CustomerList />
            </Route>

            <Route path="/customers/:customerId(\d+)">
                <CustomerDetail />
            </Route>

            <Route exact path="/employees">
                <EmployeeList />
            </Route>

            <Route path="/employees/:employeeId(\d+)">
                <EmployeeDetail />
            </Route>

        </>


    )
}
