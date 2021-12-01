import './style.css';

import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className="home-container">
      <Link to="/cepsearch">
        
        
      <section className="area-inicial">
        <label htmlFor="">
          <h2>WHERE AM I ?</h2>
          <br></br>
        </label>
        
        <button className="start-button btn btn-primary btn-lg">
          Iniciar
        </button>
      </section>
        
      </Link>
    </div>
  );
};


export default Home;
