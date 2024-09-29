import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Container from './Container';
import Footer from './Footer';

export class Layout extends Component {
  render() {
      return (
        
        <div className='min-h-screen'>
          <Header/>
          <Container/>
          <Footer/>
        </div>
      );
  }
}

export default Layout;