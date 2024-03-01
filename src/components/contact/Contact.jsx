import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import github from "../../img/GitHub.png";
import fb from "../../img/fb.png";
import inta from "../../img/instagram.png";
import medium from "../../img/medium_icon.png";

const Contact = () => {
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Feel Free to e-mail</h1>
          <div className="c-info">
            <div className="c-info-item">
              <a href="tel:+94771531590">
                <img src={Phone} alt="" className="c-icon" />
                +94 771531590
              </a>
            </div>
            <div className="c-info-item">
              <a href="mailto:govinnachiran@gmail.com">
                <img className="c-icon" src={Email} alt="" />
                govinnachiran@gmail.com
              </a>
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address}/>
              51/6/A Godagama Road, Athurugiriya.
            </div>
            <div className="c-info-item">
              <a href="https://github.com/chirangovinna">
                <img className="c-icon" src={github} alt="github" />
                github.com/chirangovinna
              </a>
            </div>
            <div className="c-info-item">
              <a href="https://medium.com/@govinnachiran">
                <img className="c-icon" src={medium} alt="medium" />
                https://medium.com/@govinnachiran
              </a>
            </div>
            <div className="c-info-item">
              <a href="https://www.linkedin.com/in/chiran-govinna-061362288/">
                <img className="c-icon" src={inta} alt="instagam" />
                https://www.linkedin.com/in/chiran-govinna-061362288/
              </a>
            </div>
            <div className="c-info-item">
              <a href="https://www.facebook.com/profile.php?id=100088987451761">
                <img className="c-icon" src={fb} alt="facebook" />
                https://www.facebook.com/profile.php?id=100088987451761
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


// const Contact = () => {
//   return (
//     <div className="c">
//       <div className="c-bg"></div>
//       <div className="c-wrapper">
//         <div className="c-left">
//           <h1 className="c-title">Feel Free to e-mail</h1>
//           <div className="c-info">
//             <div className="c-info-item">
//               <img src={Phone} alt="" className="c-icon" />
//               +94 771531590
//             </div>
//             <div className="c-info-item">
//               <img className="c-icon" src={Email} alt="" />
//               govinnachiran@gmail.com
//             </div>
//             <div className="c-info-item">
//               <img className="c-icon" src={Address} alt="" />
//               51/6/A Godagama Road, Athurugiriya.
//             </div>
//             <div className="c-info-item">
//               <img className="c-icon" src={github} alt="github" />
//               https://github.com/chirangovinna
//             </div>
//             <div className="c-info-item">
//               <img className="c-icon" src={inta} alt="instagam" />
//               https://www.linkedin.com/in/chiran-govinna-061362288/
//             </div>
//             <div className="c-info-item">
//               <img className="c-icon" src={fb} alt="facebook" />
//               https://www.facebook.com/profile.php?id=100088987451761
//             </div>
//             <div className="c-info-item">
//               <img className="c-icon" src={medium} alt="medium" />
//               https://medium.com/@govinnachiran
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

export default Contact;
