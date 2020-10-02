import React from 'react';
import { Link } from "react-router-dom";
import './App.css';
import RouterComponents from './Router/router'
import styled from 'styled-components'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'


const SideBar = styled.div`
  padding: 10px;
  width: 100px;
  height: 100vh;
  background: #F05965;
`;

function App() {
  return (
    <div style={{ display: "flex" }}>
      <SideBar>
        {/* <div>
          <img src="https://www.pngkit.com/png/full/115-1150342_user-avatar-icon-iconos-de-mujeres-a-color.png" alt=""/>
        </div> */}

        <ul style={{ listStyleType: "none", padding: 0 }}>
        <ButtonGroup vertical>
        <Button><Link to="/">Dashboard</Link></Button>
        <Button>Dashboard</Button>
        <Button>Dashboard</Button>
        <Button>Dashboard</Button>
        </ButtonGroup>

          <li><Link to="/">dashboard</Link></li>
          <li>
            <Link to="/ejercicios">Ejercicios</Link>
          </li>
          <li>
            <Link to="/calendario">Calendario</Link>
          </li>
        </ul>
      </SideBar>
      <RouterComponents />

    </div>

  );
}

export default App;
