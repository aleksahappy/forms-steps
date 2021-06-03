import {React, useState} from 'react';
import PropTypes from 'prop-types';
import DistanceModel from '../../models/DistanceModel';
import WorkoutTrackingForm from './Form/WorkoutTrackingForm';
import WorkoutTrackingPanel from './Panel/WorkoutTrackingPanel';

const initialForm = {
  date: '',
  distance: ''
};

export default function WorkoutTracking({items}) {
  const [form, setForm] = useState(initialForm);
  const [distances, setDistance] = useState(items);

  const onFieldChange = (name, value) => {
    setForm(prevForm => ({...prevForm, [name]: value}));
  }

  const onAddDistance = form => {
    const curEl = distances.find(el => el.date === form.date);
    if (curEl) {
      setDistance(prev => prev.map(el => {
          if (el === curEl) {
            el.distance = el.distance + parseFloat(form.distance);
          }
          return el;
        })
      );
    } else {
      setDistance(prev => [...prev, new DistanceModel({
        date: form.date,
        distance: form.distance,
      })]);
    }
    setForm(initialForm);
  };

  const onChangeDistance = (type, item) => {
    if (type === 'edit') {
      for (let key in item) {
        onFieldChange(key, item[key]);
      }
    }
    setDistance(prev => prev.filter(el => el.id !== item.id));
  };

  console.log(form);
  return (
    <div className="workout-tracking">
      <WorkoutTrackingForm form={form} onFieldChange={onFieldChange} onAddDistance={onAddDistance}  />
      <WorkoutTrackingPanel items={distances} onChangeDistance={onChangeDistance} />
    </div>
  )
}

WorkoutTracking.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object)
}
