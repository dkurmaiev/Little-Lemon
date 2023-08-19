import React, { useReducer } from 'react';
import BookingForm from './BookingForm';
import BookingSlot from './BookingSlot';


const reducer = (state, action) => {
  if (action.type === 'UPDATE_TIMES') {
    
   
    // return the same availableTimes regardless of the date
    return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  }
  return state;
};

const Main = () => {
  const [availableTimes, dispatch] = useReducer(reducer, []);
  

  const initializeTimes = () => {
    // Initialize availableTimes 
    return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  };
  const handleSubmit = (formData) => {
    
    // return true to simulate a successful reservation
    return true;
  };
    
  

  return (
    <div>
      <h1>Booking Form</h1>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} updateTimes={initializeTimes}
        handleSubmit={handleSubmit} />
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