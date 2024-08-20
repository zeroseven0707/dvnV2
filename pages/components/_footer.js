import { useState, useEffect } from 'react';
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useTranslation } from 'next-i18next';
import Image from "next/image";

const Footer = () => {
    const { t } = useTranslation('translation');
    const [socialMedia, setSocialMedia] = useState([]);
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchSocialMedia = async () => {
            try {
                const response = await fetch('https://prahwa.net/api/socialmedia', {
                    headers: {
                        'api_key': 'TddGvkPqgaq1kv6LOckmTwXnz8uHE859qlnqW3d8'
                    }
                });
                if (response.ok) {
                    const data = await response.json();
                    setSocialMedia(data.data);
                } else {
                    console.error('Failed to fetch social media');
                }
            } catch (error) {
                console.error('Error fetching social media:', error);
            }
        };

        fetchSocialMedia();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://prahwa.net/api/contacts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'api_key': 'TddGvkPqgaq1kv6LOckmTwXnz8uHE859qlnqW3d8'
                },
                body: JSON.stringify({
                    title: email,
                    description: message
                })
            });

            if (response.ok) {
                console.log('Message sent successfully!');
                setEmail(''); // Reset email input
                setMessage(''); // Reset message textarea
            } else {
                console.error('Failed to send message');
            }
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    return (
        <section>
            <div className={styles.footer}>
                <div className={styles.contentFooter}>
                    <div className={styles.containerText2}>
                        <Image src="/image/dvn-logo.svg" width={500} height={500} className={styles.dvnLogo} alt="" />
                        <hr className={styles.garisFooter} />
                        <ul className={styles.footer_ul}>
                            <li className={styles.footer_li}><Link href="/product" suppressHydrationWarning>{t('learn more')}</Link> </li>
                            <li className={styles.footer_li}><Link href="/" suppressHydrationWarning>{t('contact us')}</Link></li>
                            <li className={styles.footer_li}><Link href="/faqs" suppressHydrationWarning>{t('faqs')}</Link></li>
                        </ul>
                        <div className={styles.social_media}>
                            {socialMedia.map(item => (
                                <Link key={item.id} href={`https://${item.link}`} passHref>
                                        <Image className={styles.sosmedImage} width={500} height={500} alt="" src={`https://prahwa.net/storage/${item.image}`} />
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className={styles.containerForm}>
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <p suppressHydrationWarning>{t('get in')}</p>
                            <input
                                type="text"
                                placeholder={t('email')}
                                className={styles.input}
                                suppressHydrationWarning
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <textarea
                                className={styles.message}
                                placeholder={t('message')}
                                suppressHydrationWarning
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            ></textarea>
                            <button className={styles.button} suppressHydrationWarning type="submit">
                                {t('send')}
                            </button>
                        </form>
                    </div>
                </div>
                <picture>
                    <source srcSet="/image/awan-mobile-kiri.png" media="(max-width: 768px)" />
                    <Image className={styles.awankiri} width={500} height={500} src="/image/KIRI.svg" alt="kiri" />
                </picture>
                <Image className={styles.awankanan} width={500} height={500} src="/image/awankananfooter.png" alt="kanan" />
                <footer className={styles.textFooter}>Copyright © 2024 dvn.id</footer>
            </div>
        </section>
    );
};

export default Footer;
