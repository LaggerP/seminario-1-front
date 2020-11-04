import React, { useState } from 'react';
import { Link, Redirect } from "react-router-dom";
import './App.css';
import RouterComponents from './Router/routes'
import { isConnected, logOut, getProfiles, getRol } from './Api/services/authService'
import { AiOutlineHome, AiOutlineCheckCircle } from "react-icons/ai";
import { BsBoxArrowRight, BsCalendar } from "react-icons/bs";
import { BiMessageRoundedError, BiGift } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { GiPerspectiveDiceSixFacesOne } from "react-icons/gi";
import { useHistory } from 'react-router-dom';

function App() {

  // Fake Logout
  const userLogged = isConnected();

  const profiles = getProfiles();

  const rol = getRol();

  let history = useHistory();

  const LogOut = () => {
    logOut();
    history.push('/login')
    window.location.reload(false);
  }

  // Menu item selected
  const [menuItem, setSelected] = useState('Inicio');
  const [benefitsPoints, setBenefitsPoints] = useState(100);

  return (

    <div style={{ display: "flex" }}>
      {
        userLogged ? <div>

          <div className="vertical-nav scroller" id="sidebar">

            <div className="py-4">
              <div className="media-body">
                <div className='userNav'>
                  {
                    rol == 3?
                    <img src="https://www.pngkit.com/png/full/115-1150342_user-avatar-icon-iconos-de-mujeres-a-color.png" alt="userPhoto" height="75px" width="auto" id="icon" />
                  : <img src="https://www.news10.com/wp-content/uploads/sites/64/2020/05/medical-5047582_1280.png" alt="userPhoto" height="75px" width="auto" id="icon" />
                  }
                  
                </div>
                {
                  rol == 3 ?
                    <div className='userNav' style={{ color: 'white' }}>
                      <div>
                        <Link to="/beneficios" className='size' style={{ color: 'white', textDecoration: 'none', paddingTop: '5px' }}>
                          <BiGift style={{ height: '1.5em', width: '1.5em', }} />Premios
                        </Link>
                      </div>
                    </div> : null
                }
              </div>
            </div>

            <ul style={{ listStyleType: "none", padding: 0 }} className="nav flex-column mb-0 mt-2">

              <Link to="/" className='size'>
                <div className={menuItem === 'Inicio' ? 'menuItemSelected menu-button button-text' : 'menu-button button-text'} onClick={() => setSelected('Inicio')} data-hover="Inicio"><div><AiOutlineHome className="iconStyle" /></div></div>
              </Link>
              {
                rol == 3 ?
                  <Link to="/ejercicios" className='size'>
                    <div className={menuItem === 'Ejercicios' ? 'menuItemSelected menu-button button-text' : 'menu-button button-text'} onClick={() => setSelected('Ejercicios')} data-hover="Ejercicios"><div><GiPerspectiveDiceSixFacesOne className="iconStyle" /></div></div>
                  </Link>
                  : null
              }

              <Link to="/seguimiento" className='size'>
                <div className={menuItem === 'Seguimiento' ? 'menuItemSelected menu-button button-text' : 'menu-button button-text'} onClick={() => setSelected('Seguimiento')} data-hover="Seguimiento"><div><AiOutlineCheckCircle className="iconStyle" /></div></div>
              </Link>

              <Link to="/calendario" className='size'>
                <div className={menuItem === 'Calendario' ? 'menuItemSelected menu-button button-text' : 'menu-button button-text'} onClick={() => setSelected('Calendario')} data-hover="Calendario"><div><BsCalendar className="iconStyle" /></div></div>
              </Link>

              <Link to="/consejos" className='size'>
                <div className={menuItem === 'Consejos' ? 'menuItemSelected menu-button button-text' : 'menu-button button-text'} onClick={() => setSelected('Consejos')} data-hover="Consejos"><div><BiMessageRoundedError className="iconStyle" /></div></div>
              </Link>


              {
                rol == 2 ?
                  <Link to="/administrar" className='size'>
                    <div className={menuItem === 'Administrar' ? 'menuItemSelected menu-button button-text' : 'menu-button button-text'} onClick={() => setSelected('Administrar')} data-hover="Administrar"><div><FiEdit className="iconStyle" /></div></div>
                  </Link> : null

              }

            </ul>

            <div className='exit' onClick={LogOut}>
              <ul style={{ listStyleType: "none", padding: 0 }}>
                <div ><BsBoxArrowRight className="iconStyle center" id="iconExit" /></div>
              </ul>
            </div>

          </div>

        </div> : <Redirect to={{ pathname: '/login' }} />
      }

      <div className='component' id="content">
        <RouterComponents />
      </div>

    </div>

  );
}

export default App;