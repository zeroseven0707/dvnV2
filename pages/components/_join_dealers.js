
import Join from "@/styles/Join.module.css"; 
import { useTranslation } from 'next-i18next';

const JoinDealers = () => {
  const { t } = useTranslation('translation');
  return (
    <div className={Join.container}>
            <form className={Join.form}>
                <p suppressHydrationWarning>{t('join dealers')}</p>
                <input type="text" placeholder={t('email address')} suppressHydrationWarning className={Join.email}/>
                <input className={Join.noHP} placeholder={t('no handphone')} suppressHydrationWarning/>
                <button className={Join.button} suppressHydrationWarning>{t('sign up')}</button>
            </form>
        </div>
        
        
  );
};

export default JoinDealers;
