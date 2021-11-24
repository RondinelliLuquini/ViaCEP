import './style.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="main-nav navbar">
      <Link to="/" className="nav-logo-text">
        <h4 className="text-primary">ViaCEP API Interface</h4>
      </Link>
    </nav>
  );
};

export default Navbar;
