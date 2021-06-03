import React from 'react';
import moment from 'moment';

export default function WorkoutTrackingForm({form, onFieldChange, onAddDistance}) {
  const onChange = e => {
    const {name, type} = e.target;
    const value = type === 'checkbox' ? e.target.checked : e.target.value;
    onFieldChange(name, value);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (!form.date || !form.distance) {
      return;
    }
    if (!moment(form.date, 'YYYY-MM-DD', true).isValid()) {
      return;
    }
    onAddDistance(form);
  };

  return (
    <form className="workout-tracking-form" onSubmit={onSubmit}>
      <div className="form-field">
        <label htmlFor="date">Дата (ДД.ММ.ГГ)</label>
        <input type="date" value={form.date} id="date" name="date" min="2010-01-01" max={moment().format('YYYY-MM-DD')} onChange={onChange}/>
      </div>
      <div className="form-field">
        <label htmlFor="distance">Пройдено км</label>
        <input type="number" value={form.distance} id="distance" name="distance" onChange={onChange}/>
      </div>
      <button>ок</button>
    </form>
  )
}
