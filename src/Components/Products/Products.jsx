import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { API_URL, UPLOADS_URL } from '../../apiConfig';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Aos.init({
      duration: 1000
    });

    axios.get(`${API_URL}?type=products`)
      .then(res => {
        if (res.data && res.data.products) {
          setProducts(res.data.products);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: '900px' }}>
          <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">Our Products </h4>
          <ol className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
            <li className="breadcrumb-item"><Link className='text-white' to="/">Home</Link></li>
            <li className="breadcrumb-item"><Link className='text-white' to="">Pages</Link></li>
            <li className="breadcrumb-item active text-white">Products</li>
          </ol>    
        </div>
      </div>
      
      {/* Products Start */}
      <div className="container-fluid products overflow-hidden pt-5">
        <div className="container py-5">
          <div className="section-title text-center mb-5" data-aos="fade-up" data-aos-delay="100">
            <div className="sub-style">
              <h5 className="sub-title text-primary px-3 mb-3">Our Products</h5>
              <h2 className="display-6 mb-4">Premium Quality Herbs & Spices</h2>
              <p className="lead text-muted">Discover our range of carefully sourced and processed agricultural products</p>
            </div>
          </div>
          
          <div className="row g-4">
            {loading ? (
              <div className="col-12 text-center py-5">
                <div className="spinner-border text-success" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <p className="mt-2 text-muted">Loading our premium products...</p>
              </div>
            ) : products.length === 0 ? (
              <div className="col-12 text-center py-5">
                <p className="text-muted">No products available at the moment.</p>
              </div>
            ) : (
              products.map((prod, idx) => {
                let statusBadge = "bg-success";
                if (prod.status === "Conventional") statusBadge = "bg-secondary";
                if (prod.status === "Out of Stock" || prod.status === "Out of stock") statusBadge = "bg-danger";

                const imageSrc = prod.image && (prod.image.startsWith('http') || prod.image.startsWith('/'))
                  ? prod.image 
                  : `${UPLOADS_URL}uploads/${prod.image}`;

                return (
                  <div key={prod.id || idx} className="col-lg-6 col-xl-4" data-aos="fade-up" data-aos-delay={(idx % 3 + 1) * 100}>
                    <div className="product-card">
                      <div className="product-image">
                        <img src={imageSrc} className="img-fluid w-100" alt={prod.title} style={{ height: '300px', objectFit: 'cover' }} />
                      </div>
                      <div className="product-content">
                        <div className="product-main-content">
                          <div className="product-category mb-2">
                            <span className="badge bg-primary-subtle text-primary">{prod.category}</span>
                          </div>
                          <h5 className="product-title mb-3">{prod.title}</h5>
                          <div className="product-basic-info">
                            <p className="mb-2"><strong>Scientific Name:</strong> {prod.scientificName}</p>
                            <p className="mb-0"><strong>Status:</strong> <span className={`badge ${statusBadge} ms-1`}>{prod.status}</span></p>
                          </div>
                        </div>
                        <div className="product-details">
                          <div className="details-content">
                            <h6 className="text-white mb-3">Product Details</h6>
                            <div className="details-specs">
                              {prod.availableForms && prod.availableForms.length > 0 && (
                                <>
                                  <p className="mb-2"><strong>Available Forms:</strong></p>
                                  <ul className="list-unstyled mb-3">
                                    {prod.availableForms.map((form, fIdx) => (
                                      <li key={fIdx}>• {form}</li>
                                    ))}
                                  </ul>
                                </>
                              )}
                              {prod.pesticidesStatus && prod.pesticidesStatus.length > 0 && (
                                <>
                                  <p className="mb-2"><strong>Pesticides Status:</strong></p>
                                  <ul className="list-unstyled">
                                    {prod.pesticidesStatus.map((pest, pIdx) => (
                                      <li key={pIdx}>• {pest}</li>
                                    ))}
                                  </ul>
                                </>
                              )}
                            </div>
                            <Link to="/contact" className="btn btn-light rounded-pill w-100 mt-3">
                              Contact Us for Pricing
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
      {/* Products End */}
    </>
  );
}