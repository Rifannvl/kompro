import React from 'react';
import { useEffect } from 'react';
import { ArrowRight, Code, PenTool, BarChart } from 'lucide-react';
import Section from '../components/UI/Section';
import StrategyImage from '../assets/images/service_strategy_bw_1768965945553.png';
import DesignImage from '../assets/images/service_design_bw_1768965964604.png';
import DevImage from '../assets/images/service_code_bw_1768965979843.png';

const services = [
    {
        icon: <BarChart className="w-12 h-12" />,
        title: "Digital Strategy",
        description: "We analyze market trends and user behavior to craft strategies that drive real business results. From brand positioning to digital transformation roadmaps.",
        items: ["Market Analysis", "Brand Strategy", "User Research", "SEO/SEM"],
        image: StrategyImage
    },
    {
        icon: <PenTool className="w-12 h-12" />,
        title: "UI/UX Design",
        description: "Creating intuitive, engaging, and beautiful interfaces. We prioritize user experience while maintaining a strict adherence to aesthetic excellence.",
        items: ["Wireframing", "Prototyping", "Design Systems", "Interaction Design"],
        image: DesignImage
    },
    {
        icon: <Code className="w-12 h-12" />,
        title: "Web Development",
        description: "Building robust frontend and backend solutions. We use modern frameworks to ensure your site is fast, secure, and scalable.",
        items: ["React/Next.js", "API Integration", "CMS Development", "Performance Optimization"],
        image: DevImage
    }
];



const Services = () => {
    // scroll to top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Section className="bg-black text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
                <p className="text-xl text-gray-400 max-w-2xl">
                    Comprehensive digital solutions tailored to your unique needs.
                </p>
            </Section>

            <Section>
                <div className="space-y-24">
                    {services.map((service, index) => (
                        <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-left">
                            <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                                <div className="w-full h-64 md:h-96 rounded-sm overflow-hidden shadow-sm relative group">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                                </div>
                            </div>
                            <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                    {service.title}
                                </h2>
                                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                    {service.description}
                                </p>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {service.items.map((item, idx) => (
                                        <li key={idx} className="flex items-center text-gray-900 font-medium border-l-2 border-gray-200 pl-4 py-1">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            <Section className="bg-gray-50 text-center">
                <h2 className="text-3xl font-bold mb-6">Need something custom?</h2>
                <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                    We love unique challenges. Let's discuss your specific requirements and build a solution just for you.
                </p>
                <a href="/contact" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium text-white bg-black hover:bg-gray-800 transition-colors">
                    Get in Touch <ArrowRight className="ml-2 w-4 h-4" />
                </a>
            </Section>
        </>
    );
};

export default Services;
