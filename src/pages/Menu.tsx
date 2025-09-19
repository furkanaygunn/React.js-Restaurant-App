import React from 'react';
import MenuItem from '@/components/ui/MenuItem';
import { menu } from '@/data/menuData';
import type { MenuCategory, MenuItem as MenuItemType } from '@/data/menuData';

const MenuPage: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Menü</h2>
      {Object.keys(menu).map((categoryKey) => {
        const category = categoryKey as MenuCategory;
        const items = menu[category];
        return (
          <section key={category} className="mb-10">
            <h3 className="text-2xl font-semibold mb-6 capitalize">{category}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {items.map((item: MenuItemType) => (
                <MenuItem
                  key={item.name}
                  name={item.name}
                  price={item.price}
                  imageUrl={item.imageUrl}
                  onAddToCart={() => {}}
                />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default MenuPage;