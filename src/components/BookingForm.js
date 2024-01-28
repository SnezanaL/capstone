import React, { useState } from "react";

const BookingForm = ({ availableTimes, updateTimes, onSubmit }) => {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: 0,
    occasion: "",
  });

//   const [availableTimes, setAvailableTimes] = useState([
//     "12:00 PM",
//     "1:00 PM",
//     "2:00 PM",
//     "6:00 PM",
//     "7:00 PM",
//     "8:00 PM",
//   ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(name, value);

   const selectedDate = e.target.value;
   // Pass the selected date to the updateTimes function
   updateTimes(selectedDate);
   // Update the rest of the form state as needed
   setFormData({ ...formData, date: selectedDate });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., send data to server)
    console.log("Form submitted:", formData);
    onSubmit(formData);
  
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
   <h2>Book Now</h2>
    <form onSubmit={handleSubmit} style={{ display: "grid", maxWidth: "200px", gap: "20px" }}>
      <label htmlFor="date">Choose date</label>
      <input
        type="date"
        id="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        className="form-control"
      />
      <label htmlFor="time">Choose time</label>
      <select
        id="time "
        className="form-control"
        
        name="time"
        value={formData.time}
        onChange={handleChange}
      >
        {/* <option>17:00</option>
        <option>18:00</option>
        <option>19:00</option>
        <option>20:00</option>
        <option>21:00</option>
        <option>22:00</option> */}
        <option value="">Select a time</option>
        {/* Step 3: Populate options from availableTimes state */}
        {availableTimes?.map((timeOption, index) => (
          <option key={index} value={timeOption}>
            {timeOption}
          </option>
        ))}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        className="form-control"
        name="guests"
        value={formData.guests}
        onChange={handleChange}
      />
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        className="form-control"
        name="occasion"
        value={formData.occasion}
        onChange={handleChange}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input type="submit" value="Make Your reservation" />
    </form>
    </>
  );
};

export default BookingForm;
