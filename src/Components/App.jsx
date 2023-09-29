
import React from 'react';
import ReactDOM from 'react-dom/client';
import MainNavbar from './MainNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Skills from './Skills';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Experience from './Experience';
import Education from './Education';
import Footer from './Footer';
import SecttionHeadingHr from './SectionHeadingHr';



export default class App extends React.Component {
  state = {
    total: null,
    next: null,
    operation: null,
  };


  render() {
    return (
      <div className="component-app">
        <MainNavbar />
        <div>
          <AboutMe />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Footer />
        </div>
      </div>
    )
  }
}