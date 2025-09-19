import React from 'react';
import { Button } from '@/components/ui/button';

interface CartProps {
  items: { name: string; price: number; quantity: number; imageUrl?: string }[];
  onRemoveItem: (name: string) => void;
  onUpdateQuantity: (name: string, quantity: number) => void;
}

const Cart: React.FC<CartProps> = ({ items, onRemoveItem, onUpdateQuantity }) => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-6 mt-8 bg-white shadow-lg rounded-lg max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Sepetim</h2>
      {items.length === 0 ? (
        <p className="text-gray-500">Sepetiniz boş</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.map((item) => (
            <div key={item.name} className="flex flex-col border rounded-lg p-3 shadow-sm transition-shadow duration-300 hover:shadow-md">
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-600 text-sm">₺{item.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-1">
                    <Button
                      variant="outline"
                      size="icon"
                      className="size-6 text-xl p-0"
                      onClick={() => onUpdateQuantity(item.name, item.quantity - 1)}
                    >
                      -
                    </Button>
                    <span className="text-base font-medium px-2">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="size-6 text-xl p-0"
                      onClick={() => onUpdateQuantity(item.name, item.quantity + 1)}
                    >
                      +
                    </Button>
                  </div>
                  <Button
                    variant="destructive"
                    size="sm"
                    className="ml-2"
                    onClick={() => onRemoveItem(item.name)}
                  >
                    Sil
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="mt-6 text-right font-bold text-xl border-t pt-4">
        Toplam: ₺{total.toFixed(2)}
      </div>
    </div>
  );
};

export default Cart;