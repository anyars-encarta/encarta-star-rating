import StarRating from './components/star-rating/index';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <StarRating noOfStars={10}/>
    </div>
  );
}

export default App;
