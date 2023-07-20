import React, { useState } from 'react';
import Main from './Main';

const BookingForm = ({ availableTimes, dispatch  }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setSelectedDate(newDate);
    dispatch({ type: 'UPDATE_TIMES', payload: { selectedDate: newDate } });
  };

  const handleTimeChange = (e) => {
    const newTime = e.target.value;
    setSelectedTime(newTime);
  };

  const handleGuestsChange = (e) => {
    const newGuests = parseInt(e.target.value);
    setGuests(newGuests);
  };

  const handleOccasionChange = (e) => {
    const newOccasion = e.target.value;
    setOccasion(newOccasion);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
        selectedDate,
        selectedTime,
        guests,
        occasion,
      };
    console.log('Selected Date:', selectedDate);
    console.log('Selected Time:', selectedTime);
    console.log('Number of Guests:', guests);
    console.log('Occasion:', occasion);
    setSelectedDate('');
    setSelectedTime('');
    setGuests(1);
    setOccasion('Birthday');
  };

  const formStyle = {
    display: 'grid',
    gap: '20px',
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    borderRadius: '8px',
    backgroundColor: 'white',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const labelStyle = {
    fontSize: '16px',
    fontWeight: 'bold',
  };

  const inputStyle = {
    width: '100%',
    padding: '8px',
    fontSize: '14px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  };

  const selectStyle = {
    width: '100%',
    padding: '8px',
    fontSize: '14px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  };

  const submitButtonStyle = {
    width: '100%',
    padding: '12px',
    fontSize: '16px',
    fontWeight: 'bold',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: 'purple',
    color: 'white',
    cursor: 'pointer',
  };

  return (
    <form style={formStyle} onSubmit={handleSubmit}>
      <label htmlFor="res-date" style={labelStyle}>
        Choose date
      </label>
      <input type="date" id="res-date" value={selectedDate} onChange={handleDateChange} style={inputStyle} />

      <label htmlFor="res-time" style={labelStyle}>
        Choose time
      </label>
      <select id="res-time" value={selectedTime} onChange={handleTimeChange} style={selectStyle}>
        {availableTimes.map((time) => (
          <option key={time}>{time}</option>
        ))}
      </select>

      <label htmlFor="guests" style={labelStyle}>
        Number of guests
      </label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={guests}
        onChange={handleGuestsChange}
        style={inputStyle}
      />

      <label htmlFor="occasion" style={labelStyle}>
        Occasion
      </label>
      <select id="occasion" value={occasion} onChange={handleOccasionChange} style={selectStyle}>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <input type="submit" value="Make Your Reservation" style={submitButtonStyle} />
    </form>
  );
};

export default BookingForm;
