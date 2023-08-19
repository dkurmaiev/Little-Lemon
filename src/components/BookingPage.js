import React from 'react';
import Main from './Main';
import BackgroundImage from '../images/BackgroundImage.jpg';



const BookingPage = () => {
  

  const pageStyle = {
    backgroundImage: `url(${BackgroundImage})`, 
    backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundColor:'purple',
    color: 'black',
    padding: '10px',
    minHeight: '100vh', 
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


  return (
    <div style={pageStyle}>
      <header style={headerStyle}>
        <h1>Welcome to Little Lemon's Booking Page</h1>
      </header>
      <main style={mainStyle}>
        <Main />
        <hr />
        
        
         
       
      </main>
      
    </div>
  );
};

export default BookingPage;
