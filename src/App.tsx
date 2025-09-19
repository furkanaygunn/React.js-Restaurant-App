import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MenuItem from './components/ui/MenuItem';
import About from './pages/About';
import Contact from './pages/Contact';
import Adisyon from './pages/Adisyon';
import Gallery from './pages/Gallery';
import Faq from './pages/Faq';

const App: React.FC = () => {
  const menu = [
    { name: 'Pizza', price: 109.99, imageUrl: 'https://images.pexels.com/photos/32906549/pexels-photo-32906549.jpeg' },
    { name: 'Burger', price: 64.99, imageUrl: 'https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg' },
    { name: 'Lahmacun', price: 92.99, imageUrl: 'https://images.pexels.com/photos/7545571/pexels-photo-7545571.jpeg' },
    { name: 'Tavuk Şiş', price: 89.99, imageUrl: 'https://images.pexels.com/photos/533325/pexels-photo-533325.jpeg' },
    { name: 'Salata', price: 45.99, imageUrl: 'https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg' },
    { name: 'Makarna', price: 79.99, imageUrl: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg' },
    { name: 'Çorba', price: 29.99, imageUrl: 'https://images.pexels.com/photos/1723910/pexels-photo-1723910.jpeg' },
    { name: 'Tatlı', price: 54.99, imageUrl: 'https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg' },
  ];

  return (
    <Router>
      {/* NAVBAR */}
      <header className="bg-blue-600 text-white p-4 shadow-lg">
        <nav className="max-w-6xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">Cümbüş Kafe</Link>
          <ul className="flex space-x-4">
            <li><Link to="/adisyon" className="hover:text-gray-200">Adisyon</Link></li>
            <li><Link to="/menu" className="hover:text-gray-200">Menü</Link></li>
            <li><Link to="/about" className="hover:text-gray-200">Hakkımızda</Link></li>
            <li><Link to="/contact" className="hover:text-gray-200">İletişim</Link></li>
            <li><Link to="/gallery" className="hover:text-gray-200">Galeri</Link></li>
            <li><Link to="/faq" className="hover:text-gray-200">SSS</Link></li>
          </ul>
        </nav>
      </header>

      {/* Sayfa Geçişi */}
      <Routes>
        <Route path="/" element={<main className="max-w-6xl mx-auto px-4 py-10">
          <h2 className="text-3xl font-bold text-center mb-6">Hoş Geldiniz!</h2>
          <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto">
            Cümbüş Kafe'ye hoş geldiniz! Burada sadece lezzetli yemekler bulmaz, aynı zamanda ruhunuza iyi gelecek bir atmosferin tadını çıkarırsınız.
          </p>
        </main>} />
        <Route path="/menu" element={<main className="max-w-6xl mx-auto px-4">
          <section id="menu" className="py-10">
            <h2 className="text-3xl font-bold mb-6">Menü</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {menu.map((item, index) => (
                <MenuItem key={index} {...item} />
              ))}
            </div>
          </section>
        </main>} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/adisyon" element={<Adisyon menu={menu} />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/faq" element={<Faq />} />

      </Routes>

      {/* FOOTER */}
      <footer className="bg-blue-600 text-white py-8">
        <div className="max-w-6xl mx-auto text-center">
          <p>© 2024 Cümbüş Kafe. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </Router>
  );
};

export default App;