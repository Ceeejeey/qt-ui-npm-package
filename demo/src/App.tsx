import { Navbar } from 'qt-ui';
import 'qt-ui/dist/style.css';
import { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home', ariaLabel: 'Go to Home page' },
    { href: '/about', label: 'About Us', ariaLabel: 'Learn about us' },
    { href: '/contact', label: 'Contact Us', ariaLabel: 'Get in touch' },
  ];

  const profileIcon = (
    <svg
      className="w-6 h-6 text-white"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );

  const handleNavClick = () => {
    setIsMenuOpen(false);
    alert('Navigation clicked!');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar
        logo={<img src="https://via.placeholder.com/40" alt="Logo" className="h-10" />}
        logoText="qt-ui"
        logoHref="/"
        logoClassName="text-2xl font-bold text-white"
        logoAriaLabel="qt-ui Homepage"
        links={navLinks}
        profileIcon={profileIcon}
        profileAriaLabel="User Profile"
        profileClassName="hover:bg-gray-700 rounded-full p-1 transition"
        navClassName="bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg"
        containerClassName="max-w-7xl mx-auto"
        mobileMenuClassName="bg-gray-800 text-white"
        mobileToggleClassName="text-white hover:text-gray-300"
        linkClassName="text-white font-medium"
        linkHoverClassName="hover:text-yellow-300"
        scrolledClassName="bg-blue-700"
        mobileMenuOpenClassName="flex flex-col space-y-2 p-4"
        scrollThreshold={20}
        mobileBreakpoint="md"
        onClick={handleNavClick}
      />
      <main className="pt-20 p-6">
        <h1 className="text-4xl font-bold text-center text-gray-800">Welcome to qt-ui Demo</h1>
        <p className="text-center text-gray-600 mt-4">
          Explore the beautiful navbar with Home, About Us, and Contact Us links!
        </p>
      </main>
    </div>
  );
}

export default App;