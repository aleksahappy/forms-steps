import React from 'react';
import PropTypes from 'prop-types';

export default function WorkoutTrackingPanelHeader({titles}) {
  return (
    <div className="workout-tracking-panel-header">
      {titles.map((title, i) => <div key={i}>{title}</div>)}
    </div>
  )
}

WorkoutTrackingPanelHeader.propTypes = {
  titles: PropTypes.arrayOf(PropTypes.string)
};
