import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Hakkımızda</h2>
      <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700">
        <p>
          Cümbüş Kafe, sadece bir restoran değil, bir yaşam tarzı sunar. Yıllardır biriktirdiğimiz tecrübemiz ve lezzet tutkumuzla, misafirlerimize unutulmaz deneyimler yaşatmayı hedefliyoruz. Menümüz, geleneksel Türk mutfağının sıcaklığıyla dünya mutfağının modern dokunuşlarını bir araya getiriyor.
        </p>
        <p>
          Her bir yemeğimiz, en taze ve yerel malzemeler kullanılarak özenle hazırlanır. Sadece midenizi değil, ruhunuzu da doyurmak için tasarlanmış samimi ve davetkar bir atmosferde, sevdiklerinizle keyifli anlar yaşamanız için her detayı düşündük.
        </p>
        <p>
          İyi bir geliştiricinin kodun felsefesini anlaması gibi, biz de iyi bir yemeğin sadece lezzetten ibaret olmadığını biliyoruz. Bu yüzden her bir tabağımızda, sanat, estetik ve tutku bir araya gelir. Bizimle geçirdiğiniz her an, sıradanlıktan uzak, keyif dolu bir cümbüşe dönüşür.
        </p>
      </div>
    </div>
  );
};

export default About;