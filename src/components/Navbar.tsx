import React, { useState, useEffect, type ReactNode } from 'react';

    interface NavLink {
      href: string;
      label: string;
      ariaLabel?: string;
      className?: string;
      isButton?: boolean;
    }

    interface NavbarProps {
      logo?: ReactNode;
      logoText?: string;
      logoHref?: string;
      logoClassName?: string;
      logoAriaLabel?: string;
      links?: NavLink[];
      profileIcon?: ReactNode;
      profileAriaLabel?: string;
      profileClassName?: string;
      navClassName?: string;
      containerClassName?: string;
      mobileMenuClassName?: string;
      mobileToggleClassName?: string;
      linkClassName?: string;
      linkHoverClassName?: string;
      scrolledClassName?: string;
      mobileMenuOpenClassName?: string;
      scrollThreshold?: number;
      mobileBreakpoint?: string;
      onClick?: () => void;
    }

    const Navbar: React.FC<NavbarProps> = ({
      logo,
      logoText = 'MyBrand',
      logoHref = '/',
      logoClassName = 'text-2xl font-extrabold bg-gradient-to-b from-blue-500 to-blue-700 bg-clip-text text-transparent hover:scale-105',
      logoAriaLabel = 'Brand Home',
      links = [
        { href: '/', label: 'Home', ariaLabel: 'Home' },
        { href: '/helpdesk', label: 'Help Desk', ariaLabel: 'Help Desk', isButton: true, className: 'bg-blue-500 text-white rounded-full px-3 py-1 hover:bg-blue-600' },
        { href: '/faq', label: 'FAQ', ariaLabel: 'FAQ' },
        { href: '/seller', label: 'Switch to Seller', ariaLabel: 'Switch to Seller' },
      ],
      profileIcon = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
      profileAriaLabel = 'User Profile',
      profileClassName = 'p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-md',
      navClassName = 'fixed w-full z-50 transition-all duration-500 ease-in-out',
      containerClassName = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
      mobileMenuClassName = 'lg:hidden transition-all duration-300 ease-in-out',
      mobileToggleClassName = 'p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-md',
      linkClassName = 'text-gray-900 dark:text-white font-medium',
      linkHoverClassName = 'hover:text-blue-500 hover:scale-110 transition-all duration-300',
      scrolledClassName = 'bg-gray-900/80 backdrop-blur-sm',
      mobileMenuOpenClassName = 'max-h-64 opacity-100 bg-gray-900/90 shadow-lg',
      scrollThreshold = 50,
      mobileBreakpoint = 'lg',
      onClick,
    }) => {
      const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
      const [isScrolled, setIsScrolled] = useState(false);

      const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

      useEffect(() => {
        const handleScroll = () => {
          setIsScrolled(window.scrollY > scrollThreshold);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, [scrollThreshold]);

      // Compute the breakpoint class dynamically
      const desktopClass = `hidden ${mobileBreakpoint}:flex`;
      const mobileClass = `${mobileBreakpoint}:hidden`;

      return (
        <nav
          className={`${navClassName} ${isScrolled ? scrolledClassName : 'bg-transparent'}`}
          onClick={onClick}
        >
          <div className={containerClassName}>
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <div className="flex items-center">
                <a href={logoHref} className={logoClassName} aria-label={logoAriaLabel}>
                  {logo || logoText}
                </a>
              </div>

              {/* Desktop Links */}
              <div className={desktopClass} data-testid="desktop-menu">
                {links.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className={`${linkClassName} ${linkHoverClassName} ${link.isButton ? link.className : ''}`}
                    aria-label={link.ariaLabel || link.label}
                  >
                    {link.label}
                  </a>
                ))}
                <button className={profileClassName} aria-label={profileAriaLabel}>
                  {profileIcon}
                </button>
              </div>

              {/* Mobile Toggle */}
              <div className={mobileClass}>
                <button
                  className={mobileToggleClassName}
                  onClick={toggleMobileMenu}
                  aria-label="Toggle Mobile Menu"
                  aria-expanded={isMobileMenuOpen}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {isMobileMenuOpen ? (
                      <>
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </>
                    ) : (
                      <>
                        <line x1="4" y1="12" x2="20" y2="12" />
                        <line x1="4" y1="6" x2="20" y2="6" />
                        <line x1="4" y1="18" x2="20" y2="18" />
                      </>
                    )}
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`${mobileMenuClassName} ${
              isMobileMenuOpen ? mobileMenuOpenClassName : 'max-h-0 opacity-0'
            } overflow-hidden`}
            data-testid="mobile-menu"
          >
            <div className="flex flex-col space-y-4 px-4 py-4">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className={`${linkClassName} ${linkHoverClassName} ${link.isButton ? link.className : ''}`}
                  onClick={toggleMobileMenu}
                  aria-label={link.ariaLabel || link.label}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </nav>
      );
    };

    export default Navbar;
    export { NavbarProps };