import React from 'react';
import AppBar from 'material-ui/AppBar';
import { Meteor } from 'meteor/meteor';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import { Link } from 'react-router-dom';


import './styles.css';
// import logo from '../../../images/debate-logo.png';

const styles = {
  title: {
    cursor: 'pointer',
  },
};

const Header = () => (
  <div>
    <AppBar
      showMenuIconButton={false}
      title={
          <Link to={"/"}>'Bate It</Link>
        }
    >
  <Link to={`/profile/${Meteor.userId()}`}>
    <RaisedButton label="My Profile" primary={true} buttonStyle={{
      height: '3.75rem',
      width: '8rem'
    }} />
  </Link>
  <Link to='/login'>
    <RaisedButton label="Log In" secondary={true} buttonStyle={{
      height: '3.75rem',
      width: '8rem'
    }} />
  </Link>
  <RaisedButton
    label="Log Out"
    secondary={true}
    buttonStyle={{
      height: '3.75rem',
      width: '8rem'
    }}
    onTouchTap={() => Meteor.logout()}
  />       
    </AppBar>
  </div>
);


export default Header;