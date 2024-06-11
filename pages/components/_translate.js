import { useTranslation } from 'next-i18next';
import navbar from "../../public/styles/navbar.module.css";

const MyComponent = () => {
  const { t, i18n } = useTranslation('common');

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={navbar.translate}>
      <button 
        className={navbar.id} 
        onClick={() => changeLanguage('id')}
        type="button"
      >
        ID
      </button>
      <button 
        className={navbar.en} 
        onClick={() => changeLanguage('en')}
        type="button"
      >
        EN
      </button>
    </div>
  );
};

export default MyComponent;
