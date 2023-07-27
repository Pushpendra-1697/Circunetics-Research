import React from 'react';
import { Navigate } from 'react-router-dom';

const Slider = () => {


    if (localStorage.getItem('token') === null) {
        return <Navigate to="/login" />
    };
  return (
    <div>Slider</div>
  )
}

export default Slider;