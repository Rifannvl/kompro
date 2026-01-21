import React from 'react';
import Section from '../components/UI/Section';
import Button from '../components/UI/Button';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
    return (
        <>
            <Section className="bg-gray-50">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
                <p className="text-xl text-gray-600">Let's start a conversation.</p>
            </Section>

            <Section>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Form */}
                    <div>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                    <input type="text" id="name" className="w-full px-4 py-3 border border-gray-300 focus:ring-black focus:border-black outline-none transition-colors" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                    <input type="email" id="email" className="w-full px-4 py-3 border border-gray-300 focus:ring-black focus:border-black outline-none transition-colors" placeholder="john@example.com" />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                                <input type="text" id="subject" className="w-full px-4 py-3 border border-gray-300 focus:ring-black focus:border-black outline-none transition-colors" placeholder="Project Inquiry" />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea id="message" rows="6" className="w-full px-4 py-3 border border-gray-300 focus:ring-black focus:border-black outline-none transition-colors resize-none" placeholder="Tell us about your project..."></textarea>
                            </div>

                            <Button type="submit" variant="solid" className="w-full md:w-auto">
                                Send Message
                            </Button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-12">
                        <div>
                            <h3 className="text-xl font-bold mb-6">Get in Touch</h3>
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <MapPin className="w-6 h-6 mr-4 text-gray-400 mt-1" />
                                    <div>
                                        <h4 className="font-medium text-gray-900">Headquarters</h4>
                                        <p className="text-gray-500 mt-1">123 Design Avenue,<br />Creative District, NY 10012</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <Mail className="w-6 h-6 mr-4 text-gray-400 mt-1" />
                                    <div>
                                        <h4 className="font-medium text-gray-900">Email</h4>
                                        <p className="text-gray-500 mt-1">hello@compro.co</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <Phone className="w-6 h-6 mr-4 text-gray-400 mt-1" />
                                    <div>
                                        <h4 className="font-medium text-gray-900">Phone</h4>
                                        <p className="text-gray-500 mt-1">+1 (555) 123-4567</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="bg-gray-200 w-full h-64 grayscale rounded-sm flex items-center justify-center">
                            <span className="text-gray-500 font-medium">Google Map Placeholder</span>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
};

export default Contact;
