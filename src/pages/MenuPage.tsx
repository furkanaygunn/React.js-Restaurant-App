import React from 'react';
import MenuItem from '@/components/ui/MenuItem';

interface MenuItemType {
  name: string;
  price: number;
  imageUrl: string;
}

interface MenuPageProps {
  menu: MenuItemType[];
}

const MenuPage: React.FC<MenuPageProps> = ({ menu }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6 text-center">YaseMenü</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {menu.map((item: MenuItemType, index) => (
          <MenuItem
            key={index}
            name={item.name}
            price={item.price}
            imageUrl={item.imageUrl}
            onAddToCart={() => {}}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuPage;