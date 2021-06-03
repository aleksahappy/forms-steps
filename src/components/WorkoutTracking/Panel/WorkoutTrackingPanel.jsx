import React from 'react';
import PropTypes from 'prop-types';
import DistanceModel from '../../../models/DistanceModel';
import WorkoutTrackingPanelHeader from './Header/WorkoutTrackingPanelHeader';
import WorkoutTrackingPanelList from './List/WorkoutTrackingPanelList';

export default function WorkoutTrackingPanel({items, onChangeDistance}) {
  const titles = ['Дата (ДД.ММ.ГГ)', 'Пройдено км' , 'Действия'];

  return (
    <div className="workout-tracking-panel">
      <WorkoutTrackingPanelHeader titles={titles} />
      <WorkoutTrackingPanelList items={items} onChangeDistance={onChangeDistance} />
    </div>
  )
}

WorkoutTrackingPanel.propTypes = {
  items: PropTypes.arrayOf(PropTypes.instanceOf(DistanceModel))
};
