import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';

interface MenuItem {
    name: string;
    price: number;
    imageUrl?: string;
}

interface CartItem {
    name: string;
    price: number;
    quantity: number;
}

interface AdisyonProps {
    menu: MenuItem[];
}

const Adisyon: React.FC<AdisyonProps> = ({ menu }) => {
    const [tables, setTables] = useState<{ id: number; cart: CartItem[] }[]>([]);
    const [selectedTable, setSelectedTable] = useState<number | null>(null);
    const [showInvoice, setShowInvoice] = useState(false);

    useEffect(() => {
        const savedTables = localStorage.getItem('adisyonTables');
        if (savedTables) {
            setTables(JSON.parse(savedTables));
        } else {
            setTables([{ id: 1, cart: [] }, { id: 2, cart: [] }, { id: 3, cart: [] }]);
        }
    }, []);

    useEffect(() => {
        if (tables.length > 0) {
            localStorage.setItem('adisyonTables', JSON.stringify(tables));
        }
    }, [tables]);

    const handleAddToCart = (item: MenuItem) => {
        if (!selectedTable) return;

        setTables(prevTables =>
            prevTables.map(table =>
                table.id === selectedTable
                    ? {
                        ...table,
                        cart: table.cart.find(cartItem => cartItem.name === item.name)
                            ? table.cart.map(cartItem =>
                                cartItem.name === item.name ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
                            )
                            : [...table.cart, { ...item, quantity: 1 }]
                    }
                    : table
            )
        );
    };

    const handleUpdateQuantity = (name: string, quantity: number) => {
        if (!selectedTable) return;
        setTables(prevTables =>
            prevTables.map(table =>
                table.id === selectedTable
                    ? {
                        ...table,
                        cart: table.cart.map(item =>
                            item.name === name ? { ...item, quantity: Math.max(quantity, 0) } : item
                        ),
                    }
                    : table
            )
        );
    };

    const handleRemoveItem = (name: string) => {
        if (!selectedTable) return;
        setTables(prevTables =>
            prevTables.map(table =>
                table.id === selectedTable
                    ? { ...table, cart: table.cart.filter(item => item.name !== name) }
                    : table
            )
        );
    };

    const getTableTotal = (tableId: number) => {
        const table = tables.find(t => t.id === tableId);
        return table ? table.cart.reduce((sum, item) => sum + item.price * item.quantity, 0) : 0;
    };

    const handleConfirmPayment = () => {
        if (!selectedTable) return;
        if (currentTableCart.length === 0) {
            alert('Sepet boş, ödeme yapılamaz.');
            return;
        }
        setShowInvoice(true);
    };

    const handlePrintInvoice = () => {
        const printContent = document.getElementById('invoice-content')?.innerHTML;
        const originalContent = document.body.innerHTML;
        document.body.innerHTML = printContent || '';
        window.print();
        document.body.innerHTML = originalContent;
        window.location.reload();
    };

    const handleCloseInvoice = () => {
        if (!selectedTable) return;
        setTables(prevTables =>
            prevTables.map(table =>
                table.id === selectedTable ? { ...table, cart: [] } : table
            )
        );
        setShowInvoice(false);
        setSelectedTable(null);
    };

    const currentTableCart = tables.find(t => t.id === selectedTable)?.cart || [];
    const currentTableTotal = getTableTotal(selectedTable!);

    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            <h2 className="text-3xl font-bold mb-6 text-center">Adisyon Yönetimi</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {tables.map(table => (
                    <div
                        key={table.id}
                        className={`p-6 rounded-lg shadow-md cursor-pointer transition-colors ${selectedTable === table.id ? 'bg-blue-100 ring-2 ring-blue-500' : 'bg-white hover:bg-gray-50'}`}
                        onClick={() => setSelectedTable(table.id)}
                    >
                        <h3 className="text-xl font-semibold mb-2">Masa {table.id}</h3>
                        <p className="text-gray-600">{table.cart.length} Farklı Ürün</p>
                        <p className="text-lg font-bold">Toplam: ₺{getTableTotal(table.id).toFixed(2)}</p>
                    </div>
                ))}
            </div>

            {selectedTable && (
                <div className="mt-10 p-6 bg-white rounded-lg shadow-xl">
                    <h3 className="text-2xl font-bold mb-4">Masa {selectedTable} Adisyon Detayları</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Menü Bölümü */}
                        <div>
                            <h4 className="text-xl font-semibold mb-3">Menüden Ekle</h4>
                            <div className="grid grid-cols-2 gap-4">
                                {menu.map(item => (
                                    <div
                                        key={item.name}
                                        onClick={() => handleAddToCart(item)}
                                        className="relative bg-gray-50 border rounded-lg overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
                                    >
                                        {item.imageUrl && (
                                            <img
                                                src={item.imageUrl}
                                                alt={item.name}
                                                className="w-full h-24 object-cover"
                                            />
                                        )}
                                        <div className="p-3">
                                            <p className="font-medium text-base truncate">{item.name}</p>
                                            <p className="text-sm text-gray-700">₺{item.price.toFixed(2)}</p>
                                            <Button
                                                size="sm"
                                                className="absolute bottom-2 right-2 px-3 py-1 text-xs"
                                                onClick={(e) => { e.stopPropagation(); handleAddToCart(item); }}
                                            >
                                                Ekle
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Sepet Bölümü */}
                        <div>
                            <h4 className="text-xl font-semibold mb-3">Mevcut Sepet</h4>
                            <div className="space-y-4">
                                {currentTableCart.length === 0 ? (
                                    <p className="text-gray-500 text-center py-4 border rounded-lg bg-gray-50">Sepet boş.</p>
                                ) : (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {currentTableCart.map(item => (
                                            <div key={item.name} className="flex flex-col border rounded-lg p-3 shadow-sm bg-gray-50">
                                                <div className="flex-1">
                                                    <h5 className="font-medium">{item.name}</h5>
                                                    <p className="text-sm text-gray-600">₺{item.price.toFixed(2)}</p>
                                                </div>
                                                <div className="flex items-center justify-between mt-2">
                                                    <div className="flex items-center gap-1">
                                                        <Button
                                                            variant="outline"
                                                            size="icon"
                                                            className="size-6 text-xl p-0"
                                                            onClick={() => handleUpdateQuantity(item.name, item.quantity - 1)}
                                                            disabled={item.quantity <= 1} // Miktarı 1'den az olamaz
                                                        >
                                                            -
                                                        </Button>
                                                        <span className="text-base font-medium px-2">{item.quantity}</span>
                                                        <Button
                                                            variant="outline"
                                                            size="icon"
                                                            className="size-6 text-xl p-0"
                                                            onClick={() => handleUpdateQuantity(item.name, item.quantity + 1)}
                                                        >
                                                            +
                                                        </Button>
                                                    </div>
                                                    <Button
                                                        variant="destructive"
                                                        size="sm"
                                                        className="ml-2"
                                                        onClick={() => handleRemoveItem(item.name)}
                                                    >
                                                        Sil
                                                    </Button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <div className="mt-6 font-bold text-xl text-right border-t pt-4">
                                Toplam: ₺{currentTableTotal.toFixed(2)}
                            </div>
                            <div className="mt-6 text-right">
                                <Button onClick={handleConfirmPayment} disabled={currentTableCart.length === 0}>
                                    Ödemeyi Onayla
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Fatura Paneli  */}
            <Dialog open={showInvoice} onOpenChange={setShowInvoice}>
                <DialogContent className="sm:max-w-md p-6 bg-white rounded-lg shadow-xl outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] duration-300">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-bold text-center border-b pb-3 mb-4">Masa {selectedTable} Faturası</DialogTitle>
                    </DialogHeader>
                    <div id="invoice-content" className="p-4 space-y-3 text-gray-800">
                        <div className="flex justify-between text-lg font-semibold border-b pb-2 mb-2">
                            <span>Ürün</span>
                            <span>Adet</span>
                            <span>Tutar</span>
                        </div>
                        {currentTableCart.map(item => (
                            <div key={item.name} className="flex justify-between items-center text-base">
                                <span className="flex-1">{item.name}</span>
                                <span className="w-12 text-center">{item.quantity}</span>
                                <span className="w-20 text-right">₺{(item.price * item.quantity).toFixed(2)}</span>
                            </div>
                        ))}
                        <div className="border-t pt-3 mt-4 flex justify-between items-center text-xl font-bold">
                            <span>GENEL TOPLAM:</span>
                            <span>₺{currentTableTotal.toFixed(2)}</span>
                        </div>
                        <p className="text-center text-sm text-gray-500 mt-6">Bizi tercih ettiğiniz için teşekkür ederiz!</p>
                    </div>
                    <div className="mt-6 flex justify-end gap-3 border-t pt-4">
                        <Button variant="outline" onClick={handlePrintInvoice}>Yazdır</Button>
                        <Button onClick={handleCloseInvoice}>Tamamla ve Kapat</Button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default Adisyon;