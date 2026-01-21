import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/UI/Button';
import Section from '../components/UI/Section';

const NotFound = () => {
    return (
        <Section className="flex flex-col items-center justify-center min-h-[60vh] text-center">
            <h1 className="text-9xl font-bold text-gray-900 mb-4">404</h1>
            <h2 className="text-2xl font-medium text-gray-600 mb-8">Page Not Found</h2>
            <p className="text-gray-500 max-w-md mb-8">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <Link to="/">
                <Button variant="solid">Back to Home</Button>
            </Link>
        </Section>
    );
};

export default NotFound;
