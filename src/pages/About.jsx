import React from 'react';
import Section from '../components/UI/Section';
import Card from '../components/UI/Card';
import { useEffect } from 'react';
import OfficeImage from '../assets/images/office_meeting_bw_1768965928890.png';

// scroll to top

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Section className="bg-gray-50">
                <div className="max-w-3xl">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        Founded on the principle that simplicity is the ultimate sophistication,
                        Compro was born to challenge the noise of the digital world.
                        We believe in clarity, purpose, and impact.
                    </p>
                </div>
            </Section>

            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            To empower businesses with design-led technology that transcends trends.
                            We strive to create digital assets that are not just functional, but fundamental
                            to our clients' growth.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            We focus on the essentials, stripping away the superfluous to reveal
                            the core value of your brand.
                        </p>
                    </div>
                    <div className="h-96 w-full rounded-sm overflow-hidden shadow-lg">
                        <img
                            src={OfficeImage}
                            alt="Team collaborating in a modern office"
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </div>
                </div>
            </Section>

            <Section className="border-t border-gray-100">
                <h2 className="text-3xl font-bold mb-12">The Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[1, 2, 3, 4].map((item) => (
                        <div key={item} className="group cursor-pointer">
                            <div className="bg-gray-200 aspect-[3/4] mb-4 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                                <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                                    <span className="text-gray-500 text-sm">Portrait</span>
                                </div>
                            </div>
                            <h3 className="text-lg font-bold">Team Member {item}</h3>
                            <p className="text-sm text-gray-500">Position Title</p>
                        </div>
                    ))}
                </div>
            </Section>
        </>
    );
};

export default About;
