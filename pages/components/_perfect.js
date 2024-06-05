
import Image from "next/image";
import perfect from "../../public/styles/Home.module.css"; 

const perfectPage = () => {
  return (
<section>
          <div className={perfect.containerS2}>
              <div className={perfect.container}>
                <div className={perfect.value}>
                  <div>
                    <p className={perfect.text}>What Define a</p>
                    <span className={perfect.span}>Perfect Skin?</span>
                  </div>
                  <div className={perfect.rectangle}>
                    <div className={perfect.textValue}>
                    <p>“For most Asians, perfect, pure, and radiant skin is the definition of ideal beauty.”</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={perfect.container2}>
              <picture>
            <source srcSet="/image/mobile-beauty.png" media="(max-width: 768px)"/>
            <Image src="/image/section2.png"
                  alt="Vercel Logo"
                  className={perfect.picture}
                  width={735}
                  height={599}/>
          </picture>
              </div>
          </div>
      </section>
      );
    };
    
    export default perfectPage;