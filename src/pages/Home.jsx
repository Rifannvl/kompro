import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, TrendingUp, Users, Award, Clock, Shield } from 'lucide-react';
import Section from '../components/UI/Section';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';
import HeroImage from '../assets/images/hero_architecture_1768965912054.png';
import FintechImage from '../assets/images/project_fintech_app_1768968058476.png';
import BrandingImage from '../assets/images/project_branding_mockup_1768968076874.png';
import DashboardImage from '../assets/images/project_dashboard_ui_1768968093575.png';

// scroll to top

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-black h-screen w-full overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={HeroImage}
            alt="Modern monochrome architecture"
            className="w-full h-full object-cover opacity-60 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40"></div>
        </div>

        <Section className="!py-0 relative z-10 h-full flex flex-col justify-center">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white mb-8 leading-none">
              Build <br />
              Masterpieces.
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl leading-relaxed font-light">
              Elevate your brand with a monochrome aesthetic that speaks volumes.
              Minimalist design, maximum impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button variant="solid" className="w-full sm:w-auto text-lg px-8 py-4 hover:bg-black hover:rounded-lg transition-all duration-300 ease-in-out">
                  Start a Project
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" className="w-full sm:w-auto text-lg px-8 py-4 border-white text-white hover:border-none hover:rounded-lg transition-all duration-300 ease-in-out">
                  Our Services
                </Button>
              </Link>
            </div>
          </div>
        </Section>
      </div>

      {/* Services Preview */}
      <Section>
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Expertise</h2>
            <p className="text-gray-500 max-w-md">Comprehensive solutions designed to scale your business.</p>
          </div>
          <Link to="/services" className="hidden md:inline-flex items-center font-medium hover:underline mt-4 md:mt-0">
            View all services <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <TrendingUp className="w-10 h-10 mb-6 text-gray-900" />
            <h3 className="text-xl font-bold mb-3">Strategy</h3>
            <p className="text-gray-500 leading-relaxed">
              Data-driven insights to position your brand for long-term success in a competitive market.
            </p>
          </Card>
          <Card>
            <Users className="w-10 h-10 mb-6 text-gray-900" />
            <h3 className="text-xl font-bold mb-3">Design</h3>
            <p className="text-gray-500 leading-relaxed">
              User-centric interfaces that blend aesthetics with functionality for superior experiences.
            </p>
          </Card>
          <Card>
            <CheckCircle className="w-10 h-10 mb-6 text-gray-900" />
            <h3 className="text-xl font-bold mb-3">Development</h3>
            <p className="text-gray-500 leading-relaxed">
              Robust, scalable code that powers your digital infrastructure with reliability.
            </p>
          </Card>
        </div>

        <div className="mt-8 md:hidden">
          <Link to="/services" className="inline-flex items-center font-medium hover:underline">
            View all services <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section className="bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Compro</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">We don't just build websites; we build business assets that perform.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mb-6">
              <Award className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Award Winning</h3>
            <p className="text-gray-500">Recognized globally for our innovative design approaches.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mb-6">
              <Clock className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
            <p className="text-gray-500">We respect your time. Projects delivered on schedule, every time.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mb-6">
              <Shield className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Secure & Scalable</h3>
            <p className="text-gray-500">Built on modern tech stacks ensuring top-tier security and growth potential.</p>
          </div>
        </div>
      </Section>

      {/* Social Proof / Trusted By */}
      <div className="bg-black py-16 text-white text-center overflow-hidden">
        <div className="w-full">
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-8">Trusted by industry leaders</p>

          <div className="relative flex overflow-hidden group">
            <div className="flex animate-marquee whitespace-nowrap min-w-full shrink-0 items-center justify-around gap-12 md:gap-24 pr-12 md:pr-24 opacity-60 grayscale">
              <span className="text-2xl font-bold">ACME Corp</span>
              <span className="text-xl font-bold">GlobalTech</span>
              <span className="text-2xl font-bold">Starlight</span>
              <span className="text-xl font-bold">Umbrella</span>
              <span className="text-2xl font-bold">Massive</span>
              <span className="text-2xl font-bold">ACME Corp</span>
              <span className="text-xl font-bold">GlobalTech</span>
              <span className="text-2xl font-bold">Starlight</span>
              <span className="text-xl font-bold">Umbrella</span>
              <span className="text-2xl font-bold">Massive</span>
            </div>
            <div className="flex animate-marquee whitespace-nowrap min-w-full shrink-0 items-center justify-around gap-12 md:gap-24 pr-12 md:pr-24 opacity-60 grayscale" aria-hidden="true">
              <span className="text-2xl font-bold">ACME Corp</span>
              <span className="text-xl font-bold">GlobalTech</span>
              <span className="text-2xl font-bold">Starlight</span>
              <span className="text-xl font-bold">Umbrella</span>
              <span className="text-2xl font-bold">Massive</span>
              <span className="text-2xl font-bold">ACME Corp</span>
              <span className="text-xl font-bold">GlobalTech</span>
              <span className="text-2xl font-bold">Starlight</span>
              <span className="text-xl font-bold">Umbrella</span>
              <span className="text-2xl font-bold">Massive</span>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Projects */}
      <Section>
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Featured Work</h2>
          <Link to="/contact" className="hidden md:inline-flex items-center font-medium hover:underline">
            Start your project <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="group cursor-pointer">
            <div className="aspect-[4/3] overflow-hidden bg-gray-100 rounded-sm mb-4 relative">
              <img src={FintechImage} alt="Fintech App" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" />
            </div>
            <h3 className="text-xl font-bold">Nova Fintech</h3>
            <p className="text-sm text-gray-500">Mobile Application</p>
          </div>
          <div className="group cursor-pointer">
            <div className="aspect-[4/3] overflow-hidden bg-gray-100 rounded-sm mb-4 relative">
              <img src={BrandingImage} alt="Architectural Branding" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" />
            </div>
            <h3 className="text-xl font-bold">Neue Architects</h3>
            <p className="text-sm text-gray-500">Brand Identity</p>
          </div>
          <div className="group cursor-pointer">
            <div className="aspect-[4/3] overflow-hidden bg-gray-100 rounded-sm mb-4 relative">
              <img src={DashboardImage} alt="Analytics Dashboard" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" />
            </div>
            <h3 className="text-xl font-bold">Vortex Analytics</h3>
            <p className="text-sm text-gray-500">Web Application</p>
          </div>
        </div>
      </Section>

      {/* Stats Section */}
      <div className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-800">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">10+</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Years Exp.</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Projects</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Awards</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Client Returns</div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <Section className="text-center py-24 md:py-32">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Ready to elevate your brand?</h2>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          Let's create something extraordinary together. Schedule a call with our team.
        </p>
        <Link to="/contact">
          <Button variant="solid" className="px-10 py-5 text-lg rounded-full">
            Get in Touch
          </Button>
        </Link>
      </Section>


    </>
  );
};

export default Home;
