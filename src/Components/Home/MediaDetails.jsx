import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { API_URL, UPLOADS_URL } from '../../apiConfig';

export default function MediaDetails() {
  const { id } = useParams();
  const [mediaItem, setMediaItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Aos.init({ duration: 1000 });

    axios.get(`${API_URL}?type=settings`)
      .then(res => {
        if (res.data && res.data.settings && res.data.settings.media_items) {
          const found = res.data.settings.media_items.find(item => item.id === id);
          setMediaItem(found || null);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching media details:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="container py-5 text-center" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <div className="spinner-border text-success mb-3" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="text-muted">Loading post details...</p>
      </div>
    );
  }

  if (!mediaItem) {
    return (
      <div className="container py-5 text-center" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <i className="fa-solid fa-triangle-exclamation text-danger display-1 mb-4"></i>
        <h3 className="fw-bold mb-3" style={{ color: '#1a1a2e' }}>Post Not Found</h3>
        <p className="text-muted mb-4">The media post you are looking for might have been removed or doesn't exist.</p>
        <Link to="/" className="btn btn-success px-4 py-2 rounded-pill fw-bold">
          <i className="fa-solid fa-arrow-left me-2"></i> Back to Homepage
        </Link>
      </div>
    );
  }

  const fileUrl = `${UPLOADS_URL}uploads/${mediaItem.file}`;

  return (
    <>
      {/* Breadcrumb Header */}
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: '900px' }}>
          <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">{mediaItem.title}</h4>
          <ol className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
            <li className="breadcrumb-item"><Link className='text-white' to="/">Home</Link></li>
            <li className="breadcrumb-item active text-white">Showcase Details</li>
          </ol>
        </div>
      </div>

      {/* Media Details Container */}
      <div className="container-fluid py-5" style={{ background: '#f8fdf4' }}>
        <div className="container py-4">
          
          {/* Back button */}
          <div className="mb-4" data-aos="fade-right">
            <Link to="/" className="btn btn-outline-success rounded-pill px-4 fw-bold">
              <i className="fa-solid fa-arrow-left me-2"></i> Back to Homepage
            </Link>
          </div>

          <div className="row g-5">
            {/* Visual Media Column */}
            <div className="col-lg-6" data-aos="fade-up">
              <div className="card border-0 shadow-lg overflow-hidden rounded-4 bg-dark p-0 h-100 d-flex align-items-center justify-content-center" style={{ minHeight: '400px' }}>
                {mediaItem.type === 'video' ? (
                  <video
                    src={fileUrl}
                    controls
                    autoPlay
                    className="w-100 h-100"
                    style={{ maxHeight: '550px', objectFit: 'contain', background: '#000' }}
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <div className="position-relative overflow-hidden w-100 h-100 d-flex align-items-center justify-content-center" style={{ minHeight: '400px', backgroundColor: '#0d1b0f' }}>
                    {/* Blurred backdrop image */}
                    <div 
                      className="position-absolute w-100 h-100" 
                      style={{ 
                        backgroundImage: `url(${fileUrl})`, 
                        backgroundSize: 'cover', 
                        backgroundPosition: 'center', 
                        filter: 'blur(25px) brightness(0.75)', 
                        opacity: 0.45,
                        transform: 'scale(1.1)',
                        zIndex: 0
                      }}
                    />
                    <img 
                      src={fileUrl} 
                      alt={mediaItem.title} 
                      className="img-fluid position-relative" 
                      style={{ 
                        maxHeight: '500px', 
                        objectFit: 'contain', 
                        zIndex: 1,
                        padding: '10px'
                      }}
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Description/Content Column */}
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <div className="h-100 p-4 p-md-5 rounded-4 bg-white shadow-lg d-flex flex-column justify-content-between">
                <div>
                  <div className="d-inline-block px-3 py-1 rounded-pill mb-3" style={{ background: 'rgba(25,135,84,0.1)', color: '#198754', fontWeight: 600, fontSize: '0.85rem' }}>
                    <i className={`fa ${mediaItem.type === 'video' ? 'fa-video' : 'fa-image'} me-2`}></i>
                    {mediaItem.type === 'video' ? 'Video Post' : 'Image Post'}
                  </div>

                  <h1 className="display-6 fw-bold mb-3" style={{ color: '#1a1a2e' }}>{mediaItem.title}</h1>
                  
                  {/* Summary/Description */}
                  <p className="fs-5 text-muted mb-4 fw-normal leading-relaxed" style={{ lineHeight: '1.7' }}>
                    {mediaItem.description}
                  </p>

                  {/* Long Content / Extra Details */}
                  {mediaItem.content ? (
                    <div className="mt-4 pt-4 border-top">
                      <h5 className="fw-bold mb-3" style={{ color: '#198754' }}>
                        <i className="fa-solid fa-file-lines me-2"></i> Additional Details
                      </h5>
                      <div 
                        className="text-dark whitespace-pre-line" 
                        style={{ 
                          whiteSpace: 'pre-wrap', 
                          lineHeight: '1.8', 
                          fontSize: '1.05rem', 
                          color: '#444' 
                        }}
                      >
                        {mediaItem.content}
                      </div>
                    </div>
                  ) : (
                    <div className="mt-4 pt-4 border-top text-muted italic">
                      No additional specifications written for this post.
                    </div>
                  )}
                </div>

                <div className="mt-5 pt-4 border-top">
                  <Link 
                    to={`/contact?subject=${encodeURIComponent(`Inquiry regarding showcase: ${mediaItem.title}`)}`} 
                    className="btn btn-success fw-bold px-4 py-3 rounded-pill d-inline-flex align-items-center shadow-sm"
                  >
                    <i className="fa-solid fa-envelope me-2"></i> Contact Us About This
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
