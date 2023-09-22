import './index.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import Popup from 'reactjs-popup'

function Navbar() {
    return (
        <nav className='all-align'>
        <div  className="logo-align">
        <div className='img-align'>
        <img className="nav-logo" src="https://res.cloudinary.com/dbpsrpa2n/image/upload/v1695128704/NIL_logo_Transparent_1_1_uhvyc9.png" alt="logo"/>
        <img className="company-name" src="https://res.cloudinary.com/dbpsrpa2n/image/upload/v1695128713/Screenshot_2023-07-25_165513-removebg-preview_1_kd8ned.png" alt="notinline"/>
        </div>
        <div className="para-align">
        <p className="logo-para">Home</p>
        <p className="logo-para">Health conditions</p>
        <p className="logo-lab">lab tests</p>
        <p className="logo-para">Medicine</p>
        <div className="button-align">
        <button className="logo-button">For patients</button>
        <button className="logo-button">For hospitals</button>
        </div>
        <button className="play-button">
          <img className="play-img" src="https://res.cloudinary.com/dbpsrpa2n/image/upload/v1695131048/Rectangle_48_n1alay.png" alt="play-store"/>
          <p className="play-para">play store</p>
        </button>
        </div>
        </div>
        <div>
        <Popup
          trigger={
            <button type="button" className='hamburger'>
              <GiHamburgerMenu size={25}/>
            </button>
          }
        >
          {close => (
            <div className="modal-container">
              <ul className='popup-align'>
              <li className="logo-para">Home</li>
              <li className="logo-para">Health conditions</li>
              <li className="logo-lab">lab tests</li>
              <li className="logo-para">Medicine</li>
              <li>
              <button className="logo-button">For patients</button>
              <button className="logo-button">For hospitals</button>
              </li>
              <li className='button-align'>
              <button className="play-button">
              <img className="play-img" src="https://res.cloudinary.com/dbpsrpa2n/image/upload/v1695131048/Rectangle_48_n1alay.png" alt="play-store"/>
              <p className="play-para">play store</p>
              </button>
              </li>
              </ul>
              <button type="button" className="close-btn">
                <AiOutlineCloseCircle size={18} onClick={() => close()} />
              </button>
            </div>
          )}
        </Popup>
        </div>

      </nav>
    );
  }

export default Navbar