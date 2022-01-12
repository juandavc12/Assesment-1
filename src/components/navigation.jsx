/* eslint-disable object-curly-newline */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';

export default function Navigation() {
  const [dropdown, setDropdown] = useState(false);

  const abrirCerrarDropdown = () => {
    setDropdown(!dropdown);
  };
  return (
    <div className="Header">
      <h2>ASSESMENT I</h2>
      <Dropdown className="dropdown" isOpen={dropdown} toggle={abrirCerrarDropdown}>
        <DropdownToggle caret>
          MENU
        </DropdownToggle>

        <DropdownMenu>
          <DropdownItem header>Navigation</DropdownItem>
          <DropdownItem divider />
          <DropdownItem><Link to="/">Home</Link></DropdownItem>
          <DropdownItem><Link to="/About">About</Link></DropdownItem>

        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
