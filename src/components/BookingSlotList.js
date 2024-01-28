import React from 'react';
import BookingSlot from './BookingSlot';

const BookingSlotList = ({ availableTimes }) => {
  return (
    <div>
      <h2>Available Booking Slots</h2>
      <ul>
        {/* Render BookingSlot components based on availableTimes */}
        {availableTimes.map((time, index) => (
          <BookingSlot key={index} time={time} />
        ))}
      </ul>
    </div>
  );
};

export default BookingSlotList;