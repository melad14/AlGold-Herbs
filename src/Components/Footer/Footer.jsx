import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {

  return (
    <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
      <div className="container py-5">
        <div className="row g-5">
          {/* About Us Column */}
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="footer-item d-flex flex-column">
              <div className="footer-item">
                <h4 className="text-white mb-4">About Us</h4>
                <p className="mb-3">
                                    Al Gold herbs & spices is a leading exporter of premium quality herbs and spices, based in Egypt and serving customers worldwide. Our herbs and spices are grown and harvested using sustainable practices and are carefully processed to preserve their natural flavor and health benefits.

                </p>
              </div>
          
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="footer-item d-flex flex-column">
              <h4 className="text-white mb-4">Quick Links</h4>
              <Link to="/about"><i className="fas fa-angle-right me-2"></i> About</Link>
              <Link to="/services"><i className="fas fa-angle-right me-2"></i> services</Link>
              <Link to="/about"><i className="fas fa-angle-right me-2"></i> core value</Link>

              <Link to="contact"><i className="fas fa-angle-right me-2"></i> Contact us</Link>
            </div>
          </div>

          {/* Business Hours Column */}
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="footer-item d-flex flex-column">
              <h4 className="text-white mb-4">Business Hours</h4>
              <div className="mb-3">
                <h6 className="text-muted mb-0"> sat- Thursday:</h6>
                <p className="text-white mb-0">09.00 am to 07.00 pm</p>
              </div>
              <div className="mb-3">
                <h6 className="text-muted mb-0">Thursday:</h6>
                <p className="text-white mb-0">10.00 am to 05.00 pm</p>
              </div>
              <div className="mb-3">
                <h6 className="text-muted mb-0">Vacation:</h6>
                <p className="text-white mb-0">All friday is our vacation</p>
              </div>
            </div>
          </div>

          {/* Contact Info Column */}
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="footer-item d-flex flex-column">
              <h4 className="text-white mb-4">Contact Info</h4>
              <a ><i className="fa fa-map-marker-alt me-2"></i> bani swayf-egypt
              </a>
              <a ><i className="fas fa-envelope me-2"></i>
                AlGoldherbs@gmail.com</a>
              <a ><i className="fas fa-phone me-2"></i>+01204684565
              </a>
              <a  className="mb-3"><i className="fas fa-print me-2"></i>
               georgino-herbs.vercel.app</a>
              <div className="d-flex">
                <a className="btn btn-secondary btn-md-square rounded-circle me-3" >
                  <i className="fab fa-facebook-f text-white"></i>
                </a>
                <a className="btn btn-secondary btn-md-square rounded-circle me-3" >
                  <i className="fab fa-twitter text-white"></i>
                </a>
                <a className="btn btn-secondary btn-md-square rounded-circle me-3" >
                  <i className="fab fa-instagram text-white"></i>
                </a>
                <a className="btn btn-secondary btn-md-square rounded-circle me-0" >
                  <i className="fab fa-linkedin-in text-white"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
