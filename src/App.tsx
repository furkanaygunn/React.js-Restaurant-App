import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Adisyon from './pages/Adisyon';
import { Button } from './components/ui/button';
import Gallery from './pages/Gallery';
import Faq from './pages/Faq';
import MenuPage from './pages/MenuPage'; // Bu satır eklendi

const App: React.FC = () => {
  const menu = [
    { name: 'Pizza', price: 109.99, imageUrl: 'https://images.pexels.com/photos/32906549/pexels-photo-32906549.jpeg' },
    { name: 'Burger', price: 64.99, imageUrl: 'https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg' },
    { name: 'Lahmacun', price: 92.99, imageUrl: 'https://images.pexels.com/photos/7545571/pexels-photo-7545571.jpeg' },
    { name: 'Tavuk Şiş', price: 89.99, imageUrl: 'https://images.pexels.com/photos/533325/pexels-photo-533325.jpeg' },
    { name: 'Salata', price: 45.99, imageUrl: 'https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg' },
    { name: 'Izgara Köfte', price: 79.99, imageUrl: 'https://images.pexels.com/photos/13887559/pexels-photo-13887559.jpeg' },
    { name: 'Yasemin Çayı', price: 55.99, imageUrl: 'https://media.istockphoto.com/id/1146980588/tr/foto%C4%9Fraf/masada-g%C3%BCzel-cam-kase-lezzetli-ye%C5%9Fil-%C3%A7ay.jpg?s=612x612&w=0&k=20&c=GLvTUtgqbSLAzfkZdDW8kyfK36T-c6Bi8Bgo9xnp4Ls=' },
    { name: 'Cheesecake', price: 59.99, imageUrl: 'https://images.pexels.com/photos/3185509/pexels-photo-3185509.png' },
  ];

  return (
    <Router>
      <div className="bg-gray-100 min-h-screen flex flex-col">
        {/* HEADER */}
        <header className="bg-white text-gray-800 shadow-md py-4">
          <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              YaseCAFE
            </Link>
            <nav className="space-x-4">
              <Link to="/menu" className="hover:text-blue-600 transition-colors">
                YaseMenü
              </Link>
              <Link to="/about" className="hover:text-blue-600 transition-colors">
                Hakkımızda
              </Link>
              <Link to="/gallery" className="hover:text-blue-600 transition-colors">
                Galeri
              </Link>
              <Link to="/contact" className="hover:text-blue-600 transition-colors">
                İletişim
              </Link>
              <Link to="/faq" className="hover:text-blue-600 transition-colors">
                SSS
              </Link>
              <Link to="/adisyon">
                <Button>Adisyon</Button>
              </Link>
            </nav>
          </div>
        </header>

        {/* Sayfa Geçişi */}
        <Routes>
          <Route path="/" element={<main className="max-w-6xl mx-auto px-4 py-10">
            <h2 className="text-3xl font-bold text-center mb-6">Hoş Geldiniz!</h2>
            <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto">
              YaseCAFE'ye hoş geldiniz! Burada sadece lezzetli yemekler bulmaz, aynı zamanda ruhunuza iyi gelecek bir atmosferin tadını çıkarırsınız.
            </p>
          </main>} />
          
          <Route path="/menu" element={<MenuPage menu={menu} />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/adisyon" element={<Adisyon menu={menu} />} />
        </Routes>

        {/* FOOTER */}
        <footer className="bg-blue-600 text-white py-8 mt-auto">
          <div className="max-w-6xl mx-auto text-center px-4">
            <p>&copy; {new Date().getFullYear()} YaseCAFE. Tüm hakları saklıdır.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;