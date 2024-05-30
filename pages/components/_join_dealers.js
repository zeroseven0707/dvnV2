
import Join from "../../public/styles/Join.module.css"; 

const JoinDealers = () => {
  return (
    <div className={Join.container}>
          <img src="/image/awankirifooter.png" className={Join.awan} />
            <form className={Join.form}>
                <p>Join Dealers</p>
                <input type="text" placeholder="Email Address" className={Join.email}/>
                <input className={Join.noHP} placeholder="Handphone no"/>
                <button className={Join.button}>Sign Up</button>
            </form>
        </div>
        
        
  );
};

export default JoinDealers;
