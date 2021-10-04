import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from "react-router-dom"
import { getCustomerById } from '../../modules/CustomerManager'
import './CustomerDetails.css';

export const CustomerDetail = () => {
  const [customer, setCustomer] = useState({ name: "", address: "", animal: "" });

  const {customerId} = useParams();
  const history = useHistory();

  useEffect(() => {
    console.log("useEffect", customerId)
    getCustomerById(customerId)
      .then(customer => {
        setCustomer({
          name: customer.name,
          address: customer.address,
          animal: customer.animal.name
        });
      });
  }, [customerId]);

  return (
    <section className="customer__details">
      <h3 className="customer__name">{customer.name}</h3>
      <div className="customer__address">Address: {customer.address}</div>
      <div className="customer__animal">Animal: {customer.animal}</div>
    </section>
  );
}
