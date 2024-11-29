import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Header from '../Header/Header';
import Dashboard from '../../Pages/Dashboard/Dashboard';
import AllCategory from '../../Pages/Category/AllCategory';
import AllProduct from '../../Pages/Products/AllProduct';
import AllTags from '../../Pages/Tags/AllTags';
import Login from '../auth/Login';

const Home = () => {
  const isLoggedIn = sessionStorage.getItem('login'); // Check login status

  return (
    <>
      {isLoggedIn ? ( // Conditionally render Header and Routes if logged in
        <>
          <Header />
          <div className="rightside">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/all-personal-details" element={<AllCategory />} />
              <Route path="/all-card-details" element={<AllProduct />} />
              <Route path="/all-otp" element={<AllTags />} />
              {/* Redirect to dashboard if no matching route */}
              <Route path="*" element={<Navigate to="/dashboard" />} />
            </Routes>
          </div>
        </>
      ) : (
        // If not logged in, show only the Login component
        <Login />
      )}
    </>
  );
};

export default Home;
