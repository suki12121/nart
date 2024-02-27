import {FaWhatsapp} from 'react-icons/fa6'
import {FaFacebook} from 'react-icons/fa'
import {TbWorldWww} from 'react-icons/tb'

import './index.css'

const MainPage = () => (
  <div className="main-bg">
    <div className="first-bg">
      <div>
        <img
          src="https://res.cloudinary.com/dpc6omn5w/image/upload/v1709011771/1_akgsty.png"
          alt="trophy"
          className="trophy-bg"
        />
      </div>
      <div>
        <img
          src="https://res.cloudinary.com/dpc6omn5w/image/upload/v1709014256/logo_dyi7zs.png"
          alt="logo"
          className="logo-img-bg"
        />
        <h3>
          C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the
          4th time.
        </h3>

        <ul>
          <li>
            <p>
              C.R.I energy efficient products are well recognized by various
              Government Institutions, as trustworthy products for various
              projects across the globe to save energy.
            </p>
          </li>
          <li>
            <p>
              C.R.I. is the highest contributor in the country for the projects
              of EESL (Energy Efficiency Services Limited) to replace the old
              inefficient pumps with 5 Star rated energy efficient smart pumps
              with IoT enabled control panel.{' '}
            </p>
          </li>
        </ul>
        <img
          src="https://res.cloudinary.com/dpc6omn5w/image/upload/v1709015705/2_ufmh9l.png"
          alt="cheif-imgae"
          className="cheif-img"
        />
        <p>
          Government of India has awarded the &quot National Energy Conservation
          Award 2018 &quot. Mr. G. Selvaraj, Joint Managing Director of C.R.I.
          Group received the award from Smt. Sumitra Mahajan, Speaker of Lok
          Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
        </p>
      </div>
    </div>
    <div className="second-bg">
      <p>
        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING
        IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE
        NATION.
      </p>
      <img
        src="https://res.cloudinary.com/dpc6omn5w/image/upload/v1709016350/3_apsnb7.png"
        alt="demo-pipes"
        className="pipe-img"
      />
      <p className="passage">
        Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
        Solar Systems - Motors
      </p>
      <hr className="break" />
      <h3 className="passage">
        C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
      </h3>
      <p>
        CHEMICALS & PROCESS POWER WATER & WASTE WATER OILS & GAS PHARMA SUGARS &
        DISTILLERIES PAPER & PULP MARINE & DEFENCE METAL & MINING FOOD &
        BEVERAGE PETROCHEMICAL & REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING
        AGRICULTURE & RESIDENTIAL
      </p>
    </div>
    <div className="contact-bg">
      <div className="information-bg">
        <FaWhatsapp className="icon" />
        <p className="contact-passage">
          Toll free<span className="span-p">1800 200 1734</span>
        </p>
      </div>
      <div className="information-bg">
        <FaFacebook className="icon" />
        <p className="contact-passage">www.facebook.com/crimcum</p>
      </div>
      <div className="information-bg">
        <TbWorldWww className="icon" />
        <p className="contact-passage">www.crigroups.com</p>
      </div>
    </div>
  </div>
)

export default MainPage
