import './App.css';
import WorkoutTracking from './components/WorkoutTracking/WorkoutTracking';
import DistanceModel from './models/DistanceModel';

let items = [{
  date: '2019-07-18',
  distance: '3.4'
}, {
  date: '2019-07-20',
  distance: '5.7'
}, {
  date: '2019-07-19',
  distance: '14.2'
}];

export default function App() {
  items = items.map(item => new DistanceModel(item));

  return (
    <div className="App">
      <WorkoutTracking items={items}/>
    </div>
  );
}
