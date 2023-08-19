
const submitAPI = async (formData) => {
    try {
      
      
      const response = await fetch('https://example.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      
      const data = await response.json();
  
      // Check if the reservation was successful
      if (data.success) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      return false;
    }
  };
  
  export default submitAPI;
  