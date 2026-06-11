import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';
import { API_URL, CONTACT_URL } from '../../apiConfig';

export default function Contact() {
    const [settings, setSettings] = useState({
        contact: {
            address: "Bani-suef-egypt",
            email: "contact@algoldherbs.com",
            phone: "01204684565",
            website: "www.algoldherbs.com"
        }
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

        // Fetch contact details
        axios.get(API_URL)
            .then(res => {
                if (res.data && res.data.settings && Object.keys(res.data.settings).length > 0) {
                    setSettings(res.data.settings);
                }
            })
            .catch(err => {
                console.error("Error fetching contact settings:", err);
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
                console.error("Error submitting contact message:", err);
                toast.error("An error occurred. Please try again later.");
                setSending(false);
            });
    };
    
    return (
        <>
            <Toaster position="top-center" reverseOrder={false} />
            
            <div className="container-fluid bg-breadcrumb">
                <div className="container text-center py-5" style={{ maxWidth: '900px' }}>
                    <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">Contact Us</h4>
                    <ol className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
                        <li className="breadcrumb-item "><Link className='text-white' to="/">Home</Link></li>
                        <li className="breadcrumb-item "><Link className='text-white' to="">Pages</Link></li>
                        <li className="breadcrumb-item active text-white">Contact</li>
                    </ol>    
                </div>
            </div>
            
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