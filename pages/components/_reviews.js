import React, { useRef } from 'react';
import styles from '../../public/styles/Reviews.module.css';

const Reviews = () => {
    return (
        <div className={styles.reviewsContainer}>
            <div className={styles.review}>
                <div className={styles.images}>
                    <img src="/image/imagereviews.png" className={styles.imageReview} />
                    <hr/>
                </div>
                <b>Perfect!</b>
                <p>Noticed a difference in 7 days...</p>
                <p className={styles.tgl}>Jan 21, 2024</p>
            </div>
            <div className={styles.review}>
            <div className={styles.images}>
                    <img src="/image/imagereviews.png" className={styles.imageReview}/>
                    <hr/>
                </div>
                <b>This is the best.</b>
                <p>Speechless at how powerful this is for my skin!</p>
                <p className={styles.tgl}>Jan 25, 2024</p>
            </div>
            <div className={styles.review}>
            <div className={styles.images}>
                    <img src="/image/imagereviews.png" className={styles.imageReview}/>
                    <hr/>
                </div>
                <b>Speechless</b>
                <p>I can&apos;t say anything than WONDERFUL product...</p>
                <p className={styles.tgl}>Feb 12, 2024</p>
            </div>
            <div className={styles.review}>
            <div className={styles.images}>
                    <img src="/image/imagereviews.png" className={styles.imageReview}/>
                    <hr/>
                </div>
                <b>WOW!</b>
                <p>Amazing stuff everyone should try this for sure!</p>
                <p className={styles.tgl}>Feb 15, 2024</p>
            </div>
            <div className={styles.review}>
            <div className={styles.images}>
                    <img src="/image/imagereviews.png" className={styles.imageReview}/>
                    <hr/>
                </div>
                <b>Make my skin soft</b>
                <p>Tried this for 5 days and already see the difference...</p>
                <p className={styles.tgl}>Feb 23, 2024</p>
            </div>
        </div>
    );
};

export default Reviews;
