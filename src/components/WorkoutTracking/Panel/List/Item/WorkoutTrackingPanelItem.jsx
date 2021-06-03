import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import DistanceModel from '../../../../../models/DistanceModel';

export default function WorkoutTrackingPanelItem({item, onChangeDistance}) {
  const onDeleteDistance = () => {
    onChangeDistance('delete', item);
  };

  const onEditDistance = () => {
    onChangeDistance('edit', item);
  };

  return (
    <div className="workout-tracking-panel-item">
      <div>{moment(item.date).format('DD.MM.YYYY')}</div>
      <div>{item.distance}</div>
      <div>
        <button className="edit" onClick={onEditDistance} >✎</button>
        <button className="button-delete" onClick={onDeleteDistance} >✘</button>
      </div>
    </div>
    )
}

WorkoutTrackingPanelItem.propTypes = {
  item: PropTypes.instanceOf(DistanceModel),
  onChangeDistance: PropTypes.func
};
