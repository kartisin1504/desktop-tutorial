import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Routes from './Routes';
import './App.css';

// Polyfills
import smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill();

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps) {
    const {location} = this.props;
    const locationChange = location.pathname !== nextProps.location.pathname;
    return locationChange;
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return <Routes />;
  }
}
App.propTypes = {
  location: PropTypes.object,
  locale: PropTypes.string,
  changeLocale: PropTypes.func,
};

export default connect(null, null)(withRouter(App));
