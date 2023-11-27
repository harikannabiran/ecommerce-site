// services/authService.js

const authService = {
    login: async (credentials) => {
      // Simulate a login request
      // You can add actual API calls here in a real scenario
      return new Promise((resolve, reject) => {
        // Simulating a successful login for demonstration purposes
        if (credentials.username === 'demo' && credentials.password === 'password') {
          resolve({ username: 'demo' });
        } else {
          reject(new Error('Invalid credentials'));
        }
      });
    },
  
    logout: async () => {
      // Simulate a logout request
      // You can add actual API calls here in a real scenario
      return new Promise((resolve) => {
        // Simulating a successful logout for demonstration purposes
        resolve();
      });
    },
  };
  
  export default authService;
  