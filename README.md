# qt-ui - React Component Library

A lightweight, customizable React component library built with TypeScript, Tailwind CSS v4, and Vite. The `qt-ui` library provides reusable components like `Navbar` to accelerate your development process.

## Features
- **TypeScript Support**: Fully typed components for a better developer experience.
- **Tailwind CSS**: Styled with Tailwind CSS v4 for easy customization.
- **Lightweight**: Optimized for performance with minimal bundle size.
- **Reusable Components**: Includes `Navbar` and more to come!

## Installation
To use `qt-ui` in your project, install it along with its peer dependencies:

```bash
npm i @ceeejeey/qt-ui react react-dom
```

## Usage
Import the components and styles into your React application. Here's an example with the `Navbar` component:

```tsx
import { Navbar } from 'qt-ui';
import 'qt-ui/dist/style.css';

function App() {
  return (
    <Navbar
      title="My App"
      onMenuClick={() => alert('Menu clicked!')}
      className="bg-blue-500 text-white p-4"
    />
  );
}

export default App;
```

### Notes
- The `className` prop allows you to apply additional Tailwind CSS classes.
- The `onMenuClick` prop is optional and triggers a callback when the menu button is clicked.
- Import `qt-ui/dist/style.css` to apply the default styles.

## Props
The `Navbar` component accepts a variety of props for customization. Below are the available interfaces and their properties:

### `NavLink` Interface
Defines individual navigation link items.

- `href` (string, required): The URL or route for the link.
- `label` (string, required): The text displayed for the link.
- `ariaLabel` (string, optional): Accessibility label for the link.
- `className` (string, optional): Additional Tailwind CSS classes for the link.
- `isButton` (boolean, optional): Whether the link should be styled as a button (e.g., for actions like "Help Desk").

### `NavbarProps` Interface
Customizes the `Navbar` component's appearance and behavior.

- **Logo Customization**:
  - `logo` (ReactNode, optional): A custom logo component or element.
  - `logoText` (string, optional): Fallback text if no `logo` is provided (defaults to "qt-ui").
  - `logoHref` (string, optional): The link destination for the logo (defaults to "/").
  - `logoClassName` (string, optional): Tailwind CSS classes for the logo.
  - `logoAriaLabel` (string, optional): Accessibility label for the logo (defaults to "Home").

- **Navigation Links**:
  - `links` (NavLink[], optional): An array of `NavLink` objects for navigation items.

- **Profile Button Customization**:
  - `profileIcon` (ReactNode, optional): A custom profile icon component or element.
  - `profileAriaLabel` (string, optional): Accessibility label for the profile button (defaults to "User Profile").
  - `profileClassName` (string, optional): Tailwind CSS classes for the profile button.

- **Styling Customization**:
  - `navClassName` (string, optional): Base Tailwind CSS classes for the nav element.
  - `containerClassName` (string, optional): Tailwind CSS classes for the container div.
  - `mobileMenuClassName` (string, optional): Tailwind CSS classes for the mobile menu.
  - `mobileToggleClassName` (string, optional): Tailwind CSS classes for the mobile toggle button.
  - `linkClassName` (string, optional): Default Tailwind CSS classes for links.
  - `linkHoverClassName` (string, optional): Tailwind CSS classes for link hover states (defaults to "hover:text-blue-200").
  - `scrolledClassName` (string, optional): Tailwind CSS classes when the nav is scrolled (defaults to "bg-opacity-90 shadow-md").
  - `mobileMenuOpenClassName` (string, optional): Tailwind CSS classes when the mobile menu is open (defaults to "flex").

- **Behavioral Customization**:
  - `scrollThreshold` (number, optional): Pixels to scroll before applying `scrolledClassName` (defaults to 50).
  - `mobileBreakpoint` (string, optional): Tailwind breakpoint for mobile behavior (e.g., 'lg', 'md', defaults to "lg").
  - `onClick` (function, optional): Callback function triggered on nav or mobile toggle click.

## Peer Dependencies
`qt-ui` relies on the following peer dependencies (version `^19.1.0`):
- `react`
- `react-dom`

Ensure these are installed in your project to avoid runtime errors.

## Demo
Try `qt-ui` in action with the included demo app!

### Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/Ceeejeey/qt-ui-npm-package.git
   cd qt-ui
   ```
2. Install dependencies:
   ```bash
   cd demo
   npm install
   ```
3. Start the demo:
   ```bash
   npm run dev
   ```
4. Visit `http://localhost:5173` in your browser to see the `Navbar` component.

## Building the Library
To build the `qt-ui` library locally:
```bash
cd qt-ui
npm install
npm run build
```

The build outputs are generated in the `dist` folder.

## Testing
Run the tests with Vitest:
```bash
npm test
```

## Contributing
Contributions are welcome! Please open an issue or submit a pull request on the [GitHub repository](https://github.com/Ceeejeey/qt-ui-npm-package).

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements
- Built with ❤️ by Ceeejeey!
- Thanks to the tools like Vite and Tailwind CSS for making this possible.