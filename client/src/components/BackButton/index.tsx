import React from 'react';
import { Link } from 'react-router';


const BackButton: React.FC = () => {
    return (
        <Link
            to='/'
            className="inline-block rounded bg-primary bg-blue-600 mt-5 mb-5 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white"
        >
            Back to Home
        </Link>
    )
}

export default BackButton;