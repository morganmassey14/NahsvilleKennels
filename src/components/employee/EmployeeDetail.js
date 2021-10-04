import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from "react-router-dom";
import { getEmployeeById } from '../../modules/EmployeeManager';
// import  './EmployeeDetail.css' 


export const EmployeeDetail = () => {
  const [employee, setEmployee] = useState({ name: "", location: "", email: "", bio: "" });

  const {employeeId} = useParams();
  const history = useHistory();

  useEffect(() => {
    //getAnimalById(id) from AnimalManager and hang on to the data; put it into state
    console.log("useEffect", employeeId)
    getEmployeeById(employeeId)
      .then(employee => {
        setEmployee({
          name: employee.name,
          location: employee.location.name,
          email: employee.email,
          bio: employee.bio
        });
      });
  }, [employeeId]);

  return (
    <section className="employee__details">
      <h3 className="employee__name">{employee.name}</h3>
      <div className="employee__location">Location {employee.location}</div>
      <div className="employee__email">Email: {employee.email}</div>
      <div className="employee__bio">{employee.bio}</div>
      {/* What's up with the question mark???? See below.*/}
      {/* <div className="animal__location">Location: {animal.location?.name}</div>
      <div className="animal__owner">Customer: {animal.customer?.name}</div> */}
    </section>
  );
}