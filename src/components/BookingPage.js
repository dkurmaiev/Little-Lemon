import React from 'react';
import Main from './Main';


const BookingPage = () => {
  // Additional logic or state management specific to the BookingPage can be added here

  const pageStyle = {
    backgroundColor: 'purple',
    color: 'black',
    padding: '10px',
    minHeight: '100vh', // Ensure the component fills the screen vertically
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const headerStyle = {
    padding: '100px',
    textAlign: 'center',
    fontSize: '28px',
    fontWeight: 'bold',
  };

  const mainStyle = {
    width: '100%',
    
    maxWidth: '800px',
    padding: '10px',
  };

  const footerStyle = {
    padding: '10px',
    textAlign: 'center',
    fontSize: '14px',
  };

  return (
    <div style={pageStyle}>
      <header style={headerStyle}>
        <h1>Welcome to Little Lemon's Booking Page</h1>
      </header>
      <main style={mainStyle}>
        <Main />
        <hr />
        
        
         
        {/* Add other components or elements specific to the BookingPage here */}
      </main>
      
    </div>
  );
};

export default BookingPage;
