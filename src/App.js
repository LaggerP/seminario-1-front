import React from 'react';
import { Link, Redirect } from "react-router-dom";
import './App.css';
import RouterComponents from './Router/routes'
import styled from 'styled-components'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'

import fakeAuth from './Api/Auth/fakeAuth'


const SideBar = styled.div`
  padding: 20px 20px 20px 0;
  width: 114px;
  height: 95.9vh;
  background: #F05965;
`;

const Component = styled.div`
  margin-left: 30px;
`

const MenuItem = styled.div` 
  margin-top: 30px;
  color: white;
  width: 86px;
  height: 87px;
  background: rgba(0, 94, 125, 0.48);
  border-radius: 0px 20px 20px 0px;
  text-decoration: none;
  display: flex;
  align-items: center;
`

function App() {

  // This variable determines if the menu should be displayed
  const userLogged = fakeAuth.isConnected(); 

  return (

    <div style={{ display: "flex" }}>
      {
        userLogged ? <SideBar>
          {/* <div>
          <img src="https://www.pngkit.com/png/full/115-1150342_user-avatar-icon-iconos-de-mujeres-a-color.png" alt=""/>
        </div> */}

          <ul style={{ listStyleType: "none", padding: 0 }}>
            <ButtonGroup vertical>
              <Button><Link to="/">Dashboard</Link></Button>
              <Button><Link to="/ejercicios">Ejercicios</Link></Button>
              <Button><Link to="/calendario">Calendario</Link></Button>
              <Button><Link to="/consejos">Consejos</Link></Button>
            </ButtonGroup>


            <Link to="/" style={{ textDecoration: 'none' }}>
              <MenuItem style={{ marginTop: 0 }}>
                Dashboard
              </MenuItem>
            </Link>
            <Link to="/ejercicios" style={{ textDecoration: 'none' }}>
              <MenuItem>
                Ejercicios
              </MenuItem>
            </Link>
            <Link to="/calendario" style={{ textDecoration: 'none' }}>
              <MenuItem>
                Calendario
              </MenuItem>
            </Link>
            <Link to="/consejos" style={{ textDecoration: 'none' }}>
              <MenuItem>
                Consejos
              </MenuItem>
            </Link>

          </ul>
        </SideBar> : <Redirect to={{ pathname: '/login' }} />
      }
      <Component>
        <RouterComponents />
      </Component>

    </div>

  );
}

export default App;
