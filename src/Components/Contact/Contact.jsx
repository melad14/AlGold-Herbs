import React, { useEffect } from 'react'

import Aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'

export default function Contact() {
    useEffect(() => {
        Aos.init({
            duration: 1000
        })
    }, [])
    
    return (
        <>
             <div className="container-fluid bg-breadcrumb">
                <div className="container text-center py-5" style={{ maxWidth: '900px' }}>
                    <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">Contact Us</h4>
                    <ol className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
                        <li className="breadcrumb-item "><Link className='text-white' to="/">Home</Link></li>
                        <li className="breadcrumb-item "><Link className='text-white' to="">Pages</Link></li>
                        <li className="breadcrumb-item  active text-white">Contact</li>
                    </ol>    
                </div>
            </div>
 <div className="container-fluid contact py-5">
      <div className="container-fluid py-5">
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
                    <p className="mb-0">Bani-suef-egypt</p>
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
                    <p className="mb-0">contact@algoldherbs.com</p>
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
                    <p className="mb-0">01204684565</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 wow fadeInUp" data-wow-delay="0.7s">
                <div className="contact-add-item p-4">
                  <div className="contact-icon mb-4">
                    <i className="fab fa-firefox-browser fa-2x"></i>
                  </div>
                  <div>
                    <h4>www.algoldherbs.com</h4>
                    <p className="mb-0">01204684565</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second Column - Contact Form */}
          <div className="col-xl-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className=" p-5 rounded">
              <h4 className="text-primary mb-4">Send Your Message</h4>
              <form>
                <div className="row g-4">
                  <div className="col-lg-12 col-xl-6">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="name" placeholder="Your Name" />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-lg-12 col-xl-6">
                    <div className="form-floating">
                      <input type="email" className="form-control" id="email" placeholder="Your Email" />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-lg-12 col-xl-6">
                    <div className="form-floating">
                      <input type="tel" className="form-control" id="phone" placeholder="Phone" />
                      <label htmlFor="phone">Your Phone</label>
                    </div>
                  </div>
                  <div className="col-lg-12 col-xl-6">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="project" placeholder="Project" />
                      <label htmlFor="project">Your Project</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="subject" placeholder="Subject" />
                      <label htmlFor="subject">Subject</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ height: '160px' }}></textarea>
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-light w-100 py-3" type="button">Send Message</button>
                  </div>
                </div>
              </form>
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
        </div>
      </div>
    </div>
        </>
    )
}