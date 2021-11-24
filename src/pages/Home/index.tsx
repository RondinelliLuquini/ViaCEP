import './style.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <Link to="/cepsearch">
        <button className="start-button btn btn-primary btn-lg">
          Start Search
        </button>
      </Link>
    </div>
  );
};

export default Home;
