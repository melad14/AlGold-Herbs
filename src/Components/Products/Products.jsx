import React, { useEffect } from 'react'
import prod1 from '../../img/dehydrated-garlic-flakes-supplier.jpg';
import prod2 from '../../img/DRIED-WHITE-ONION-FLAKES.jpg';
import prod3 from '../../img/91DyTnfFwtL.jpg';
import prod4 from '../../img/1-12-1.jpg';
import prod5 from '../../img/1-1.jpeg';
import prod6 from '../../img/71vlBrYw5kL.jpg';
import prod7 from '../../img/1-14.jpg';
import prod8 from '../../img/1-13.jpg';
import prod9 from '../../img/1-12-scaled.jpg';
import prod10 from '../../img/1.jpeg';
import prod11 from '../../img/dried-spinach-leaf-1663919429-6554279.jpg';
import prod12 from '../../img/1-11.jpg';
import prod13 from '../../img/dried-senna-leaves-500x500-1.webp';
import prod14 from '../../img/1-10.jpg';
import prod15 from '../../img/1-9.jpg';
import prod16 from '../../img/1-8.jpg';
import prod17 from '../../img/21297p__33295.1299860271.1280.1280.jpg';
import prod18 from '../../img/dried-moringa-lavender-by-the-bay_460x-300x300.jpg';
import prod19 from '../../img/lemon_balm_2019-02-04__92395.jpg';
import prod20 from '../../img/1-7.jpg';
import prod21 from '../../img/moroheiya1-scaled.jpg';
import prod22 from '../../img/1-6.jpg';
import prod23 from '../../img/1-5.jpg';
import prod24 from '../../img/1-4.jpg';
import prod25 from '../../img/Seeds-fenugreek.jpeg';
import prod26 from '../../img/2-4.jpg';
import prod27 from '../../img/2-3.jpg';
import prod28 from '../../img/2-2.jpg';
import prod29 from '../../img/1-3.jpg';
import prod30 from '../../img/2-1.jpg';
import prod31 from '../../img/2-300x300.png';
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom';

export default function Products() {
  useEffect(() => {
    Aos.init({
      duration: 1000
    })
  }, [])

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
        
            <div className="col-lg-6 col-xl-4" data-aos="fade-up" data-aos-delay="100">
                <div className="product-card">
                    <div className="product-image">
                        <img src={prod1} className="img-fluid w-100" alt="Dehydrated Garlic" />
                    </div>
                    <div className="product-content">
                        <div className="product-main-content">
                            <div className="product-category mb-2">
                                <span className="badge bg-primary-subtle text-primary">Dehydrated</span>
                            </div>
                            <h5 className="product-title mb-3">Dehydrated Garlic</h5>
                            <div className="product-basic-info">
                                <p className="mb-2"><strong>Scientific Name:</strong> Allium sativum</p>
                                <p className="mb-0"><strong>Status:</strong> <span className="badge bg-success ms-1">Organic</span></p>
                            </div>
                        </div>
                        <div className="product-details">
                            <div className="details-content">
                                <h6 className="text-white mb-3">Product Details</h6>
                                <div className="details-specs">
                                    <p className="mb-2"><strong>Available Forms:</strong></p>
                                    <ul className="list-unstyled mb-3">
                                        <li>• Whole</li>
                                        <li>• Powder</li>
                                    </ul>
                                    <p className="mb-2"><strong>Pesticides Status:</strong></p>
                                    <ul className="list-unstyled">
                                        <li>• Conventional</li>
                                        <li>• AS Reg. EC396/2005</li>
                                        <li>• Organic</li>
                                    </ul>
                                </div>
                                <Link to="/contact" className="btn btn-light rounded-pill w-100 mt-3">
                                    Contact Us for Pricing
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product 2 - Dehydrated Onion */}
            <div className="col-lg-6 col-xl-4" data-aos="fade-up" data-aos-delay="200">
                <div className="product-card">
                    <div className="product-image">
                        <img src={prod2} className="img-fluid w-100" alt="Dehydrated Onion" />
                    </div>
                    <div className="product-content">
                        <div className="product-main-content">
                            <div className="product-category mb-2">
                                <span className="badge bg-primary-subtle text-primary">Dehydrated</span>
                            </div>
                            <h5 className="product-title mb-3">Dehydrated Onion</h5>
                            <div className="product-basic-info">
                                <p className="mb-2"><strong>Scientific Name:</strong> Allium cepa</p>
                                <p className="mb-0"><strong>Status:</strong> <span className="badge bg-secondary ms-1">Conventional</span></p>
                            </div>
                        </div>
                        <div className="product-details">
                            <div className="details-content">
                                <h6 className="text-white mb-3">Product Details</h6>
                                <div className="details-specs">
                                    <p className="mb-2"><strong>Available Forms:</strong></p>
                                    <ul className="list-unstyled mb-3">
                                        <li>• Kibbled</li>
                                        <li>• Minced</li>
                                        <li>• Granules</li>
                                        <li>• Powder</li>
                                    </ul>
                                    <p className="mb-2"><strong>Pesticides Status:</strong></p>
                                    <ul className="list-unstyled">
                                        <li>• Conventional</li>
                                        <li>• AS Reg. EC396/2005</li>
                                        <li>• Organic</li>
                                    </ul>
                                </div>
                                <Link to="/contact" className="btn btn-light rounded-pill w-100 mt-3">
                                    Contact Us for Pricing
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product 3 - Liquorice Roots */}
            <div className="col-lg-6 col-xl-4" data-aos="fade-up" data-aos-delay="300">
                <div className="product-card">
                    <div className="product-image">
                        <img src={prod3} className="img-fluid w-100" alt="Liquorice Roots" />
                    </div>
                    <div className="product-content">
                        <div className="product-main-content">
                            <div className="product-category mb-2">
                                <span className="badge bg-primary-subtle text-primary">Roots</span>
                            </div>
                            <h5 className="product-title mb-3">Liquorice Roots</h5>
                            <div className="product-basic-info">
                                <p className="mb-2"><strong>Scientific Name:</strong> Glycerriza glabra</p>
                                <p className="mb-0"><strong>Status:</strong> <span className="badge bg-success ms-1">Organic</span></p>
                            </div>
                        </div>
                        <div className="product-details">
                            <div className="details-content">
                                <h6 className="text-white mb-3">Product Details</h6>
                                <div className="details-specs">
                                    <p className="mb-2"><strong>Available Forms:</strong></p>
                                    <ul className="list-unstyled mb-3">
                                        <li>• Whole</li>
                                        <li>• Cut</li>
                                        <li>• TBC</li>
                                    </ul>
                                    <p className="mb-2"><strong>Pesticides Status:</strong></p>
                                    <ul className="list-unstyled">
                                        <li>• Conventional</li>
                                        <li>• AS Reg. EC396/2005</li>
                                        <li>• Organic</li>
                                    </ul>
                                </div>
                                <Link to="/contact" className="btn btn-light rounded-pill w-100 mt-3">
                                    Contact Us for Pricing
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product 4 - Rosemary */}
            <div className="col-lg-6 col-xl-4" data-aos="fade-up" data-aos-delay="400">
                <div className="product-card">
                    <div className="product-image">
                        <img src={prod4} className="img-fluid w-100" alt="Rosemary" />
                    </div>
                    <div className="product-content">
                        <div className="product-main-content">
                            <div className="product-category mb-2">
                                <span className="badge bg-primary-subtle text-primary">Herbs</span>
                            </div>
                            <h5 className="product-title mb-3">Rosemary</h5>
                            <div className="product-basic-info">
                                <p className="mb-2"><strong>Scientific Name:</strong> Rosmarinus officinalis</p>
                                <p className="mb-0"><strong>Status:</strong> <span className="badge bg-success ms-1">Organic</span></p>
                            </div>
                        </div>
                        <div className="product-details">
                            <div className="details-content">
                                <h6 className="text-white mb-3">Product Details</h6>
                                <div className="details-specs">
                                    <p className="mb-2"><strong>Available Forms:</strong></p>
                                    <ul className="list-unstyled mb-3">
                                        <li>• Cut (different sizes)</li>
                                        <li>• Ground</li>
                                    </ul>
                                    <p className="mb-2"><strong>Pesticides Status:</strong></p>
                                    <ul className="list-unstyled">
                                        <li>• Conventional</li>
                                        <li>• AS Reg. EC396/2005</li>
                                        <li>• Organic</li>
                                    </ul>
                                </div>
                                <Link to="/contact" className="btn btn-light rounded-pill w-100 mt-3">
                                    Contact Us for Pricing
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product 5 - Lemon Grass */}
            <div className="col-lg-6 col-xl-4" data-aos="fade-up" data-aos-delay="500">
                <div className="product-card">
                    <div className="product-image">
                        <img src={prod5} className="img-fluid w-100" alt="Lemon Grass" />
                    </div>
                    <div className="product-content">
                        <div className="product-main-content">
                            <div className="product-category mb-2">
                                <span className="badge bg-primary-subtle text-primary">Herbs</span>
                            </div>
                            <h5 className="product-title mb-3">Lemon Grass</h5>
                            <div className="product-basic-info">
                                <p className="mb-2"><strong>Scientific Name:</strong> Cymbopogon citratus</p>
                                <p className="mb-0"><strong>Status:</strong> <span className="badge bg-success ms-1">Organic</span></p>
                            </div>
                        </div>
                        <div className="product-details">
                            <div className="details-content">
                                <h6 className="text-white mb-3">Product Details</h6>
                                <div className="details-specs">
                                    <p className="mb-2"><strong>Available Forms:</strong></p>
                                    <ul className="list-unstyled mb-3">
                                        <li>• Cut (different sizes)</li>
                                        <li>• TBC</li>
                                        <li>• Powder</li>
                                    </ul>
                                    <p className="mb-2"><strong>Pesticides Status:</strong></p>
                                    <ul className="list-unstyled">
                                        <li>• Conventional</li>
                                        <li>• AS Reg. EC396/2005</li>
                                        <li>• Organic</li>
                                    </ul>
                                </div>
                                <Link to="/contact" className="btn btn-light rounded-pill w-100 mt-3">
                                    Contact Us for Pricing
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product 6 - Verbascum */}
            <div className="col-lg-6 col-xl-4" data-aos="fade-up" data-aos-delay="600">
                <div className="product-card">
                    <div className="product-image">
                        <img src={prod6} className="img-fluid w-100" alt="Verbascum (Mullein)" />
                    </div>
                    <div className="product-content">
                        <div className="product-main-content">
                            <div className="product-category mb-2">
                                <span className="badge bg-primary-subtle text-primary">Flowers</span>
                            </div>
                            <h5 className="product-title mb-3">Verbascum (Mullein)</h5>
                            <div className="product-basic-info">
                                <p className="mb-2"><strong>Scientific Name:</strong> Verbascum thapsus</p>
                                <p className="mb-0"><strong>Status:</strong> <span className="badge bg-secondary ms-1">Conventional</span></p>
                            </div>
                        </div>
                        <div className="product-details">
                            <div className="details-content">
                                <h6 className="text-white mb-3">Product Details</h6>
                                <div className="details-specs">
                                    <p className="mb-2"><strong>Available Forms:</strong></p>
                                    <ul className="list-unstyled mb-3">
                                        <li>• Flowers</li>
                                    </ul>
                                    <p className="mb-2"><strong>Pesticides Status:</strong></p>
                                    <ul className="list-unstyled">
                                        <li>• Conventional (Out of Stock)</li>
                                    </ul>
                                </div>
                                <Link to="/contact" className="btn btn-light rounded-pill w-100 mt-3">
                                    Contact Us for Pricing
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product 7 - Hibiscus */}
            <div className="col-lg-6 col-xl-4" data-aos="fade-up" data-aos-delay="100">
                <div className="product-card">
                    <div className="product-image">
                        <img src={prod7} className="img-fluid w-100" alt="Hibiscus subdarifa" />
                    </div>
                    <div className="product-content">
                        <div className="product-main-content">
                            <div className="product-category mb-2">
                                <span className="badge bg-primary-subtle text-primary">Flowers</span>
                            </div>
                            <h5 className="product-title mb-3">Hibiscus subdarifa</h5>
                            <div className="product-basic-info">
                                <p className="mb-2"><strong>Scientific Name:</strong> Hibiscus subdarifa</p>
                                <p className="mb-0"><strong>Status:</strong> <span className="badge bg-success ms-1">Organic</span></p>
                            </div>
                        </div>
                        <div className="product-details">
                            <div className="details-content">
                                <h6 className="text-white mb-3">Product Details</h6>
                                <div className="details-specs">
                                    <p className="mb-2"><strong>Available Forms:</strong></p>
                                    <ul className="list-unstyled mb-3">
                                        <li>• Flowers</li>
                                        <li>• TBC</li>
                                        <li>• Fines</li>
                                        <li>• Siftings (different sizes)</li>
                                    </ul>
                                    <p className="mb-2"><strong>Pesticides Status:</strong></p>
                                    <ul className="list-unstyled">
                                        <li>• Conventional</li>
                                        <li>• AS Reg. EC396/2005</li>
                                        <li>• Organic</li>
                                    </ul>
                                </div>
                                <Link to="/contact" className="btn btn-light rounded-pill w-100 mt-3">
                                    Contact Us for Pricing
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product 8 - Calendula */}
            <div className="col-lg-6 col-xl-4" data-aos="fade-up" data-aos-delay="200">
                <div className="product-card">
                    <div className="product-image">
                        <img src={prod8} className="img-fluid w-100" alt="Calendula (Marigold)" />
                    </div>
                    <div className="product-content">
                        <div className="product-main-content">
                            <div className="product-category mb-2">
                                <span className="badge bg-primary-subtle text-primary">Flowers</span>
                            </div>
                            <h5 className="product-title mb-3">Calendula (Marigold)</h5>
                            <div className="product-basic-info">
                                <p className="mb-2"><strong>Scientific Name:</strong> Calendula officinalis</p>
                                <p className="mb-0"><strong>Status:</strong> <span className="badge bg-secondary ms-1">Conventional</span></p>
                            </div>
                        </div>
                        <div className="product-details">
                            <div className="details-content">
                                <h6 className="text-white mb-3">Product Details</h6>
                                <div className="details-specs">
                                    <p className="mb-2"><strong>Available Forms:</strong></p>
                                    <ul className="list-unstyled mb-3">
                                        <li>• Flowers</li>
                                        <li>• Petals</li>
                                        <li>• TBC</li>
                                        <li>• Powder</li>
                                    </ul>
                                    <p className="mb-2"><strong>Pesticides Status:</strong></p>
                                    <ul className="list-unstyled">
                                        <li>• Conventional</li>
                                        <li>• AS Reg. EC396/2005</li>
                                        <li>• Organic (Out of Stock)</li>
                                    </ul>
                                </div>
                                <Link to="/contact" className="btn btn-light rounded-pill w-100 mt-3">
                                    Contact Us for Pricing
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product 9 - Chamomile */}
            <div className="col-lg-6 col-xl-4" data-aos="fade-up" data-aos-delay="300">
                <div className="product-card">
                    <div className="product-image">
                        <img src={prod9} className="img-fluid w-100" alt="Chamomila matricaria" />
                    </div>
                    <div className="product-content">
                        <div className="product-main-content">
                            <div className="product-category mb-2">
                                <span className="badge bg-primary-subtle text-primary">Flowers</span>
                            </div>
                            <h5 className="product-title mb-3">Chamomila matricaria</h5>
                            <div className="product-basic-info">
                                <p className="mb-2"><strong>Scientific Name:</strong> Chamomila matricaria</p>
                                <p className="mb-0"><strong>Status:</strong> <span className="badge bg-secondary ms-1">Conventional</span></p>
                            </div>
                        </div>
                        <div className="product-details">
                            <div className="details-content">
                                <h6 className="text-white mb-3">Product Details</h6>
                                <div className="details-specs">
                                    <p className="mb-2"><strong>Available Forms:</strong></p>
                                    <ul className="list-unstyled mb-3">
                                        <li>• Flowers</li>
                                        <li>• Whole</li>
                                        <li>• Pollen</li>
                                        <li>• TBC</li>
                                        <li>• Stems</li>
                                        <li>• Petals</li>
                                        <li>• Industrial</li>
                                    </ul>
                                    <p className="mb-2"><strong>Pesticides Status:</strong></p>
                                    <ul className="list-unstyled">
                                        <li>• Conventional</li>
                                        <li>• AS Reg. EC396/2005</li>
                                        <li>• Organic (Out of Stock)</li>
                                    </ul>
                                </div>
                                <Link to="/contact" className="btn btn-light rounded-pill w-100 mt-3">
                                    Contact Us for Pricing
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product 10 - Thyme */}
            <div className="col-lg-6 col-xl-4" data-aos="fade-up" data-aos-delay="400">
                <div className="product-card">
                    <div className="product-image">
                        <img src={prod10} className="img-fluid w-100" alt="Thymus vulgare" />
                    </div>
                    <div className="product-content">
                        <div className="product-main-content">
                            <div className="product-category mb-2">
                                <span className="badge bg-primary-subtle text-primary">Herbs</span>
                            </div>
                            <h5 className="product-title mb-3">Thymus vulgare</h5>
                            <div className="product-basic-info">
                                <p className="mb-2"><strong>Scientific Name:</strong> Thymus vulgare</p>
                                <p className="mb-0"><strong>Status:</strong> <span className="badge bg-secondary ms-1">Conventional</span></p>
                            </div>
                        </div>
                        <div className="product-details">
                            <div className="details-content">
                                <h6 className="text-white mb-3">Product Details</h6>
                                <div className="details-specs">
                                    <p className="mb-2"><strong>Available Forms:</strong></p>
                                    <ul className="list-unstyled mb-3">
                                        <li>• Rubbed</li>
                                        <li>• Fines</li>
                                        <li>• Ground</li>
                                    </ul>
                                    <p className="mb-2"><strong>Pesticides Status:</strong></p>
                                    <ul className="list-unstyled">
                                        <li>• Conventional</li>
                                        <li>• AS Reg. EC396/2005</li>
                                        <li>• Organic (Out of Stock)</li>
                                    </ul>
                                </div>
                                <Link to="/contact" className="btn btn-light rounded-pill w-100 mt-3">
                                    Contact Us for Pricing
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product 11 - Spinach */}
            <div className="col-lg-6 col-xl-4" data-aos="fade-up" data-aos-delay="500">
                <div className="product-card">
                    <div className="product-image">
                        <img src={prod11} className="img-fluid w-100" alt="Spinacia oleracea" />
                    </div>
                    <div className="product-content">
                        <div className="product-main-content">
                            <div className="product-category mb-2">
                                <span className="badge bg-primary-subtle text-primary">Vegetables</span>
                            </div>
                            <h5 className="product-title mb-3">Spinacia oleracea</h5>
                            <div className="product-basic-info">
                                <p className="mb-2"><strong>Scientific Name:</strong> Spinacia oleracea</p>
                                <p className="mb-0"><strong>Status:</strong> <span className="badge bg-warning ms-1">Out of Stock</span></p>
                            </div>
                        </div>
                        <div className="product-details">
                            <div className="details-content">
                                <h6 className="text-white mb-3">Product Details</h6>
                                <div className="details-specs">
                                    <p className="mb-2"><strong>Available Forms:</strong></p>
                                    <ul className="list-unstyled mb-3">
                                        <li>• Large cut</li>
                                        <li>• Normal Cut</li>
                                        <li>• Fines</li>
                                        <li>• Ground</li>
                                    </ul>
                                    <p className="mb-2"><strong>Pesticides Status:</strong></p>
                                    <ul className="list-unstyled">
                                        <li>• Conventional (Out of Stock)</li>
                                        <li>• AS Reg. EC396/2005 (Out of Stock)</li>
                                        <li>• Organic (Out of Stock)</li>
                                    </ul>
                                </div>
                                <Link to="/contact" className="btn btn-light rounded-pill w-100 mt-3">
                                    Contact Us for Pricing
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product 12 - Spearmint */}
            <div className="col-lg-6 col-xl-4" data-aos="fade-up" data-aos-delay="600">
                <div className="product-card">
                    <div className="product-image">
                        <img src={prod12} className="img-fluid w-100" alt="Spearmint" />
                    </div>
                    <div className="product-content">
                        <div className="product-main-content">
                            <div className="product-category mb-2">
                                <span className="badge bg-primary-subtle text-primary">Herbs</span>
                            </div>
                            <h5 className="product-title mb-3">Spearmint</h5>
                            <div className="product-basic-info">
                                <p className="mb-2"><strong>Scientific Name:</strong> Mentha spicata</p>
                                <p className="mb-0"><strong>Status:</strong> <span className="badge bg-success ms-1">Organic</span></p>
                            </div>
                        </div>
                        <div className="product-details">
                            <div className="details-content">
                                <h6 className="text-white mb-3">Product Details</h6>
                                <div className="details-specs">
                                    <p className="mb-2"><strong>Available Forms:</strong></p>
                                    <ul className="list-unstyled mb-3">
                                        <li>• Large cut</li>
                                        <li>• Normal Cut</li>
                                        <li>• Fines</li>
                                        <li>• Ground</li>
                                    </ul>
                                    <p className="mb-2"><strong>Pesticides Status:</strong></p>
                                    <ul className="list-unstyled">
                                        <li>• Conventional</li>
                                        <li>• AS Reg. EC396/2005</li>
                                        <li>• Organic</li>
                                    </ul>
                                </div>
                                <Link to="/contact" className="btn btn-light rounded-pill w-100 mt-3">
                                    Contact Us for Pricing
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product 13 - Senna */}
            <div className="col-lg-6 col-xl-4" data-aos="fade-up" data-aos-delay="100">
                <div className="product-card">
                    <div className="product-image">
                        <img src={prod13} className="img-fluid w-100" alt="Senna" />
                    </div>
                    <div className="product-content">
                        <div className="product-main-content">
                            <div className="product-category mb-2">
                                <span className="badge bg-primary-subtle text-primary">Leaves</span>
                            </div>
                            <h5 className="product-title mb-3">Senna</h5>
                            <div className="product-basic-info">
                                <p className="mb-2"><strong>Scientific Name:</strong> Senna alexandrina</p>
                                <p className="mb-0"><strong>Status:</strong> <span className="badge bg-secondary ms-1">Conventional</span></p>
                            </div>
                        </div>
                        <div className="product-details">
                            <div className="details-content">
                                <h6 className="text-white mb-3">Product Details</h6>
                                <div className="details-specs">
                                    <p className="mb-2"><strong>Available Forms:</strong></p>
                                    <ul className="list-unstyled mb-3">
                                        <li>• Whole leaves</li>
                                        <li>• Crushed</li>
                                    </ul>
                                    <p className="mb-2"><strong>Pesticides Status:</strong></p>
                                    <ul className="list-unstyled">
                                        <li>• Conventional</li>
                                        <li>• AS Reg. EC396/2005</li>
                                    </ul>
                                </div>
                                <Link to="/contact" className="btn btn-light rounded-pill w-100 mt-3">
                                    Contact Us for Pricing
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product 14 - Sage */}
            <div className="col-lg-6 col-xl-4" data-aos="fade-up" data-aos-delay="200">
                <div className="product-card">
                    <div className="product-image">
                        <img src={prod14} className="img-fluid w-100" alt="Sage" />
                    </div>
                    <div className="product-content">
                        <div className="product-main-content">
                            <div className="product-category mb-2">
                                <span className="badge bg-primary-subtle text-primary">Herbs</span>
                            </div>
                            <h5 className="product-title mb-3">Sage</h5>
                            <div className="product-basic-info">
                                <p className="mb-2"><strong>Scientific Name:</strong> Salvia officinalis</p>
                                <p className="mb-0"><strong>Status:</strong> <span className="badge bg-secondary ms-1">Conventional</span></p>
                            </div>
                        </div>
                        <div className="product-details">
                            <div className="details-content">
                                <h6 className="text-white mb-3">Product Details</h6>
                                <div className="details-specs">
                                    <p className="mb-2"><strong>Available Forms:</strong></p>
                                    <ul className="list-unstyled mb-3">
                                        <li>• Whole</li>
                                        <li>• Cut</li>
                                        <li>• Rubbed</li>
                                    </ul>
                                    <p className="mb-2"><strong>Pesticides Status:</strong></p>
                                    <ul className="list-unstyled">
                                        <li>• Conventional</li>
                                        <li>• AS Reg. EC396/2005</li>
                                        <li>• Organic (Out of Stock)</li>
                                    </ul>
                                </div>
                                <Link to="/contact" className="btn btn-light rounded-pill w-100 mt-3">
                                    Contact Us for Pricing
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product 15 - Peppermint */}
            <div className="col-lg-6 col-xl-4" data-aos="fade-up" data-aos-delay="300">
                <div className="product-card">
                    <div className="product-image">
                        <img src={prod15} className="img-fluid w-100" alt="Peppermint" />
                    </div>
                    <div className="product-content">
                        <div className="product-main-content">
                            <div className="product-category mb-2">
                                <span className="badge bg-primary-subtle text-primary">Herbs</span>
                            </div>
                            <h5 className="product-title mb-3">Peppermint</h5>
                            <div className="product-basic-info">
                                <p className="mb-2"><strong>Scientific Name:</strong> Mentha piperita</p>
                                <p className="mb-0"><strong>Status:</strong> <span className="badge bg-success ms-1">Organic</span></p>
                            </div>
                        </div>
                        <div className="product-details">
                            <div className="details-content">
                                <h6 className="text-white mb-3">Product Details</h6>
                                <div className="details-specs">
                                    <p className="mb-2"><strong>Available Forms:</strong></p>
                                    <ul className="list-unstyled mb-3">
                                        <li>• Large cut</li>
                                        <li>• Normal Cut</li>
                                        <li>• Fines</li>
                                        <li>• Ground</li>
                                    </ul>
                                    <p className="mb-2"><strong>Pesticides Status:</strong></p>
                                    <ul className="list-unstyled">
                                        <li>• Conventional</li>
                                        <li>• AS Reg. EC396/2005</li>
                                        <li>• Organic</li>
                                    </ul>
                                </div>
                                <Link to="/contact" className="btn btn-light rounded-pill w-100 mt-3">
                                    Contact Us for Pricing
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product 16 - Parsley */}
            <div className="col-lg-6 col-xl-4" data-aos="fade-up" data-aos-delay="400">
                <div className="product-card">
                    <div className="product-image">
                        <img src={prod16} className="img-fluid w-100" alt="Parsley" />
                    </div>
                    <div className="product-content">
                        <div className="product-main-content">
                            <div className="product-category mb-2">
                                <span className="badge bg-primary-subtle text-primary">Herbs</span>
                            </div>
                            <h5 className="product-title mb-3">Parsley (Flat & Curly)</h5>
                            <div className="product-basic-info">
                                <p className="mb-2"><strong>Scientific Name:</strong> Petroselinum crispum</p>
                                <p className="mb-0"><strong>Status:</strong> <span className="badge bg-secondary ms-1">Conventional</span></p>
                            </div>
                        </div>
                        <div className="product-details">
                            <div className="details-content">
                                <h6 className="text-white mb-3">Product Details</h6>
                                <div className="details-specs">
                                    <p className="mb-2"><strong>Available Forms:</strong></p>
                                    <ul className="list-unstyled mb-3">
                                        <li>• Large cut</li>
                                        <li>• Normal Cut</li>
                                        <li>• Fines</li>
                                        <li>• Ground</li>
                                    </ul>
                                    <p className="mb-2"><strong>Pesticides Status:</strong></p>
                                    <ul className="list-unstyled">
                                        <li>• Conventional Sun Dried</li>
                                        <li>• AS Reg. EC396/2005 Sun Dried (Out of Stock)</li>
                                        <li>• Conventional Machine Dried (Out of Stock)</li>
                                        <li>• AS Reg. EC396/2005 Machine Dried (Out of Stock)</li>
                                    </ul>
                                </div>
                                <Link to="/contact" className="btn btn-light rounded-pill w-100 mt-3">
                                    Contact Us for Pricing
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product 17 - Oregano */}
            <div className="col-lg-6 col-xl-4" data-aos="fade-up" data-aos-delay="500">
                <div className="product-card">
                    <div className="product-image">
                        <img src={prod17} className="img-fluid w-100" alt="Oregano" />
                    </div>
                    <div className="product-content">
                        <div className="product-main-content">
                            <div className="product-category mb-2">
                                <span className="badge bg-primary-subtle text-primary">Herbs</span>
                            </div>
                            <h5 className="product-title mb-3">Oregano</h5>
                            <div className="product-basic-info">
                                <p className="mb-2"><strong>Scientific Name:</strong> Origanum vulgaris</p>
                                <p className="mb-0"><strong>Status:</strong> <span className="badge bg-secondary ms-1">Conventional</span></p>
                            </div>
                        </div>
                        <div className="product-details">
                            <div className="details-content">
                                <h6 className="text-white mb-3">Product Details</h6>
                                <div className="details-specs">
                                    <p className="mb-2"><strong>Available Forms:</strong></p>
                                    <ul className="list-unstyled mb-3">
                                        <li>• Large cut</li>
                                        <li>• Normal Cut</li>
                                        <li>• Fines</li>
                                        <li>• Ground</li>
                                    </ul>
                                    <p className="mb-2"><strong>Pesticides Status:</strong></p>
                                    <ul className="list-unstyled">
                                        <li>• Conventional</li>
                                        <li>• AS Reg. EC396/2005</li>
                                    </ul>
                                </div>
                                <Link to="/contact" className="btn btn-light rounded-pill w-100 mt-3">
                                    Contact Us for Pricing
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product 18 - Moringa */}
            <div className="col-lg-6 col-xl-4" data-aos="fade-up" data-aos-delay="600">
                <div className="product-card">
                    <div className="product-image">
                        <img src={prod18} className="img-fluid w-100" alt="Moringa oleifera" />
                    </div>
                    <div className="product-content">
                        <div className="product-main-content">
                            <div className="product-category mb-2">
                                <span className="badge bg-primary-subtle text-primary">Leaves</span>
                            </div>
                            <h5 className="product-title mb-3">Moringa oleifera</h5>
                            <div className="product-basic-info">
                                <p className="mb-2"><strong>Scientific Name:</strong> Moringa oleifera</p>
                                <p className="mb-0"><strong>Status:</strong> <span className="badge bg-secondary ms-1">Conventional</span></p>
                            </div>
                        </div>
                        <div className="product-details">
                            <div className="details-content">
                                <h6 className="text-white mb-3">Product Details</h6>
                                <div className="details-specs">
                                    <p className="mb-2"><strong>Available Forms:</strong></p>
                                    <ul className="list-unstyled mb-3">
                                        <li>• Large cut</li>
                                        <li>• Normal Cut</li>
                                        <li>• Fines</li>
                                        <li>• Ground</li>
                                    </ul>
                                    <p className="mb-2"><strong>Pesticides Status:</strong></p>
                                    <ul className="list-unstyled">
                                        <li>• Conventional</li>
                                        <li>• AS Reg. EC396/2005</li>
                                    </ul>
                                </div>
                                <Link to="/contact" className="btn btn-light rounded-pill w-100 mt-3">
                                    Contact Us for Pricing
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product 19 - Melissa */}
            <div className="col-lg-6 col-xl-4" data-aos="fade-up" data-aos-delay="100">
                <div className="product-card">
                    <div className="product-image">
                        <img src={prod19} className="img-fluid w-100" alt="Melissa officinalis" />
                    </div>
                    <div className="product-content">
                        <div className="product-main-content">
                            <div className="product-category mb-2">
                                <span className="badge bg-primary-subtle text-primary">Herbs</span>
                            </div>
                            <h5 className="product-title mb-3">Melissa officinalis</h5>
                            <div className="product-basic-info">
                                <p className="mb-2"><strong>Scientific Name:</strong> Melissa officinalis</p>
                                <p className="mb-0"><strong>Status:</strong> <span className="badge bg-secondary ms-1">Conventional</span></p>
                            </div>
                        </div>
                        <div className="product-details">
                            <div className="details-content">
                                <h6 className="text-white mb-3">Product Details</h6>
                                <div className="details-specs">
                                    <p className="mb-2"><strong>Available Forms:</strong></p>
                                    <ul className="list-unstyled mb-3">
                                        <li>• Large cut</li>
                                        <li>• Normal Cut</li>
                                        <li>• Fines</li>
                                        <li>• Ground</li>
                                    </ul>
                                    <p className="mb-2"><strong>Pesticides Status:</strong></p>
                                    <ul className="list-unstyled">
                                        <li>• Conventional</li>
                                        <li>• AS Reg. EC396/2005</li>
                                    </ul>
                                </div>
                                <Link to="/contact" className="btn btn-light rounded-pill w-100 mt-3">
                                    Contact Us for Pricing
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product 20 - Marjoram */}
            <div className="col-lg-6 col-xl-4" data-aos="fade-up" data-aos-delay="200">
                <div className="product-card">
                    <div className="product-image">
                        <img src={prod20} className="img-fluid w-100" alt="Origanum majorana" />
                    </div>
                    <div className="product-content">
                        <div className="product-main-content">
                            <div className="product-category mb-2">
                                <span className="badge bg-primary-subtle text-primary">Herbs</span>
                            </div>
                            <h5 className="product-title mb-3">Origanum majorana</h5>
                            <div className="product-basic-info">
                                <p className="mb-2"><strong>Scientific Name:</strong> Origanum majorana</p>
                                <p className="mb-0"><strong>Status:</strong> <span className="badge bg-secondary ms-1">Conventional</span></p>
                            </div>
                        </div>
                        <div className="product-details">
                            <div className="details-content">
                                <h6 className="text-white mb-3">Product Details</h6>
                                <div className="details-specs">
                                    <p className="mb-2"><strong>Available Forms:</strong></p>
                                    <ul className="list-unstyled mb-3">
                                        <li>• Large cut</li>
                                        <li>• Normal Cut</li>
                                        <li>• Fines</li>
                                    </ul>
                                    <p className="mb-2"><strong>Pesticides Status:</strong></p>
                                    <ul className="list-unstyled">
                                        <li>• Conventional</li>
                                        <li>• AS Reg. EC396/2005</li>
                                    </ul>
                                </div>
                                <Link to="/contact" className="btn btn-light rounded-pill w-100 mt-3">
                                    Contact Us for Pricing
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product 21 - Jew's Mallow */}
            <div className="col-lg-6 col-xl-4" data-aos="fade-up" data-aos-delay="300">
                <div className="product-card">
                    <div className="product-image">
                        <img src={prod21} className="img-fluid w-100" alt="Jew's Mallow" />
                    </div>
                    <div className="product-content">
                        <div className="product-main-content">
                            <div className="product-category mb-2">
                                <span className="badge bg-primary-subtle text-primary">Leaves</span>
                            </div>
                            <h5 className="product-title mb-3">Jew's Mallow (Molokhia)</h5>
                            <div className="product-basic-info">
                                <p className="mb-2"><strong>Scientific Name:</strong> Corchorus olitorious</p>
                                <p className="mb-0"><strong>Status:</strong> <span className="badge bg-secondary ms-1">Conventional</span></p>
                            </div>
                        </div>
                        <div className="product-details">
                            <div className="details-content">
                                <h6 className="text-white mb-3">Product Details</h6>
                                <div className="details-specs">
                                    <p className="mb-2"><strong>Available Forms:</strong></p>
                                    <ul className="list-unstyled mb-3">
                                        <li>• Whole leaves</li>
                                        <li>• Crushed</li>
                                        <li>• Fines</li>
                                        <li>• Ground</li>
                                    </ul>
                                    <p className="mb-2"><strong>Pesticides Status:</strong></p>
                                    <ul className="list-unstyled">
                                        <li>• Conventional</li>
                                        <li>• AS Reg. EC396/2005</li>
                                    </ul>
                                </div>
                                <Link to="/contact" className="btn btn-light rounded-pill w-100 mt-3">
                                    Contact Us for Pricing
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product 22 - Dill */}
            <div className="col-lg-6 col-xl-4" data-aos="fade-up" data-aos-delay="400">
                <div className="product-card">
                    <div className="product-image">
                        <img src={prod22} className="img-fluid w-100" alt="Dill" />
                    </div>
                    <div className="product-content">
                        <div className="product-main-content">
                            <div className="product-category mb-2">
                                <span className="badge bg-primary-subtle text-primary">Herbs</span>
                            </div>
                            <h5 className="product-title mb-3">Dill</h5>
                            <div className="product-basic-info">
                                <p className="mb-2"><strong>Scientific Name:</strong> Anethum graveolens</p>
                                <p className="mb-0"><strong>Status:</strong> <span className="badge bg-warning ms-1">Out of Stock</span></p>
                            </div>
                        </div>
                        <div className="product-details">
                            <div className="details-content">
                                <h6 className="text-white mb-3">Product Details</h6>
                                <div className="details-specs">
                                    <p className="mb-2"><strong>Available Forms:</strong></p>
                                    <ul className="list-unstyled mb-3">
                                        <li>• Tips</li>
                                        <li>• Fines</li>
                                    </ul>
                                    <p className="mb-2"><strong>Pesticides Status:</strong></p>
                                    <ul className="list-unstyled">
                                        <li>• Conventional Sun Dried (Out of Stock)</li>
                                        <li>• AS Reg. EC396/2005 Sun Dried (Out of Stock)</li>
                                        <li>• Conventional Machine Dried (Out of Stock)</li>
                                        <li>• AS Reg. EC396/2005 Machine Dried (Out of Stock)</li>
                                    </ul>
                                </div>
                                <Link to="/contact" className="btn btn-light rounded-pill w-100 mt-3">
                                    Contact Us for Pricing
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product 23 - Cilantro */}
            <div className="col-lg-6 col-xl-4" data-aos="fade-up" data-aos-delay="500">
                <div className="product-card">
                    <div className="product-image">
                        <img src={prod23} className="img-fluid w-100" alt="Cilantro" />
                    </div>
                    <div className="product-content">
                        <div className="product-main-content">
                            <div className="product-category mb-2">
                                <span className="badge bg-primary-subtle text-primary">Herbs</span>
                            </div>
                            <h5 className="product-title mb-3">Cilantro</h5>
                            <div className="product-basic-info">
                                <p className="mb-2"><strong>Scientific Name:</strong> Coriandrum sativum</p>
                                <p className="mb-0"><strong>Status:</strong> <span className="badge bg-warning ms-1">Out of Stock</span></p>
                            </div>
                        </div>
                        <div className="product-details">
                            <div className="details-content">
                                <h6 className="text-white mb-3">Product Details</h6>
                                <div className="details-specs">
                                    <p className="mb-2"><strong>Available Forms:</strong></p>
                                    <ul className="list-unstyled mb-3">
                                        <li>• Large cut</li>
                                        <li>• Normal Cut</li>
                                        <li>• Fines</li>
                                        <li>• Ground</li>
                                    </ul>
                                    <p className="mb-2"><strong>Pesticides Status:</strong></p>
                                    <ul className="list-unstyled">
                                        <li>• Conventional Sun Dried (Out of Stock)</li>
                                        <li>• AS Reg. EC396/2005 Sun Dried (Out of Stock)</li>
                                        <li>• Conventional Machine Dried (Out of Stock)</li>
                                        <li>• AS Reg. EC396/2005 Machine Dried (Out of Stock)</li>
                                    </ul>
                                </div>
                                <Link to="/contact" className="btn btn-light rounded-pill w-100 mt-3">
                                    Contact Us for Pricing
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product 24 - Basil */}
            <div className="col-lg-6 col-xl-4" data-aos="fade-up" data-aos-delay="600">
                <div className="product-card">
                    <div className="product-image">
                        <img src={prod24} className="img-fluid w-100" alt="Basil" />
                    </div>
                    <div className="product-content">
                        <div className="product-main-content">
                            <div className="product-category mb-2">
                                <span className="badge bg-primary-subtle text-primary">Herbs</span>
                            </div>
                            <h5 className="product-title mb-3">Basil</h5>
                            <div className="product-basic-info">
                                <p className="mb-2"><strong>Scientific Name:</strong> Ocimum basilicum</p>
                                <p className="mb-0"><strong>Status:</strong> <span className="badge bg-success ms-1">Organic</span></p>
                            </div>
                        </div>
                        <div className="product-details">
                            <div className="details-content">
                                <h6 className="text-white mb-3">Product Details</h6>
                                <div className="details-specs">
                                    <p className="mb-2"><strong>Available Forms:</strong></p>
                                    <ul className="list-unstyled mb-3">
                                        <li>• Large cut</li>
                                        <li>• Normal Cut</li>
                                        <li>• Fines</li>
                                        <li>• Ground</li>
                                    </ul>
                                    <p className="mb-2"><strong>Pesticides Status:</strong></p>
                                    <ul className="list-unstyled">
                                        <li>• Conventional</li>
                                        <li>• AS Reg. EC396/2005</li>
                                        <li>• Organic</li>
                                    </ul>
                                </div>
                                <Link to="/contact" className="btn btn-light rounded-pill w-100 mt-3">
                                    Contact Us for Pricing
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product 25 - Fenugreek */}
            <div className="col-lg-6 col-xl-4" data-aos="fade-up" data-aos-delay="100">
                <div className="product-card">
                    <div className="product-image">
                        <img src={prod25} className="img-fluid w-100" alt="Fenugreek" />
                    </div>
                    <div className="product-content">
                        <div className="product-main-content">
                            <div className="product-category mb-2">
                                <span className="badge bg-primary-subtle text-primary">Seeds</span>
                            </div>
                            <h5 className="product-title mb-3">Fenugreek</h5>
                            <div className="product-basic-info">
                                <p className="mb-2"><strong>Scientific Name:</strong> Trigonella foenum-graecum</p>
                                <p className="mb-0"><strong>Status:</strong> <span className="badge bg-success ms-1">Organic</span></p>
                            </div>
                        </div>
                        <div className="product-details">
                            <div className="details-content">
                                <h6 className="text-white mb-3">Product Details</h6>
                                <div className="details-specs">
                                    <p className="mb-2"><strong>Available Forms:</strong></p>
                                    <ul className="list-unstyled mb-3">
                                        <li>• Colour sorted</li>
                                        <li>• ASTA Quality</li>
                                        <li>• Ground</li>
                                    </ul>
                                    <p className="mb-2"><strong>Pesticides Status:</strong></p>
                                    <ul className="list-unstyled">
                                        <li>• Conventional</li>
                                        <li>• AS Reg. EC396/2005</li>
                                        <li>• Organic</li>
                                    </ul>
                                </div>
                                <Link to="/contact" className="btn btn-light rounded-pill w-100 mt-3">
                                    Contact Us for Pricing
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product 26 - Fennel */}
            <div className="col-lg-6 col-xl-4" data-aos="fade-up" data-aos-delay="200">
                <div className="product-card">
                    <div className="product-image">
                        <img src={prod26} className="img-fluid w-100" alt="Fennel" />
                    </div>
                    <div className="product-content">
                        <div className="product-main-content">
                            <div className="product-category mb-2">
                                <span className="badge bg-primary-subtle text-primary">Seeds</span>
                            </div>
                            <h5 className="product-title mb-3">Fennel</h5>
                            <div className="product-basic-info">
                                <p className="mb-2"><strong>Scientific Name:</strong> Foeniculum vulgare</p>
                                <p className="mb-0"><strong>Status:</strong> <span className="badge bg-success ms-1">Organic</span></p>
                            </div>
                        </div>
                        <div className="product-details">
                            <div className="details-content">
                                <h6 className="text-white mb-3">Product Details</h6>
                                <div className="details-specs">
                                    <p className="mb-2"><strong>Available Forms:</strong></p>
                                    <ul className="list-unstyled mb-3">
                                        <li>• Colour sorted</li>
                                        <li>• ASTA Quality</li>
                                        <li>• Cracked</li>
                                        <li>• Ground</li>
                                    </ul>
                                    <p className="mb-2"><strong>Pesticides Status:</strong></p>
                                    <ul className="list-unstyled">
                                        <li>• Conventional</li>
                                        <li>• AS Reg. EC396/2005</li>
                                        <li>• Organic</li>
                                    </ul>
                                </div>
                                <Link to="/contact" className="btn btn-light rounded-pill w-100 mt-3">
                                    Contact Us for Pricing
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product 27 - Cumin */}
            <div className="col-lg-6 col-xl-4" data-aos="fade-up" data-aos-delay="300">
                <div className="product-card">
                    <div className="product-image">
                        <img src={prod27} className="img-fluid w-100" alt="Cumin" />
                    </div>
                    <div className="product-content">
                        <div className="product-main-content">
                            <div className="product-category mb-2">
                                <span className="badge bg-primary-subtle text-primary">Seeds</span>
                            </div>
                            <h5 className="product-title mb-3">Cumin</h5>
                            <div className="product-basic-info">
                                <p className="mb-2"><strong>Scientific Name:</strong> Cuminum cyminum</p>
                                <p className="mb-0"><strong>Status:</strong> <span className="badge bg-secondary ms-1">Conventional</span></p>
                            </div>
                        </div>
                        <div className="product-details">
                            <div className="details-content">
                                <h6 className="text-white mb-3">Product Details</h6>
                                <div className="details-specs">
                                    <p className="mb-2"><strong>Available Forms:</strong></p>
                                    <ul className="list-unstyled mb-3">
                                        <li>• Colour sorted</li>
                                        <li>• ASTA Quality</li>
                                        <li>• Ground</li>
                                    </ul>
                                    <p className="mb-2"><strong>Pesticides Status:</strong></p>
                                    <ul className="list-unstyled">
                                        <li>• Conventional</li>
                                        <li>• AS Reg. EC396/2005</li>
                                    </ul>
                                </div>
                                <Link to="/contact" className="btn btn-light rounded-pill w-100 mt-3">
                                    Contact Us for Pricing
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product 28 - Coriander */}
            <div className="col-lg-6 col-xl-4" data-aos="fade-up" data-aos-delay="400">
                <div className="product-card">
                    <div className="product-image">
                        <img src={prod28} className="img-fluid w-100" alt="Coriander" />
                    </div>
                    <div className="product-content">
                        <div className="product-main-content">
                            <div className="product-category mb-2">
                                <span className="badge bg-primary-subtle text-primary">Seeds</span>
                            </div>
                            <h5 className="product-title mb-3">Coriander</h5>
                            <div className="product-basic-info">
                                <p className="mb-2"><strong>Scientific Name:</strong> Coriandrum sativa</p>
                                <p className="mb-0"><strong>Status:</strong> <span className="badge bg-secondary ms-1">Conventional</span></p>
                            </div>
                        </div>
                        <div className="product-details">
                            <div className="details-content">
                                <h6 className="text-white mb-3">Product Details</h6>
                                <div className="details-specs">
                                    <p className="mb-2"><strong>Available Forms:</strong></p>
                                    <ul className="list-unstyled mb-3">
                                        <li>• Colour sorted</li>
                                        <li>• ASTA Quality</li>
                                        <li>• Splits</li>
                                        <li>• Ground</li>
                                    </ul>
                                    <p className="mb-2"><strong>Pesticides Status:</strong></p>
                                    <ul className="list-unstyled">
                                        <li>• Conventional</li>
                                        <li>• AS Reg. EC396/2005</li>
                                    </ul>
                                </div>
                                <Link to="/contact" className="btn btn-light rounded-pill w-100 mt-3">
                                    Contact Us for Pricing
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product 29 - Caraway */}
            <div className="col-lg-6 col-xl-4" data-aos="fade-up" data-aos-delay="500">
                <div className="product-card">
                    <div className="product-image">
                        <img src={prod29} className="img-fluid w-100" alt="Caraway" />
                    </div>
                    <div className="product-content">
                        <div className="product-main-content">
                            <div className="product-category mb-2">
                                <span className="badge bg-primary-subtle text-primary">Seeds</span>
                            </div>
                            <h5 className="product-title mb-3">Caraway</h5>
                            <div className="product-basic-info">
                                <p className="mb-2"><strong>Scientific Name:</strong> Carum carvi</p>
                                <p className="mb-0"><strong>Status:</strong> <span className="badge bg-success ms-1">Organic</span></p>
                            </div>
                        </div>
                        <div className="product-details">
                            <div className="details-content">
                                <h6 className="text-white mb-3">Product Details</h6>
                                <div className="details-specs">
                                    <p className="mb-2"><strong>Available Forms:</strong></p>
                                    <ul className="list-unstyled mb-3">
                                        <li>• Colour sorted</li>
                                        <li>• ASTA Quality</li>
                                        <li>• Cracked</li>
                                        <li>• Ground</li>
                                    </ul>
                                    <p className="mb-2"><strong>Pesticides Status:</strong></p>
                                    <ul className="list-unstyled">
                                        <li>• Conventional</li>
                                        <li>• AS Reg. EC396/2005</li>
                                        <li>• Organic</li>
                                    </ul>
                                </div>
                                <Link to="/contact" className="btn btn-light rounded-pill w-100 mt-3">
                                    Contact Us for Pricing
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product 30 - Black Cumin */}
            <div className="col-lg-6 col-xl-4" data-aos="fade-up" data-aos-delay="600">
                <div className="product-card">
                    <div className="product-image">
                        <img src={prod30} className="img-fluid w-100" alt="Black Cumin" />
                    </div>
                    <div className="product-content">
                        <div className="product-main-content">
                            <div className="product-category mb-2">
                                <span className="badge bg-primary-subtle text-primary">Seeds</span>
                            </div>
                            <h5 className="product-title mb-3">Black Cumin</h5>
                            <div className="product-basic-info">
                                <p className="mb-2"><strong>Scientific Name:</strong> Nigella sativum</p>
                                <p className="mb-0"><strong>Status:</strong> <span className="badge bg-success ms-1">Organic</span></p>
                            </div>
                        </div>
                        <div className="product-details">
                            <div className="details-content">
                                <h6 className="text-white mb-3">Product Details</h6>
                                <div className="details-specs">
                                    <p className="mb-2"><strong>Available Forms:</strong></p>
                                    <ul className="list-unstyled mb-3">
                                        <li>• Color sorted</li>
                                        <li>• ASTA Quality</li>
                                    </ul>
                                    <p className="mb-2"><strong>Pesticides Status:</strong></p>
                                    <ul className="list-unstyled">
                                        <li>• Conventional</li>
                                        <li>• AS Reg. EC396/2005</li>
                                        <li>• Organic</li>
                                    </ul>
                                </div>
                                <Link to="/contact" className="btn btn-light rounded-pill w-100 mt-3">
                                    Contact Us for Pricing
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product 31 - Anise */}
            <div className="col-lg-6 col-xl-4" data-aos="fade-up" data-aos-delay="100">
                <div className="product-card">
                    <div className="product-image">
                        <img src={prod31} className="img-fluid w-100" alt="Anise" />
                    </div>
                    <div className="product-content">
                        <div className="product-main-content">
                            <div className="product-category mb-2">
                                <span className="badge bg-primary-subtle text-primary">Seeds</span>
                            </div>
                            <h5 className="product-title mb-3">Anise</h5>
                            <div className="product-basic-info">
                                <p className="mb-2"><strong>Scientific Name:</strong> Pimpinella anisum</p>
                                <p className="mb-0"><strong>Status:</strong> <span className="badge bg-secondary ms-1">Conventional</span></p>
                            </div>
                        </div>
                        <div className="product-details">
                            <div className="details-content">
                                <h6 className="text-white mb-3">Product Details</h6>
                                <div className="details-specs">
                                    <p className="mb-2"><strong>Available Forms:</strong></p>
                                    <ul className="list-unstyled mb-3">
                                        <li>• Color sorted</li>
                                        <li>• ASTA Quality</li>
                                        <li>• Ground</li>
                                    </ul>
                                    <p className="mb-2"><strong>Pesticides Status:</strong></p>
                                    <ul className="list-unstyled">
                                        <li>• Conventional</li>
                                        <li>• AS Reg. EC396/2005</li>
                                    </ul>
                                </div>
                                <Link to="/contact" className="btn btn-light rounded-pill w-100 mt-3">
                                    Contact Us for Pricing
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>
{/* Products End */}

    </>
  )
}