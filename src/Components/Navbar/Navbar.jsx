import { Link } from 'react-router-dom';
import logo from '../../img/logo.jpg';

// Navbar & Hero Start
const Navbar = () => {
  return (
    <div className="container-fluid nav-bar p-0 fixed-top">
      <nav className="navbar navbar-expand-lg navbar-light bg-white px-4 px-lg-5 py-3 py-lg-0">
        <Link to="/" className="navbar-brand p-3 ">
          <h1 className="display-5 text-secondary m-0 logoo">
            <img src={logo} className="img-fluid" alt="" />
    
          </h1>
          
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="fa fa-bars"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0">
            <Link to="/" className="nav-item nav-link active">Home</Link>
            <Link to="/about" className="nav-item nav-link">About</Link>
            <Link to="/products" className="nav-item nav-link">Products</Link>
         
            <Link to="/contact" className="nav-item nav-link">Contact</Link>
          </div>
         
        </div>
      </nav>
    </div>
  );
};
// Navbar & Hero End

export default Navbar;