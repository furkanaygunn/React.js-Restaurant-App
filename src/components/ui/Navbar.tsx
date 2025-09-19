import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          YaseCAFE
        </Link>
        {/* Hamburger menü butonu */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {/* Masaüstü menü */}
        <div className="hidden lg:flex space-x-6">
          <Link to="/adisyon" className="hover:underline">
            Adisyon
          </Link>
          <Link to="/menu" className="hover:underline">
            YaseMenü
          </Link>
          <Link to="/iletisim" className="hover:underline">
            İletişim
          </Link>
          <Link to="/galeri" className="hover:underline">
            Galeri
          </Link>
          <Link to="/sss" className="hover:underline">
            Sıkça Sorulan Sorular
          </Link>
        </div>
      </div>
      {/* Mobil menü */}
      {isMenuOpen && (
        <div className="lg:hidden mt-4 space-y-2">
          <Link to="/adisyon" className="block px-4 py-2 hover:bg-blue-700 rounded" onClick={toggleMenu}>
            Adisyon
          </Link>
          <Link to="/menu" className="block px-4 py-2 hover:bg-blue-700 rounded" onClick={toggleMenu}>
            YaseMenü
          </Link>
          <Link to="/iletisim" className="block px-4 py-2 hover:bg-blue-700 rounded" onClick={toggleMenu}>
            İletişim
          </Link>
          <Link to="/galeri" className="block px-4 py-2 hover:bg-blue-700 rounded" onClick={toggleMenu}>
            Galeri
          </Link>
          <Link to="/sss" className="block px-4 py-2 hover:bg-blue-700 rounded" onClick={toggleMenu}>
            Sıkça Sorulan Sorular
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;