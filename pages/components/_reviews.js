import React, { useEffect, useState } from 'react';
import styles from '@/styles/Reviews.module.css';
import Image from "next/image";
import { useTranslation } from 'next-i18next';

const Reviews = () => {
    const { i18n } = useTranslation('translation'); // Menggunakan useTranslation untuk mendapatkan bahasa saat ini
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await fetch('https://prahwa.net/api/review', {
                    method: 'GET',
                    headers: {
                        'api_key': 'TddGvkPqgaq1kv6LOckmTwXnz8uHE859qlnqW3d8'
                    }
                });
                const data = await response.json();
                setReviews(data.data);
            } catch (error) {
                console.error('Error fetching reviews:', error);
            }
        };
        fetchReviews();
    }, []);

    const currentLanguage = i18n.language; // Mendapatkan bahasa saat ini

    return (
        <div className={styles.reviewsContainerLayout}>
            <div className={styles.reviewsContainer}>
                {reviews.map(review => (
                    <div key={review.id} className={styles.review}>
                        <div className={styles.images}>
                            <Image src="/image/imagereviews.png" width={500} height={500} className={styles.imageReview} alt="" />
                            <hr/>
                        </div>
                        <b>{currentLanguage === 'en' ? review.title_en : review.title}</b>
                        <p dangerouslySetInnerHTML={{ __html: currentLanguage === 'en' ? review.description_en : review.description }}></p>
                        <p className={styles.tgl}>{review.date}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Reviews;
