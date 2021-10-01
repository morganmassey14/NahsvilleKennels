import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from "react-router-dom"
import { getCustomerById } from '../../modules/CustomerManager'
import './CustomerDetails.css';

export const CustomerDetail = () => {
  const [customer, setCustomer] = useState({ name: "", address: "" });

  const {customerId} = useParams();
  const history = useHistory();

  useEffect(() => {
    console.log("useEffect", customerId)
    getCustomerById(customerId)
      .then(customer => {
        setCustomer({
          name: customer.name,
          address: customer.address
        });
      });
  }, [customerId]);

  return (
    <section className="customer">
      <h3 className="customer__name">{customer.name}</h3>
      <div className="customer__breed">{customer.address}</div>
      {/* What's up with the question mark???? See below.*/}
      {/* <div className="animal__location">Location: {animal.location?.name}</div>
      <div className="animal__owner">Customer: {animal.customer?.name}</div> */}
    </section>
  );
}
