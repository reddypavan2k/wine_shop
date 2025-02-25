import React, { useState, useEffect } from "react";
import "./Discount.css";

const DiscountText = () => {
  const discounts = [
    "Enjoy exclusive discounts on your favorite liquor brands—shop now and save!",
    "Raise your glass to savings! Limited-time offers on premium wines, spirits, and beers await you!",
    "Unbeatable discounts for liquor lovers! Stock up on your favorites at irresistible prices today!",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % discounts.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [discounts.length]);

  return (
    <>
      <h2>Cheers to amazing deals—visit the store now for extra discounts!</h2>
      <p>{discounts[currentIndex]}</p>
    </>
  );
};

export default DiscountText;
