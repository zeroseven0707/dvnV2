import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/Faqs.module.css';
import Burger from './components/_burger';
import Footer from './components/_footer';
import axios from 'axios'; // Import axios library
import { useTranslation } from 'next-i18next';

export default function Faqs() {
  const { i18n } = useTranslation('translation');
  const { t } = useTranslation('translation');
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    // Function to fetch FAQs from API
    const fetchFaqs = async () => {
      try {
        const response = await axios.get('https://prahwa.net/api/faqs', {
          headers: {
            api_key: 'TddGvkPqgaq1kv6LOckmTwXnz8uHE859qlnqW3d8'
          }
        });
        // Set the fetched FAQs to state
        setFaqs(response.data.data);
      } catch (error) {
        console.error('Error fetching FAQs:', error);
      }
    };

    // Call the fetchFaqs function when component mounts
    fetchFaqs();
  }, []); 
  const currentLanguage = i18n.language;
  return (
    <>
      <section>
        <div>
          <picture>
            <source srcSet="/image/mobile-faqs.svg" media="(max-width: 768px)" />
            <Image width={500} height={500} alt="" src="/image/faqs.png" className={styles.image} />
          </picture>
          <Image width={500} height={500} alt="" src="/image/awankirifooter.png" className={styles.awan} />
          <Image width={500} height={500} alt="" src="/image/awankirifooter.png" className={styles.awan2} />
          <Image width={500} height={500} alt="" src="/image/Botol DVN.svg" className={styles.image_product} />
          <div className={styles.header_text}>
            <p className={styles.faq_header} suppressHydrationWarning>{t('faqs')}</p>
            <p className={styles.question_header} suppressHydrationWarning>({t('frequently asked questions')})</p>
          </div>
        </div>
      </section>
      <Burger />
      <div className={styles.container}>
        <section>
          <div className={styles.title}>
            <p className={styles.faq} suppressHydrationWarning>{t('faqs')}</p>
            <p className={styles.question} suppressHydrationWarning>{t('frequently asked questions')}</p>
          </div>
          {/* Render fetched FAQs */}
          {faqs.map((faq) => (
            <details key={faq.id}>
              <summary>{currentLanguage === 'en' ? faq.question_en : faq.question}</summary>
              <p>{currentLanguage === 'en' ? faq.answer_en : faq.answer}</p>
            </details>
          ))}
        </section>
      </div>
      <Footer />
    </>
  );
}
