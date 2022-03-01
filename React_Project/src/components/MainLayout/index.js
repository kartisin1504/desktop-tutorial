import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import {ReactComponent as ViasatLogo} from '../../static/img/logo.svg';
import './styles.css';

function MainLayout(props) {
  return (
    <main>
      <header className="header-container">
        <ViasatLogo className="header-logo" />
        <div className="header-nav" style={{}}>
          <div className="header-nav-item-wrapper">
            <NavLink className="header-nav-item" to="/">
              Catch'Em
            </NavLink>
          </div>
          <NavLink className="header-nav-item" to="/pokebox">
            PokeBox
          </NavLink>
          <NavLink className="header-nav-item" to="/pokedex">
            PokeDex
          </NavLink>
        </div>
      </header>
      {props.children}
    </main>
  );
}

MainLayout.propTypes = {
  children: PropTypes.any,
};

export default MainLayout;
