
import Image from "next/image";
import perfect from "@/styles/Home.module.css"; 
import { useTranslation } from 'next-i18next';

const PerfectPage = () => {
  const { t } = useTranslation('translation');

  return (
    <div>
         <section>
          <div className={perfect.containerS2}>
              <div className={perfect.container}>
                <div className={perfect.value}>
                  <div>
                    <p className={perfect.text} suppressHydrationWarning>{t('wda')}</p>
                    <span className={perfect.span} suppressHydrationWarning>{t('ps')}</span>
                  </div>
                  <div className={perfect.rectangle}>
                    <div className={perfect.textValue}>
                    <p suppressHydrationWarning>“{t('wda-ps-detail')}”</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={perfect.container2}>
              <picture>
                <source srcSet="/image/mobile-beauty.png" media="(max-width: 768px)" />
                  <Image width={500} height={500} src="/image/section2.png"
                        alt="Vercel Logo"
                        className={perfect.picture}/>
                </picture>
              </div>
          </div>
      </section>
    </div>
  );
};

export default PerfectPage;
