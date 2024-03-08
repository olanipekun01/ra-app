import React, { Component } from 'react'

import Footer from './Footer';
import Home from './Home';
import Navbar from './Navbar';
import TrustedCompanies from './TrustedCompanies';
import Faq from './Faq';
import BatchManagement from './BatchManagement';
import Management from './Management';
import { TrackingData, BatchData } from './data';


export default class Compile extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Home />
        <TrustedCompanies />
        <BatchManagement Data={BatchData} />
        <Management Data={TrackingData} />
        <Faq />
        <Footer />
      </>
    )
  }
}
