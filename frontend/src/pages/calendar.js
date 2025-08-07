import React, { useState } from 'react';
import './BasicCalendar.css';

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function BasicCalendar() {
  const [date, setDate] = useState(new Date());

  const year = date.getFullYear();
  const month = date.getMonth(); // 0-based
  const firstDayIndex = new Date(year, month, 1).getDay(); // 0 (Sun) to 6 (Sat)
  const daysInMonth = new Date(year, month + 1, 0).getDate(); // total days
  console.log(date, firstDayIndex, daysInMonth);

  const prevMonth = () => setDate(new Date(year, month - 1, 1));
  const nextMonth = () => setDate(new Date(year, month + 1, 1));

  console.log(prevMonth, nextMonth);

  const days = [];

  // Add empty boxes before the 1st day
  for (let i = 0; i < firstDayIndex; i++) {
    days.push(<div key={`empty-${i}`} className="calendar-day empty" />);
  }

  // Add day boxes
  for (let d = 1; d <= daysInMonth; d++) {
    days.push(
      <div key={d} className="calendar-day">
        {d}
      </div>
    );
  }

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button onClick={prevMonth}>◀</button>
        <h2>
          {date.toLocaleString('default', { month: 'long' })} {year}
        </h2>
        <button onClick={nextMonth}>▶</button>
      </div>

      <div className="calendar-grid">
        {daysOfWeek.map((day) => (
          <div key={day} className="calendar-day header">
            {day}
          </div>
        ))}
        {days}
      </div>
    </div>
  );
}