// Mock API function to simulate form submission
export const submitAPI = (formData) => {
    // Simulate an asynchronous API call
    return new Promise((resolve) => {
      // Simulate a delay before resolving the promise (e.g., 1 second)
      setTimeout(() => {
        // In a real API call, you would send the form data to the server and handle the response
        // For this example, we'll consider the form submission successful if the name field is not empty
        const isBookingSuccessful = formData.name.trim() !== '';
        resolve(isBookingSuccessful);
      }, 1000);
    });
  };
  
  