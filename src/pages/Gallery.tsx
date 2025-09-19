import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
} from '@/components/ui/dialog';

const Gallery: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const images = [
    'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg',
    'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
    'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg',
    'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg',
    'https://images.pexels.com/photos/103566/pexels-photo-103566.jpeg',
    'https://images.pexels.com/photos/691114/pexels-photo-691114.jpeg',
    'https://images.pexels.com/photos/6267591/pexels-photo-6267591.jpeg',
    'https://images.pexels.com/photos/296765/pexels-photo-296765.jpeg',
    'https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg',
  ];

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
    setOpen(true);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Galeri</h2>
      <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto mb-8">
        Restoranımızın atmosferini, lezzetli yemeklerini ve samimi ortamını keşfedin.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => handleImageClick(image)}
          >
            <img
              src={image}
              alt={`Galeri Fotoğrafı ${index + 1}`}
              className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl p-0">
          <img src={selectedImage} alt="Büyük Görünüm" className="w-full h-auto object-contain rounded-lg" />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery;