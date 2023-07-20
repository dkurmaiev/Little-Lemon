import React, { useReducer } from 'react';
import BookingForm from './BookingForm';
import BookingSlot from './BookingSlot';
import ConfirmedBooking from './ConfirmedBooking';
import { useNavigate } from 'react-router-dom';
import { submitAPI } from './api'; // Assuming you have the submitAPI function in api.js

const reducer = (state, action) => {
  if (action.type === 'UPDATE_TIMES') {
    // Implement the logic to update availableTimes based on the selected date
    const { selectedDate } = action.payload;
    // For now, return the same availableTimes regardless of the date
    return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  }
  return state;
};

const Main = () => {
  const [availableTimes, dispatch] = useReducer(reducer, []);

  const initializeTimes = () => {
    // Initialize availableTimes here
    return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  };

  return (
    <div>
      <h1>Booking Form</h1>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
      <h2>Available Times:</h2>
      <ul>
        {availableTimes.map((time) => (
          <BookingSlot key={time} time={time} />
        ))}
      </ul>
    </div>
  );
};

export default Main;

