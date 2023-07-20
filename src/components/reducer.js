// Helper function to initialize available times
export const initializeTimes = async (fetchData) => {
    // Create a Date object to represent today's date
    const today = new Date();
    const todayDateString = today.toISOString().split('T')[0];
  
    try {
      // Fetch available times for today's date using the fetchData API function
      const availableTimes = await fetchData(todayDateString);
      return availableTimes;
    } catch (error) {
      console.error('Error fetching available times:', error);
      return [];
    }
  };
  export const updateTimes = async (state, selectedDate, fetchData) => {
    try {
      // Fetch available times for the selected date using the fetchData API function
      const availableTimes = await fetchData(selectedDate);
      return availableTimes;
    } catch (error) {
      console.error('Error fetching available times:', error);
      return state;
    }
  };
    
  
  // Reducer function
  const reducer = (state, action) => {
    switch (action.type) {
      case 'INITIALIZE_TIMES':
        return action.payload;
      case 'UPDATE_TIMES':
        return action.payload;
      // Other cases and logic...
      default:
        return state;
    }
  };
  
  export default reducer;
  