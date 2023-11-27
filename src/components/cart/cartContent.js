// dataFetcher.js

const fetchData = async () => {
    // Define the API endpoint
    const apiEndpoint = 'https://fakestoreapi.com/products';
  
    try {
      // Make a GET request to the API
      const response = await fetch(apiEndpoint);
  
      // Check if the request was successful (status code 200-299)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      // Parse the response as JSON
      const data = await response.json();
  
      // Assuming the response data is an array, return it
      return data;
    } catch (error) {
      // Handle errors during the fetch
      console.error('Fetch error:', error);
      throw error; // Re-throw the error to be handled by the calling code
    }
  };
  
  export default fetchData;
  