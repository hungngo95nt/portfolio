import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex justify-around bg-white shadow-md fixed top-0 inset-x-0 z-100 h-16 items-center p-4">
      <Link to="/">Home</Link>
      <Link to="/components">Components</Link>
      <Link to="/blogs">Blogs</Link>
    </header>
  );
};
export default Header;
