import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';
import { API_URL, CONTACT_URL, UPLOADS_URL } from '../../apiConfig';

// Importing static layout images
import carousel1 from '../../img/Website-Header-latest.png';
import about2 from '../../img/about-2.png';
import banner1 from '../../img/green-fresh-basil-stone-background_70626-8490.jpg';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [settings, setSettings] = useState({
    contact: {
      address: "Bani-suef-egypt",
      email: "contact@algoldherbs.com",
      phone: "01204684565",
      website: "www.algoldherbs.com"
    },
    about: {
      vision: "To become a leading global supplier of premium quality herbs and spices, fostering teamwork and collaboration.",
      mission: "Provide 100% genuine assistance with faster execution and expert advice for global customers."
    },
    counters: {
      countries: "25",
      team: "50",
      certificates: "15",
      products: "100"
    },
    media_items: []
  });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: '',
    subject: '',
    message: ''
  });
  
  const [sending, setSending] = useState(false);

  useEffect(() => {
    Aos.init({
      duration: 1000
    });

    // Fetch products and settings
    axios.get(API_URL)
      .then(res => {
        if (res.data) {
          if (res.data.products) {
            setProducts(res.data.products);
          }
          if (res.data.settings && Object.keys(res.data.settings).length > 0) {
            setSettings(res.data.settings);
          }
        }
      })
      .catch(err => {
        console.error("Error fetching homepage data:", err);
      });
  }, []);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields (Name, Email, Message)");
      return;
    }

    setSending(true);
    const loadingToast = toast.loading("Sending message...");

    axios.post(CONTACT_URL, formData)
      .then(res => {
        toast.dismiss(loadingToast);
        if (res.data && res.data.success) {
          toast.success("Your message has been sent successfully!");
          setFormData({
            name: '',
            email: '',
            phone: '',
            project: '',
            subject: '',
            message: ''
          });
        } else {
          toast.error(res.data.message || "Failed to send message.");
        }
        setSending(false);
      })
      .catch(err => {
        toast.dismiss(loadingToast);
        console.error("Error submitting contact form:", err);
        toast.error("An error occurred while sending your message. Please try again.");
        setSending(false);
      });
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      
      <div className="header-carousel">
        <div id="carouselId" className="carousel slide" data-bs-ride="carousel" data-bs-interval="false">
          <ol className="carousel-indicators">
            <li data-bs-target="#carouselId" data-bs-slide-to="0" className="" aria-current="true" aria-label="First slide"></li>
            <li data-bs-target="#carouselId" data-bs-slide-to="1" aria-label="active"></li>
          </ol>
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <img src={carousel1} className="img-fluid w-100" alt="Second slide" />
              <div className="carousel-caption">
                <div className="container py-4">
                  <div className="row g-5">
                    <div className="col-lg-6 d-none d-lg-flex fadeInRight animated" data-animation="fadeInRight" data-delay="1s" style={{ animationDelay: '1s' }}>
                      <div className="text-start">
                        <h1 className="display-5 text-white">Al Gold herbs & spices</h1>
                        <p>is a leading exporter of premium quality herbs and spices, based in Egypt and serving customers worldwide with sustainable practices and carefully processed products that preserve natural flavor and health benefits.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Carousel End */}

      {/* Media Showcase Start */}
      {settings.media_items && settings.media_items.length > 0 && (
        <div className="container-fluid py-5" style={{ background: 'linear-gradient(135deg, #f8fdf4 0%, #eef7e8 50%, #f0f9f0 100%)' }}>
          <div className="container py-3">
            {/* Section Header */}
            <div className="text-center mb-5" data-aos="fade-up">
              <div className="d-inline-block px-3 py-1 rounded-pill mb-3" style={{ background: 'rgba(25,135,84,0.1)', color: '#198754', fontWeight: 600, fontSize: '0.9rem', letterSpacing: '1px', textTransform: 'uppercase' }}>
                <i className="fa fa-leaf me-2"></i>Gallery
              </div>
              <h2 className="display-6 fw-bold mb-2" style={{ color: '#1a1a2e' }}>Our World in <span style={{ color: '#198754' }}>Pictures & Videos</span></h2>
              <p className="text-muted lead" style={{ maxWidth: 560, margin: '0 auto' }}>A glimpse into our facilities, processes and premium herbal products</p>
            </div>

            <div className="row g-4">
              {settings.media_items.map((item, idx) => {
                const delay = (idx % 3) * 100 + 100;
                if (item.type === 'video') {
                  // ---- Video Card ----
                  return (
                    <div key={item.id || idx} className="col-lg-6" data-aos="fade-up" data-aos-delay={delay}>
                      <div className="h-100 overflow-hidden rounded-4 shadow-lg position-relative" style={{ background: '#0d1b0f' }}>
                        <div className="ratio ratio-16x9">
                          <iframe
                            src={item.video_url}
                            title={item.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            style={{ border: 'none' }}
                          ></iframe>
                        </div>
                        <div className="p-4" style={{ background: 'linear-gradient(135deg, #0d1b0f, #1a3a1a)' }}>
                          <div className="d-flex align-items-center gap-2 mb-2">
                            <span className="badge" style={{ background: 'rgba(255,68,68,0.2)', color: '#ff4444', border: '1px solid rgba(255,68,68,0.3)' }}>
                              <i className="fa fa-play-circle me-1"></i>Video
                            </span>
                          </div>
                          <h4 className="fw-bold mb-2" style={{ color: '#ffffff' }}>{item.title}</h4>
                          <p className="mb-0" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }}>{item.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                } else {
                  // ---- Image Card ----
                  const imgSrc = item.file && (item.file.startsWith('http') || item.file.startsWith('/'))
                    ? item.file
                    : `${UPLOADS_URL}uploads/${item.file}`;
                  return (
                    <div key={item.id || idx} className="col-lg-6" data-aos="fade-up" data-aos-delay={delay}>
                      <div className="h-100 overflow-hidden rounded-4 shadow-lg position-relative media-card-wrapper" style={{ cursor: 'default' }}>
                        {/* Image */}
                        <div className="position-relative overflow-hidden" style={{ height: 280 }}>
                          <img
                            src={imgSrc}
                            alt={item.title}
                            className="w-100 h-100"
                            style={{ objectFit: 'cover', transition: 'transform 0.6s ease' }}
                            onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                            onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                          />
                          {/* Gradient overlay */}
                          <div className="position-absolute inset-0 w-100 h-100" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)', top: 0, left: 0 }}></div>
                          {/* Badge */}
                          <div className="position-absolute" style={{ top: 16, left: 16 }}>
                            <span className="badge px-3 py-2 rounded-pill" style={{ background: 'rgba(25,135,84,0.85)', color: '#fff', backdropFilter: 'blur(8px)', fontSize: '0.78rem' }}>
                              <i className="fa fa-image me-1"></i>Photo
                            </span>
                          </div>
                        </div>
                        {/* Content */}
                        <div className="p-4" style={{ background: '#fff' }}>
                          <div className="d-flex align-items-start gap-3">
                            <div className="flex-shrink-0 rounded-circle d-flex align-items-center justify-content-center" style={{ width: 44, height: 44, background: 'linear-gradient(135deg, #198754, #0f5132)', color: '#fff', fontSize: '1.1rem' }}>
                              <i className="fa fa-leaf"></i>
                            </div>
                            <div>
                              <h5 className="fw-bold mb-1" style={{ color: '#1a1a2e' }}>{item.title}</h5>
                              <p className="mb-0 text-muted" style={{ fontSize: '0.93rem', lineHeight: 1.6 }}>{item.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      )}
      {/* Media Showcase End */}

      {/* Features Start */}

      <div className="container feature py-5">
        <div className="container py-5">
          <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '800px'}}>
            <h1 className="display-5 text-capitalize mb-3">Central <span className="text-primary">Features</span></h1>
            <p className="mb-0">
              Al Gold herbs & spices is a leading exporter of premium quality herbs and spices, 
              based in Egypt and serving customers worldwide with sustainable practices and carefully 
              processed products that preserve natural flavor and health benefits.
            </p>
          </div>
          <div className="row g-4 align-items-center">
            <div className="col-xl-4">
              <div className="row gy-4 gx-0">
                <div className="col-12 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="feature-item">
                    <div className="feature-icon">
                      <span className="fa fa-trophy fa-2x"></span>
                    </div>
                    <div className="ms-4">
                      <h5 className="mb-3">Premium Quality Assurance</h5>
                      <p className="mb-0">
                        We ensure premium quality in all our agricultural exports with {settings.counters.certificates}+ international 
                        quality certificates and rigorous quality control processes.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 wow fadeInUp" data-wow-delay="0.3s">
                  <div className="feature-item">
                    <div className="feature-icon">
                      <span className="fa fa-globe fa-2x"></span>
                    </div>
                    <div className="ms-4">
                      <h5 className="mb-3">Global Export Network</h5>
                      <p className="mb-0">
                        Serving {settings.counters.countries}+ countries worldwide with reliable international shipping 
                        and efficient export solutions to all destinations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-xl-4 wow fadeInUp" data-wow-delay="0.2s">
              <img src={about2} className="img-fluid w-100" style={{objectFit: 'cover'}} alt="Al Gold Herbs Features" />
            </div>
            <div className="col-xl-4">
              <div className="row gy-4 gx-0">
                <div className="col-12 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="feature-item justify-content-end">
                    <div className="text-end me-4">
                      <h5 className="mb-3">Competitive Pricing</h5>
                      <p className="mb-0">
                        We offer the best prices with high-quality assurance, providing 
                        excellent value for premium herbs and spices in the global market.
                      </p>
                    </div>
                    <div className="feature-icon">
                      <span className="fa fa-tag fa-2x"></span>
                    </div>
                  </div>
                </div>
                <div className="col-12 wow fadeInUp" data-wow-delay="0.3s">
                  <div className="feature-item justify-content-end">
                    <div className="text-end me-4">
                      <h5 className="mb-3">Sustainable Practices</h5>
                      <p className="mb-0">
                        Our herbs and spices are grown and harvested using sustainable practices, 
                        preserving natural flavors and health benefits while protecting the environment.
                      </p>
                    </div>
                    <div className="feature-icon">
                      <span className="fa fa-leaf fa-2x"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-5 wow fadeInUp" data-wow-delay="0.4s">
            <Link to="/about" className="btn btn-success py-3 px-5">
              Learn More About Our Features
            </Link>
          </div>
        </div>
      </div>
      {/* Features End */}

      {/* About Start */}
      <div className="container overflow-hidden about py-5">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-xl-6 wow fadeInLeft" data-wow-delay="0.2s">
              <div className="about-item">
                <div className="pb-5">
                  <h1 className="display-5 text-capitalize">About <span className="text-primary">Al Gold Herbs</span></h1>
                  <p className="mb-0">
                    Al Gold herbs & spices is a leading exporter of premium quality herbs and spices, 
                    based in Egypt and serving customers worldwide. Our herbs and spices are grown and 
                    harvested using sustainable practices and are carefully processed to preserve their 
                    natural flavor and health benefits.
                  </p>
                </div>
                <div className="row g-4">
                  <div className="col-lg-6">
                    <div className="about-item-inner border p-4">
                      <div className="about-icon mb-4">
                        <span className="fa fa-eye fa-3x text-secondary"></span>
                      </div>
                      <h5 className="mb-3">Our Vision</h5>
                      <p className="mb-0">{settings.about.vision}</p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="about-item-inner border p-4">
                      <div className="about-icon mb-4">
                        <span className="fa fa-bullseye fa-3x text-secondary"></span>
                      </div>
                      <h5 className="mb-3">Our Mission</h5>
                      <p className="mb-0">{settings.about.mission}</p>
                    </div>
                  </div>
                </div>
                <p className="text-item my-4">
                  Since 2001, Al Gold Herbs has been dedicated to producing safe and wholesome herbs 
                  and spices suitable for export to local markets and international clients. Our team 
                  brings prolonged experience in quality, production, and export, complying with different 
                  customers' requirements and quality standards.
                </p>
                <div className="row g-4">
                  <div className="col-lg-6">
                    <div className="text-center rounded bg-secondary p-4">
                      <h1 className="display-6 text-white">20+</h1>
                      <h5 className="text-light mb-0">Years Of Experience</h5>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="rounded">
                      <p className="mb-2"><i className="fa fa-check-circle text-primary me-1"></i> {settings.counters.products}+ Herbs & Spices Range</p>
                      <p className="mb-2"><i className="fa fa-check-circle text-primary me-1"></i> {settings.counters.countries}+ Countries Served</p>
                      <p className="mb-2"><i className="fa fa-check-circle text-primary me-1"></i> {settings.counters.certificates}+ International Certificates</p>
                      <p className="mb-0"><i className="fa fa-check-circle text-primary me-1"></i> Sustainable Farming Practices</p>
                    </div>
                  </div>
                  <div className="col-lg-5 d-flex align-items-center">
                    <Link to="/about" className="btn btn-success rounded py-3 px-5">More About Us</Link>
                  </div>
                  <div className="col-lg-7">
                    <div className="d-flex align-items-center">
                      <div className="bg-success rounded-circle border border-4 border-secondary d-flex align-items-center justify-content-center" style={{width: '100px', height: '100px'}}>
                        <span className="fa fa-users fa-2x text-white"></span>
                      </div>
                      <div className="ms-4">
                        <h4>Al Gold Team</h4>
                        <p className="mb-0">{settings.counters.team}+ Dedicated Professionals</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 wow fadeInRight" data-wow-delay="0.2s">
              <div className="about-img">
                <div className="img-1">
                  <img src={about2} className="img-fluid rounded h-100 w-100" alt="Al Gold Herbs Facility" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}

      {/* Fact Counter */}
      <div className="counter bg-secondary py-5">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
              <div className="counter-item text-center">
                <div className="counter-item-icon mx-auto">
                  <i className="fas fa-globe fa-2x"></i>
                </div>
                <div className="counter-counting my-3">
                  <span className="text-white fs-2 fw-bold">{settings.counters.countries}</span>
                  <span className="h1 fw-bold text-white">+</span>
                </div>
                <h4 className="text-white mb-0">Countries Served</h4>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.3s">
              <div className="counter-item text-center">
                <div className="counter-item-icon mx-auto">
                  <i className="fas fa-users fa-2x"></i>
                </div>
                <div className="counter-counting my-3">
                  <span className="text-white fs-2 fw-bold">{settings.counters.team}</span>
                  <span className="h1 fw-bold text-white">+</span>
                </div>
                <h4 className="text-white mb-0">Team Members</h4>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.5s">
              <div className="counter-item text-center">
                <div className="counter-item-icon mx-auto">
                  <i className="fas fa-award fa-2x"></i>
                </div>
                <div className="counter-counting my-3">
                  <span className="text-white fs-2 fw-bold">{settings.counters.certificates}</span>
                  <span className="h1 fw-bold text-white">+</span>
                </div>
                <h4 className="text-white mb-0">Quality Certificates</h4>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.7s">
              <div className="counter-item text-center">
                <div className="counter-item-icon mx-auto">
                  <i className="fas fa-seedling fa-2x"></i>
                </div>
                <div className="counter-counting my-3">
                  <span className="text-white fs-2 fw-bold">{settings.counters.products}</span>
                  <span className="h1 fw-bold text-white">+</span>
                </div>
                <h4 className="text-white mb-0">Herbs & Spices</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Fact Counter */}

      {/* Process Steps Start */}
      <div className="steps py-5">
        <div className="container py-5">
          <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '800px'}}>
            <h1 className="display-5 text-capitalize text-white mb-3">Our<span className="text-primary"> Process</span></h1>
            <p className="mb-0 text-white">
              At Al Gold Herbs, we follow a streamlined process to ensure premium quality herbs and spices 
              reach our global customers with efficiency and reliability. Our commitment to excellence 
              guides every step of our export journey.
            </p>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
              <div className="steps-item p-4 mb-4">
                <h4>Initial Contact & Consultation</h4>
                <p className="mb-0">
                  Reach out to our expert team for personalized consultation about your herb and spice requirements, 
                  quality standards, and shipping needs.
                </p>
                <div className="setps-number">01.</div>
              </div>
            </div>
            <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
              <div className="steps-item p-4 mb-4">
                <h4>Quality Selection & Sourcing</h4>
                <p className="mb-0">
                  We carefully select and source the finest herbs and spices from sustainable farms, 
                  ensuring premium quality and compliance with international standards.
                </p>
                <div className="setps-number">02.</div>
              </div>
            </div>
            <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
              <div className="steps-item p-4 mb-4">
                <h4>Global Delivery & Support</h4>
                <p className="mb-0">
                  Enjoy reliable international shipping with continuous support and after-sales service 
                  to ensure complete satisfaction with your order.
                </p>
                <div className="setps-number">03.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Process Steps End */}

      {/* Products Start */}
      <div className="container products overflow-hidden pt-5">
        <div className="container py-5">
          <div className="section-title text-center mb-5" data-aos="fade-up" data-aos-delay="100">
            <div className="sub-style">
              <h5 className="sub-title text-primary px-3 mb-3">Our Products</h5>
              <h2 className="display-6 mb-4">Premium Quality Herbs & Spices</h2>
              <p className="lead text-muted">Discover our range of carefully sourced and processed agricultural products</p>
            </div>
          </div>
          
          <div className="row g-4">
            {products.slice(0, 6).map((prod, idx) => {
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
                                  {prod.availableForms.map((form, fIdx) => <li key={fIdx}>• {form}</li>)}
                                </ul>
                              </>
                            )}
                            {prod.pesticidesStatus && prod.pesticidesStatus.length > 0 && (
                              <>
                                <p className="mb-2"><strong>Pesticides Status:</strong></p>
                                <ul className="list-unstyled">
                                  {prod.pesticidesStatus.map((pest, pIdx) => <li key={pIdx}>• {pest}</li>)}
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
            })}
          </div>
          
          <div className="text-center mt-5 pt-4" data-aos="fade-up" data-aos-delay="100">
            <h4 className="mb-4">Explore All Our Premium Products</h4>
            <Link to="/products" className="btn btn-outline-success btn-lg rounded-pill px-5">
              View All Products
            </Link>
          </div>
        </div>
      </div>
      {/* Products End */}

      {/* Banner Start */}
      <div className="banner pb-5 wow zoomInDown" data-wow-delay="0.1s">
        <div className="pb-5">
          <div className="banner-item rounded">
            <img src={banner1} className="img-fluid rounded w-100" alt="Al Gold Herbs Banner" />
            <div className="banner-content">
              <h2 className="text-light">Premium Herbs & Spices</h2>
              <h1 className="text-white">Interested in Partnership?</h1>
              <p className="text-white">Don't hesitate and send us a message for premium quality exports.</p>
              <div className="banner-btn">
                <a href={`https://wa.me/${settings.contact.phone}`} className="btn btn-secondary rounded-pill py-3 px-4 px-md-5 me-2" target="_blank" rel="noreferrer">WhatsApp</a>
                <Link to="/contact" className="btn btn-primary rounded-pill py-3 px-4 px-md-5 ms-2">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Banner End */}

      <div className="container contact py-5">
        <div className="container py-5">
          <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '800px' }}>
            <h1 className="display-5 text-capitalize text-primary mb-3">Contact Us</h1>
          </div>
          <div className="row g-5">
            {/* First Column - Contact Information */}
            <div className="col-xl-5 wow fadeInUp" data-wow-delay="0.1s">
              <div className="row g-5">
                <div className="col-md-6 col-lg-6">
                  <div className="contact-add-item p-4">
                    <div className="contact-icon mb-4">
                      <i className="fas fa-map-marker-alt fa-2x"></i>
                    </div>
                    <div>
                      <h4>Address</h4>
                      <p className="mb-0">{settings.contact.address}</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                  <div className="contact-add-item p-4">
                    <div className="contact-icon mb-4">
                      <i className="fas fa-envelope fa-2x"></i>
                    </div>
                    <div>
                      <h4>Mail Us</h4>
                      <p className="mb-0">{settings.contact.email}</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                  <div className="contact-add-item p-4">
                    <div className="contact-icon mb-4">
                      <i className="fa fa-phone-alt fa-2x"></i>
                    </div>
                    <div>
                      <h4>Telephone</h4>
                      <p className="mb-0">{settings.contact.phone}</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 wow fadeInUp" data-wow-delay="0.7s">
                  <div className="contact-add-item p-4">
                    <div className="contact-icon mb-4">
                      <i className="fab fa-firefox-browser fa-2x"></i>
                    </div>
                    <div>
                      <h4>Website</h4>
                      <p className="mb-0">{settings.contact.website}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Column - Contact Form */}
            <div className="col-xl-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="p-5 rounded">
                <h4 className="text-primary mb-4">Send Your Message</h4>
                <form onSubmit={handleFormSubmit}>
                  <div className="row g-4">
                    <div className="col-lg-12 col-xl-6">
                      <div className="form-floating">
                        <input type="text" className="form-control" id="name" value={formData.name} onChange={handleInputChange} placeholder="Your Name" required />
                        <label htmlFor="name">Your Name</label>
                      </div>
                    </div>
                    <div className="col-lg-12 col-xl-6">
                      <div className="form-floating">
                        <input type="email" className="form-control" id="email" value={formData.email} onChange={handleInputChange} placeholder="Your Email" required />
                        <label htmlFor="email">Your Email</label>
                      </div>
                    </div>
                    <div className="col-lg-12 col-xl-6">
                      <div className="form-floating">
                        <input type="tel" className="form-control" id="phone" value={formData.phone} onChange={handleInputChange} placeholder="Phone" />
                        <label htmlFor="phone">Your Phone</label>
                      </div>
                    </div>
                    <div className="col-lg-12 col-xl-6">
                      <div className="form-floating">
                        <input type="text" className="form-control" id="project" value={formData.project} onChange={handleInputChange} placeholder="Project" />
                        <label htmlFor="project">Your Project</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input type="text" className="form-control" id="subject" value={formData.subject} onChange={handleInputChange} placeholder="Subject" />
                        <label htmlFor="subject">Subject</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea className="form-control" placeholder="Leave a message here" id="message" value={formData.message} onChange={handleInputChange} style={{ height: '160px' }} required></textarea>
                        <label htmlFor="message">Message</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-light w-100 py-3 font-weight-bold" type="submit" disabled={sending}>
                        {sending ? "Sending..." : "Send Message"}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Full Width Map */}
      <div className="col-12 wow fadeInUp" data-wow-delay="0.5s">
        <div className="rounded">
          <iframe
            className="rounded w-100"
            style={{ height: '400px' }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-73.97968099999999!3d40.6974881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1694259649153!5m2!1sen!2sbd"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
      </div>
    </>
  );
}