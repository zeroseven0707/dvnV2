import React, { useRef } from 'react';
import styles from '@/styles/Reviews.module.css';
import Image from "next/image";

const Reviews = () => {
    return (
        <div className={styles.reviewsContainerLayout}>
            <div className={styles.reviewsContainer}>
                <div className={styles.review}>
                    <div className={styles.images}>
                        <Image src="/image/imagereviews.png" width={500} height={500} className={styles.imageReview} alt="" />
                        <hr/>
                    </div>
                    <b>Perfect!</b>
                    <p>Noticed a difference in 7 days</p>
                    <p className={styles.tgl}>Jan 21, 2024</p>
                </div>
                <div className={styles.review}>
                <div className={styles.images}>
                        <Image src="/image/imagereviews.png" width={500} height={500} className={styles.imageReview} alt=""/>
                        <hr/>
                    </div>
                    <b>This is the best.</b>
                    <p>Speechless at how powerful this is for my skin!</p>
                    <p className={styles.tgl}>Jan 25, 2024</p>
                </div>
                <div className={styles.review}>
                <div className={styles.images}>
                        <Image src="/image/imagereviews.png" width={500} height={500} className={styles.imageReview} alt=""/>
                        <hr/>
                    </div>
                    <b>Speechless</b>
                    <p>I can&apos;t say anything than WONDERFUL product...</p>
                    <p className={styles.tgl}>Feb 12, 2024</p>
                </div>
                <div className={styles.review}>
                <div className={styles.images}>
                        <Image src="/image/imagereviews.png" width={500} height={500} className={styles.imageReview} alt=""/>
                        <hr/>
                    </div>
                    <b>WOW!</b>
                    <p>Amazing stuff everyone should try this for sure!</p>
                    <p className={styles.tgl}>Feb 15, 2024</p>
                </div>
                <div className={styles.review}>
                <div className={styles.images}>
                        <Image src="/image/imagereviews.png" width={500} height={500} className={styles.imageReview} alt=""/>
                        <hr/>
                    </div>
                    <b>Make my skin soft</b>
                    <p>Tried this for 5 days and already see the difference...</p>
                    <p className={styles.tgl}>Feb 23, 2024</p>
                </div>
            </div>
        </div>
    );
};

export default Reviews;