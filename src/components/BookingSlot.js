import React from 'react';

const BookingSlot = ({ time }) => {
  const handleBooking = () => {
    // Customize the booking logic based on your requirements
    //alert(`Booking confirmed for ${time}`);
   
  };
  return (
    <li>
      {/* Customize the display of each booking slot */}
      <p>{time}</p>
      {/* Add additional information as needed */}
      <button onClick={() => handleBooking(time)}>Book Now</button>
    </li>
  );
};

export default BookingSlot;