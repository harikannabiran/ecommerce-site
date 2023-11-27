// App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import { setUser } from './reducers/userActions';
import LandingPage from './pages/landingPage/LandingPage';
import LoginPage from './pages/loginPage/LoginPage';

function App({ setUser }) {
  useEffect(() => {
    // Check if the user is already logged in (you may need to implement this logic)
    const user = /* Check if the user is logged in */null;
    if (user) {
      setUser(user);
    }
  }, [setUser]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

const mapDispatchToPropsApp = {
  setUser,
};

export default connect(null, mapDispatchToPropsApp)(App);
