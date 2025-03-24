import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer
    className="bg-neutral-100 text-center dark:bg-neutral-600 lg:text-left ">
    <div className="container p-4">
      <div className="grid md:grid-cols-2 lg:grid-cols-4">
        <div className="mb-0.5">
          <h5
            className="mb-1 font-bold text-neutral-800 dark:text-neutral-200">
            Made with ❤️
          </h5>
        </div>

      </div>
    </div>

  </footer>
  );
}

export default Footer;