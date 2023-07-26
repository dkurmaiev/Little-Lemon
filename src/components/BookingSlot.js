import React from 'react';

const BookingSlot = ({ time }) => {
  const slotStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    borderBottom: '1px solid #ccc',
  };

  const buttonStyle = {
    padding: '8px 12px',
    fontSize: '14px',
    fontWeight: 'bold',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: 'purple',
    color: 'white',
    cursor: 'pointer',
  };

  const handleBookSlot = () => {
    alert(`You booked a table for ${time}`);
  };

  return (
    <li style={slotStyle}>
      <span>{time}</span>
      <button onClick={handleBookSlot} style={buttonStyle}>
        Book
      </button>
    </li>
  );
};

export default BookingSlot;
