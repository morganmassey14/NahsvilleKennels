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
import { AnimalForm } from './animal/AnimalForm'
import { LocationForm } from './location/LocationForm'
import { Login } from './auth/Login'
import { Register } from './auth/Register'
import { useState } from "react"
import { Redirect } from "react-router"
import { AnimalEditForm } from "./animal/AnimalEditForm"

export const ApplicationViews = ({ isAdmin, myUser, setAuthUser, isAuthenticated }) => {
    return (
        <>
            <Route exact path="/">
                <Home isAdmin={isAdmin} myUser={myUser} />
            </Route>

            <Route exact path="/animals">
                {isAuthenticated ? <AnimalList /> : <Redirect to="/login" />}
            </Route>

            <Route path="/animals/create">
                <AnimalForm />
            </Route>

            <Route exact path="/animals/:animalId(\d+)">
                <AnimalDetail />
            </Route>

            <Route exact path="/locations">
                <LocationList />
            </Route>

            <Route path="/locations/create">
                <LocationForm />
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

            <Route path="/login">
                <Login setAuthUser={setAuthUser} />
            </Route>

            <Route path="/register">
                <Register setAuthUser={setAuthUser} />
            </Route>

            <Route path="/animals/:animalId(\d+)/edit">
                {isAuthenticated ? <AnimalEditForm /> : <Redirect to="/login" />}
            </Route>
             

        </>


    )
}
