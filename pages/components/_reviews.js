import React, { useEffect, useState } from 'react';
import styles from '@/styles/Reviews.module.css';
import Image from "next/image";

const Reviews = () => {
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
    return (
        <div className={styles.reviewsContainerLayout}>
            <div className={styles.reviewsContainer}>
                {reviews.map(review => (
                    <div key={review.id} className={styles.review}>
                        <div className={styles.images}>
                            <Image src="/image/imagereviews.png" width={500} height={500} className={styles.imageReview} alt="" />
                            <hr/>
                        </div>
                        <b>{review.title}</b>
                        <p dangerouslySetInnerHTML={{ __html: review.description }}></p>
                        <p className={styles.tgl}>{(review.date)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Reviews;
