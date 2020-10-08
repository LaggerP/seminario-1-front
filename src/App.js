import React from 'react';
import { Link, Redirect } from "react-router-dom";
import './App.css';
import Auth from './Api/Auth/fakeAuth';
import RouterComponents from './Router/routes'
import styled from 'styled-components'
import fakeAuth from './Api/Auth/fakeAuth'
import { AiOutlineHome, AiOutlineCheckCircle } from "react-icons/ai";
import { BsBoxArrowRight, BsCalendar } from "react-icons/bs";
import { BiMessageRoundedError } from "react-icons/bi";
import { GiPerspectiveDiceSixFacesOne } from "react-icons/gi";
import { useHistory } from 'react-router-dom';


const SideBar = styled.div`
  padding: 20px 20px 20px 0;
  width: 110 px;
  height: 100vh
  ;
  background: rgba(252, 109, 120, 0.9);
`;

const Component = styled.div`
  margin-left: 30px;
`

const UserIcon = styled.div`
  margin: 5px auto 75px 15px;
  text-align: center;
`

const Exit = styled.div`
  height: 50px;
  width: auto;
  padding-top: 20px;
  text-align: center;
  background: #F05965;
`


function App() {

  // This variable determines if the menu should be displayed
  const userLogged = fakeAuth.isConnected();

  let history = useHistory();

  const fakeLogOut = () => {
    Auth.signOut(history.push("/"))
    window.location.reload(false);
 }

  return (

    <div style={{ display: "flex" }}>
      {
        userLogged ? <div>
        
        <SideBar>

          <UserIcon>
            <img src="https://www.pngkit.com/png/full/115-1150342_user-avatar-icon-iconos-de-mujeres-a-color.png" alt="userPhoto" height="75px" width="auto" id="icon" />
          </UserIcon>

          <ul style={{ listStyleType: "none", padding: 0 }}>
            <Link to="/" style={{ textDecoration: 'none' }} >
              <button className="button-text" data-hover="Dashboard"><div><AiOutlineHome className="iconStyle"/></div></button>
            </Link>
          </ul>

          <ul style={{ listStyleType: "none", padding: 0 }}>
            <Link to="/ejercicios" style={{ textDecoration: 'none' }}>
                <button className="button-text" data-hover="Ejercicios"><div><GiPerspectiveDiceSixFacesOne className="iconStyle" /></div></button>
            </Link>
          </ul>

          <ul style={{ listStyleType: "none", padding: 0 }}>
            <Link to="/seguimiento" style={{ textDecoration: 'none' }}>
                <button className="button-text" data-hover="Seguimiento"><div><AiOutlineCheckCircle className="iconStyle"/></div></button>
            </Link>
          </ul>

          <ul style={{ listStyleType: "none", padding: 0 }}>
            <Link to="/calendario" style={{ textDecoration: 'none' }}>
              <button className="button-text" data-hover="Calendario"><div><BsCalendar className="iconStyle"/></div></button>
            </Link>
          </ul>

          <ul style={{ listStyleType: "none", padding: 0 }}>
            <Link to="/consejos" style={{ textDecoration: 'none' }}>
              <button className="button-text" data-hover="Consejos"><div><BiMessageRoundedError className="iconStyle" /></div></button>
            </Link>
          </ul>

        </SideBar>

        <Exit>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <button onClick={fakeLogOut}><BsBoxArrowRight className="iconStyle" id="iconExit"/></button>
            </ul>
            
        </Exit>

        </div>: <Redirect to={{ pathname: '/login' }} />
      }
      <Component>
        <RouterComponents />
      </Component>

    </div>

  );
}

export default App;
