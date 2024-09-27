import React, { useState } from 'react';

function BookingForm({ availableTimes, setDate, setTime, setGuests, setOccasion, submitForm }) {

  const [date, setDateState] = useState('');
  const [time, setTimeState] = useState('');
  const [guests, setGuestsState] = useState(1);
  const [occasion, setOccasionState] = useState('');

      const handleSubmit = (e) => {
      e.preventDefault();

      const formData = {
        date,
        time,
        guests,
        occasion
      };
      submitForm(formData);
    };

    return (
      <>
      <h2>Book Now</h2>
      <form onSubmit={handleSubmit} style={{ display: "grid", maxWidth: "200px", gap: "20px" }}>
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
            setDateState(e.target.value);
          }}
        />

        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={time}
          onChange={(e) => {
            setTime(e.target.value);
            setTimeState(e.target.value);
          }}
        >
          {availableTimes?.map((time, index) => (
            <option key={index} value={time}>{time}</option>
          ))}
        </select>

        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          id="guests"
          value={guests}
          onChange={(e) => {
            setGuests(e.target.value);
            setGuestsState(e.target.value);
          }}
          min="1"
          max="10"
          placeholder="1"
        />

        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => {
            setOccasion(e.target.value);
            setOccasionState(e.target.value);
          }}
        >
          <option value="">Select an occasion</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>

        <input type="submit" value="Make your reservation" />
      </form>
      </>
    );
  }

  export default BookingForm;
