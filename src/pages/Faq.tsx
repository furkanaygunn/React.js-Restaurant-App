import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const Faq: React.FC = () => {
  const faqData = [
    {
      question: 'YaseCAFE hafta sonu açık mı?',
      answer: 'Evet, kafemiz hafta içi 09:00 - 22:00, hafta sonu ise 10:00 - 23:00 saatleri arasında hizmet vermektedir.'
    },
    {
      question: 'Rezervasyon yapabilir miyiz?',
      answer: 'Evet, yoğunluktan etkilenmemeniz için özellikle hafta sonları rezervasyon yapmanızı öneriyoruz. İletişim sayfamızdan bize ulaşarak rezervasyon yaptırabilirsiniz.'
    },
    {
      question: 'Menünüzde vegan veya vejetaryen seçenekler var mı?',
      answer: 'Kesinlikle! Menümüzde farklı damak zevklerine hitap eden birçok vegan ve vejetaryen yemek seçeneği bulunmaktadır. Personelimizden detaylı bilgi alabilirsiniz.'
    },
    {
      question: 'Otopark imkanınız var mı?',
      answer: 'Evet, misafirlerimiz için restoranımızın hemen yanında ücretsiz otoparkımız mevcuttur.'
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Sıkça Sorulan Sorular</h2>
      <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto mb-8">
        Aklınıza takılan soruların cevaplarını burada bulabilirsiniz.
      </p>

      <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
        {faqData.map((item, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`}>
            <AccordionTrigger className="text-left font-medium">
              {item.question}
            </AccordionTrigger>
            <AccordionContent>
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Faq;