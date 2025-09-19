import React from 'react';

interface MenuItemProps {
  name: string;
  price: number;
  imageUrl: string;
  onAddToCart?: (name: string, price: number) => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ name, price, imageUrl, onAddToCart }) => {
  return (
    <div className="max-w-xs bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 p-4">
      <img src={imageUrl} alt={name} className="w-full h-48 object-cover rounded-md mb-4" />
      <div className="text-center">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{name}</h3>
        <p className="text-gray-700 mb-4">Fiyat: ₺{price.toFixed(2)}</p>
        {onAddToCart && (
          <button
            className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={() => onAddToCart(name, price)}
          >
            Sepete Ekle
          </button>
        )}
      </div>
    </div>
  );
};

export default MenuItem;