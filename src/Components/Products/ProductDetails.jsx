import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { API_URL, UPLOADS_URL } from '../../apiConfig';

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Aos.init({ duration: 1000 });

    axios.get(`${API_URL}?type=products`)
      .then(res => {
        if (res.data && res.data.products) {
          const found = res.data.products.find(p => p.id === id);
          setProduct(found || null);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching product details:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="container py-5 text-center" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <div className="spinner-border text-success mb-3" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="text-muted">Loading product details...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container py-5 text-center" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <i className="fa-solid fa-triangle-exclamation text-danger display-1 mb-4"></i>
        <h3 className="fw-bold mb-3" style={{ color: '#1a1a2e' }}>Product Not Found</h3>
        <p className="text-muted mb-4">The product you are looking for might have been removed or doesn't exist.</p>
        <Link to="/products" className="btn btn-success px-4 py-2 rounded-pill fw-bold">
          <i className="fa-solid fa-arrow-left me-2"></i> Back to Products
        </Link>
      </div>
    );
  }

  const imageSrc = product.image && (product.image.startsWith('http') || product.image.startsWith('/'))
    ? product.image
    : `${UPLOADS_URL}uploads/${product.image}`;

  let statusBadgeClass = "bg-success";
  if (product.status === "Conventional") statusBadgeClass = "bg-secondary";
  if (product.status === "Out of Stock" || product.status === "Out of stock") statusBadgeClass = "bg-danger";

  return (
    <>
      {/* Breadcrumb Header */}
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: '900px' }}>
          <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">{product.title}</h4>
          <ol className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
            <li className="breadcrumb-item"><Link className='text-white' to="/">Home</Link></li>
            <li className="breadcrumb-item"><Link className='text-white' to="/products">Products</Link></li>
            <li className="breadcrumb-item active text-white">{product.title}</li>
          </ol>
        </div>
      </div>

      {/* Product Details Section */}
      <div className="container-fluid py-5" style={{ background: '#f8fdf4' }}>
        <div className="container py-4">
          
          {/* Back button */}
          <div className="mb-4" data-aos="fade-right">
            <Link to="/products" className="btn btn-outline-success rounded-pill px-4 fw-bold">
              <i className="fa-solid fa-arrow-left me-2"></i> Back to Products
            </Link>
          </div>

          <div className="row g-5">
            {/* Left Column: Image Card */}
            <div className="col-lg-5" data-aos="fade-up">
              <div className="card border-0 shadow-lg overflow-hidden rounded-4 bg-white p-3 h-100 d-flex align-items-center justify-content-center" style={{ minHeight: '380px' }}>
                <img 
                  src={imageSrc} 
                  alt={product.title} 
                  className="img-fluid rounded-3" 
                  style={{ 
                    maxHeight: '400px', 
                    objectFit: 'contain', 
                    transition: 'transform 0.5s ease',
                    cursor: 'zoom-in'
                  }}
                  onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
            </div>

            {/* Right Column: Information */}
            <div className="col-lg-7" data-aos="fade-up" data-aos-delay="100">
              <div className="h-100 p-4 p-md-5 rounded-4 bg-white shadow-lg border-start border-5 border-success d-flex flex-column justify-content-between">
                <div>
                  <div className="d-flex flex-wrap align-items-center gap-2 mb-3">
                    <span className="badge bg-primary px-3 py-2 fs-7 fw-semibold rounded-pill">{product.category}</span>
                    <span className={`badge ${statusBadgeClass} px-3 py-2 fs-7 fw-semibold rounded-pill`}>{product.status}</span>
                  </div>

                  <h1 className="display-6 fw-bold mb-3" style={{ color: '#1a1a2e' }}>{product.title}</h1>
                  
                  {product.scientificName && (
                    <p className="fs-5 text-muted mb-4 italic" style={{ fontStyle: 'italic', fontFamily: 'Georgia, serif' }}>
                      <strong style={{ color: '#333' }}>Scientific Name:</strong> {product.scientificName}
                    </p>
                  )}

                  <hr className="my-4" style={{ borderColor: 'rgba(25, 135, 84, 0.15)' }} />

                  {/* Specifications Block */}
                  <div className="row g-4 mb-4">
                    {/* Available Forms */}
                    {product.availableForms && product.availableForms.length > 0 && (
                      <div className="col-md-6">
                        <h6 className="fw-bold mb-3 d-flex align-items-center" style={{ color: '#198754' }}>
                          <i className="fa-solid fa-cubes me-2"></i> Available Forms
                        </h6>
                        <div className="d-flex flex-wrap gap-2">
                          {product.availableForms.map((form, idx) => (
                            <span key={idx} className="badge bg-light text-dark border px-3 py-2 rounded-pill small">
                              {form}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Pesticides Status */}
                    {product.pesticidesStatus && product.pesticidesStatus.length > 0 && (
                      <div className="col-md-6">
                        <h6 className="fw-bold mb-3 d-flex align-items-center" style={{ color: '#198754' }}>
                          <i className="fa-solid fa-shield-halved me-2"></i> Pesticides Status
                        </h6>
                        <div className="d-flex flex-wrap gap-2">
                          {product.pesticidesStatus.map((status, idx) => (
                            <span key={idx} className="badge bg-light text-dark border px-3 py-2 rounded-pill small">
                              {status}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Call to action */}
                <div className="mt-4 pt-4 border-top">
                  <div className="bg-light p-4 rounded-4 border border-1 border-light-subtle d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">
                    <div>
                      <h6 className="fw-bold mb-1" style={{ color: '#1a1a2e' }}>Interested in this product?</h6>
                      <p className="text-muted mb-0 small">Get instant pricing, certifications, and shipping options.</p>
                    </div>
                    <Link 
                      to={`/contact?product=${encodeURIComponent(product.title)}`} 
                      className="btn btn-success fw-bold px-4 py-3 rounded-pill d-flex align-items-center justify-content-center shadow-sm"
                    >
                      <i className="fa-solid fa-paper-plane me-2"></i> Inquire About Product
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
