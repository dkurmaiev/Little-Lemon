import React from 'react';

const BookingSlot = ({ time, isBooked }) => {
  return (
    <li>
      {time} - {isBooked ? 'Booked' : 'Available'}
    </li>
  );
};

export default BookingSlot;
