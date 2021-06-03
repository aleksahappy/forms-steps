import React from 'react';
import PropTypes from 'prop-types';
import WorkoutTrackingPanelItem from './Item/WorkoutTrackingPanelItem';
import DistanceModel from '../../../../models/DistanceModel';

export default function WorkoutTrackingPanelList({items, onChangeDistance}) {
  items.sort((a, b) => b.date_obj - a.date_obj);

  return (
    <div className="workout-tracking-panel-list">
      {items.map(item => <WorkoutTrackingPanelItem key={item.id} item={item} onChangeDistance={onChangeDistance} />)}
    </div>
  )
}

WorkoutTrackingPanelList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.instanceOf(DistanceModel))
};
