import React, { useEffect } from 'react'
import about2 from '../../img/about-2.png';

import Aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom';

export default function About() {
    useEffect(() => {
        Aos.init({
            duration: 1000
        })
    }, [])
    
    return (
        <>
            <div className="container-fluid bg-breadcrumb">
                <div className="container text-center py-5" style={{ maxWidth: '900px' }}>
                    <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">About Us</h4>
                    <ol className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
                        <li className="breadcrumb-item"><Link className='text-white' to="/">Home</Link></li>
                        <li className="breadcrumb-item"><Link className='text-white' to="">Pages</Link></li>
                        <li className="breadcrumb-item active text-white">About</li>
                    </ol>    
                </div>
            </div>

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
                                    We ensure premium quality in all our agricultural exports with 15+ international 
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
                                    Serving 25+ countries worldwide with reliable international shipping 
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
                                <p className="mb-0">
                                    To become a leading global supplier of premium quality herbs and spices, 
                                    fostering teamwork and collaboration.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-item-inner border p-4">
                                <div className="about-icon mb-4">
                                    <span className="fa fa-bullseye fa-3x text-secondary"></span>
                                </div>
                                <h5 className="mb-3">Our Mission</h5>
                                <p className="mb-0">
                                    Provide 100% genuine assistance with faster execution and expert advice 
                                    for global customers.
                                </p>
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
                                <p className="mb-2"><i className="fa fa-check-circle text-primary me-1"></i> 100+ Herbs & Spices Range</p>
                                <p className="mb-2"><i className="fa fa-check-circle text-primary me-1"></i> 25+ Countries Served</p>
                                <p className="mb-2"><i className="fa fa-check-circle text-primary me-1"></i> 15+ International Certificates</p>
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
                                    <p className="mb-0">50+ Dedicated Professionals</p>
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
{/* About End */}
{/* Fact Counter */}
<div className="container counter bg-secondary py-5">
    <div className="container py-5">
        <div className="row g-5">
            <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
                <div className="counter-item text-center">
                    <div className="counter-item-icon mx-auto">
                        <i className="fas fa-globe fa-2x"></i>
                    </div>
                    <div className="counter-counting my-3">
                        <span className="text-white fs-2 fw-bold" data-toggle="counter-up">25</span>
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
                        <span className="text-white fs-2 fw-bold" data-toggle="counter-up">50</span>
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
                        <span className="text-white fs-2 fw-bold" data-toggle="counter-up">15</span>
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
                        <span className="text-white fs-2 fw-bold" data-toggle="counter-up">100</span>
                        <span className="h1 fw-bold text-white">+</span>
                    </div>
                    <h4 className="text-white mb-0">Herbs & Spices</h4>
                </div>
            </div>
        </div>
    </div>
</div>
        </>
    )
}