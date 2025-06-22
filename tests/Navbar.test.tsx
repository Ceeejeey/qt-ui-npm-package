import { render, screen, fireEvent, within } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Navbar from '../src/components/Navbar';

// Mock window.scrollY and scroll event listener
const mockScrollY = (value: number) => {
  Object.defineProperty(window, 'scrollY', { value, writable: true });
};

describe('Navbar', () => {
  it('renders default logo text', () => {
    render(<Navbar />);
    expect(screen.getByText('MyBrand')).toBeInTheDocument();
    expect(screen.getByText('MyBrand')).toHaveAttribute('href', '/');
    expect(screen.getByText('MyBrand')).toHaveAttribute('aria-label', 'Brand Home');
  });

  it('renders custom logo component', () => {
    const customLogo = <span>CustomLogo</span>;
    render(<Navbar logo={customLogo} />);
    expect(screen.getByText('CustomLogo')).toBeInTheDocument();
  });

  it('renders default links', () => {
    render(<Navbar />);
    const desktopMenu = screen.getByTestId('desktop-menu');
    expect(within(desktopMenu).getByText('Home')).toHaveAttribute('href', '/');
    expect(within(desktopMenu).getByText('Help Desk')).toHaveAttribute('href', '/helpdesk');
    expect(within(desktopMenu).getByText('FAQ')).toHaveAttribute('href', '/faq');
    expect(within(desktopMenu).getByText('Switch to Seller')).toHaveAttribute('href', '/seller');
  });

  it('renders custom links', () => {
    const customLinks = [
      { href: '/dashboard', label: 'Dashboard', ariaLabel: 'Dashboard' },
      { href: '/contact', label: 'Contact', ariaLabel: 'Contact', isButton: true, className: 'bg-green-500' },
    ];
    render(<Navbar links={customLinks} />);
    const desktopMenu = screen.getByTestId('desktop-menu');
    expect(within(desktopMenu).getByText('Dashboard')).toHaveAttribute('href', '/dashboard');
    expect(within(desktopMenu).getByText('Contact')).toHaveAttribute('href', '/contact');
    expect(within(desktopMenu).getByText('Contact')).toHaveClass('bg-green-500');
  });

  it('renders profile button with default icon', () => {
    render(<Navbar />);
    const profileButton = screen.getByLabelText('User Profile');
    expect(profileButton).toBeInTheDocument();
    expect(profileButton.querySelector('svg')).toBeInTheDocument();
  });

  it('toggles mobile menu on button click', () => {
    render(<Navbar />);
    const toggleButton = screen.getByLabelText('Toggle Mobile Menu');
    const mobileMenu = screen.getByTestId('mobile-menu');
    expect(mobileMenu).toHaveClass('max-h-0', 'opacity-0');

    fireEvent.click(toggleButton);
    expect(mobileMenu).toHaveClass('max-h-64', 'opacity-100');

    fireEvent.click(toggleButton);
    expect(mobileMenu).toHaveClass('max-h-0', 'opacity-0');
  });

  it('applies scrolled styles when scrollY exceeds threshold', () => {
    render(<Navbar scrollThreshold={50} />);
    const nav = screen.getByRole('navigation');

    expect(nav).toHaveClass('bg-transparent');
    expect(nav).not.toHaveClass('bg-gray-900/80');

    mockScrollY(100);
    fireEvent.scroll(window);
    expect(nav).toHaveClass('bg-gray-900/80');
    expect(nav).not.toHaveClass('bg-transparent');

    mockScrollY(0);
    fireEvent.scroll(window);
    expect(nav).toHaveClass('bg-transparent');
    expect(nav).not.toHaveClass('bg-gray-900/80');
  });

  it('calls onClick prop when nav is clicked', () => {
    const handleClick = vi.fn();
    render(<Navbar onClick={handleClick} />);
    const nav = screen.getByRole('navigation');

    fireEvent.click(nav);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});