export const menu = {
  anaYemekler: [
    { name: 'Izgara Somon', price: 125.50, imageUrl: 'https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg' },
    { name: 'Fettuccine Alfredo', price: 95.00, imageUrl: 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg' },
    { name: 'Kremalı Mantarlı Tavuk', price: 110.00, imageUrl: 'https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg' },
    { name: 'Vegan Burger', price: 85.00, imageUrl: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg' },
  ],
  salatalar: [
    { name: 'Akdeniz Salata', price: 60.00, imageUrl: 'https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg' },
    { name: 'Kinoa Salata', price: 70.00, imageUrl: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg' },
  ],
  tatlilar: [
    { name: 'Sufle', price: 55.00, imageUrl: 'https://images.pexels.com/photos/45202/pexels-photo-45202.jpeg' },
    { name: 'Tiramisu', price: 60.00, imageUrl: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg' },
  ],
  icecekler: [
    { name: 'Limonata', price: 25.00, imageUrl: 'https://images.pexels.com/photos/133791/pexels-photo-133791.jpeg' },
    { name: 'Taze Sıkma Portakal Suyu', price: 35.00, imageUrl: 'https://images.pexels.com/photos/109275/pexels-photo-109275.jpeg' },
    { name: 'Latte', price: 30.00, imageUrl: 'https://images.pexels.com/photos/1235717/pexels-photo-1235717.jpeg' },
  ],
};

export type MenuCategory = keyof typeof menu;

export interface MenuItem {
  name: string;
  price: number;
  imageUrl: string;
}