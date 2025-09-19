import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6 text-center">İletişim</h2>
      <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto mb-8">
        Her türlü soru, öneri ve geri bildirimleriniz için bize ulaşmaktan çekinmeyin. Sizinle tanışmak ve deneyimlerinizi dinlemek bizi mutlu eder.
      </p>
      <form className="mt-6 max-w-lg mx-auto p-8 border rounded-lg shadow-md bg-white">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Adınız Soyadınız</label>
          <input id="name" type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">E-posta Adresiniz</label>
          <input id="email" type="email" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Mesajınız</label>
          <textarea id="message" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" rows={4}></textarea>
        </div>
        <button type="submit" className="w-full mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Gönder
        </button>
      </form>
    </div>
  );
};

export default Contact;