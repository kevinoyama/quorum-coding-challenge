import React from 'react';

const Header: React.FC = () => {
  return (
    <nav className="bg-gray-800">
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="relative flex h-16 items-center justify-between">
        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div className="flex shrink-0 items-center">
            <h2 className='text-white text-4xl'>Bills Transparency</h2>
          </div>
        </div>
      </div>
    </div>
  </nav>
  );
}

export default Header;