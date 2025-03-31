import React from 'react';
import './Store.css'; // Optional CSS file for styling

const Stores = () => {
  const stores = [
    {
      name: "Myrtle Beach Liquor Store",
      address: "2204 North Kings Hwy., Myrtle Beach, SC 29577",
      phone: "(843) 916-9542",
    },
    {
      name: "Surf Beverage",
      address: "Murrells Inlet, SC",
      phone: "(843) 123-4567",
    },
    {
      name: "Pawleys Wine and Spirits",
      address: "Pawleys Island, SC",
      phone: "(843) 987-6543",
    },
  ];

  return (
    <div className="stores-container">
      <h2>About Beach Discount Beverages</h2>
      <p className="about-info">
        Beach Discount Beverages is locally owned by BB Beverage, Inc. and has two sister stores: 
        <strong> Surf Beverage</strong> in Murrells Inlet and 
        <strong> Pawleys Wine and Spirits</strong> in Pawleys Island, South Carolina.
        Volume buying for three stores allows us to offer our customers low prices every day on all of their favorite beer, wine, and liquor.
      </p>
      <div className="stores-list">
        {stores.map((store, index) => (
          <div className="store-card" key={index}>
            <h3>{store.name}</h3>
            <p>{store.address}</p>
            <p>{store.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stores;
