import { Link } from 'react-router-dom'


const Header = () =>{
  return (
    <header className="flex justify-around bg-white border-b border-gray-200 fixed top-0 inset-x-0 z-100 h-16 items-center">
        <Link to="home" className="text-pretty font-bold">Home</Link>
        <Link to="categories" className="text-pretty font-bold">Categories</Link>
    </header>
)
};
export default Header;