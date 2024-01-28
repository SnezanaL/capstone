import React, { useReducer, useState } from "react";
import BookingForm from './BookingForm';
import BookingSlotList from './BookingSlotList';
import ConfirmedBooking from './ConfirmedBooking';
import { Route, Routes, useNavigate } from 'react-router-dom';

  // Step 2: Create a reducer function
  export const availableTimesReducer = (state, action) => {
    switch (action.type) {
      case 'UPDATE_TIMES':
        // For now, return the same available times regardless of the date
        return ['12:00 PM', '1:00 PM', '2:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'];
      default:
        return state;
    }
  };

  export const initializeTimes = () => {
    return ['12:00 PM', '1:00 PM', '2:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'];
  };

const BookingPage = () => {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: "",
    occasion: "",
  });



    // Step 2: Change availableTimes to a reducer
    const [availableTimes, dispatch] = useReducer(availableTimesReducer, initializeTimes());


    // Step 2: Create functions for handling state change
    const updateTimes = (date) => {
      dispatch({ type: 'UPDATE_TIMES', date });
      console.log( 'UPDATE_TIMES', date);
    };
  
    // const initializeTimes = () => {
    //   dispatch({ type: 'INITIALIZE_TIMES' });
    // };

  // const [availableTimes, setAvailableTimes] = useState([
  //   '12:00 PM', '1:00 PM', '2:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'
  // ]);



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(name, value)
  };

  const handleSubmit = (formData) => {
    //e.preventDefault();
    // Add logic to handle form submission (e.g., send data to server)
    console.log('Form submitted with data:', formData);
    // You can reset the form after submission if needed
    // setFormData({
    //   date: '',
    //   time: '',
    //   guests: '',
    //   occasion: '',
    // });
  };

  return (
    <>
      <section className="hero-booking ">

      </section>

      <section className="book-form container">
      <h2>Book your table now</h2>

      <BookingForm availableTimes={availableTimes} updateTimes={updateTimes} onSubmit={handleSubmit} />
      <BookingSlotList availableTimes={availableTimes} />


        {/* <form style={{display: 'grid', maxWidth: '200px', gap: '20px'}} className="row g-3" onSubmit={handleSubmit} >
          <div className="col-md-6">
            <label htmlFor="date" className="form-label">
              Date:
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>
          <div className="col-md-6">
            <label className="form-label" htmlFor="time">
              Time:
            </label>
            <input
              className="form-control"
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label className="form-label" htmlFor="guests">
              Number of guests:
            </label>
            <div className="input-group">
              <input
                className="form-control"
                type="number"
                id="guests"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-md-6">
            <label className="form-label" htmlFor="occasion">
              Occasion:
            </label>
            <select
              className="form-control"
              id="occasion"
              name="occasion"
              value={formData.occasion}
              onChange={handleChange}
              required
            >
              <option value="">Select an occasion</option>
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
            </select>
          </div>

          <div className="col-12">
            <button className="btn btn-primary" type="submit">
              Submit form
            </button>
          </div>
        </form> */}
      </section>
    </>
  );
};

export default BookingPage;
