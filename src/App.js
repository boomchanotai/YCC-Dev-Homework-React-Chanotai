import React from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';
import Footer from './Footer';
import macbook from './img/macbook-clipart-png-macbook-pro-png-transparent-free-download-for-macbook-pro-png-1440_695@2x.png';
import {Link } from 'react-router-dom';

class App extends React.Component {
  componentDidMount(){
    $("#macbook-info").click(function(){
      window.location.href="/Macbook";
    })
    $("#surface-info").click(function(){
      window.location.href="/Surface";
    })
    $("#swift-info").click(function(){
      window.location.href="/Swift";
    })
    $("#xps-info").click(function(){
      window.location.href="/XPS";
    })
    $("#zenbook-info").click(function(){
      window.location.href="/ZenBook";
    })
    $("#macbook-sec").click(function(){
      $('html, body').animate({
          scrollTop: $(".macbookprv").offset().top
      }, 800);
    })
    $("#surface-sec").click(function(){
        $('html, body').animate({
            scrollTop: $(".section2").offset().top - 40
        }, 800);
    })
    $("#swift-sec").click(function(){
        $('html, body').animate({
            scrollTop: $(".section2").offset().top - 40
        }, 800);
    })
    $("#xps-sec").click(function(){
        $('html, body').animate({
            scrollTop: $(".section3").offset().top - 40
        }, 800);
    })
    $("#zenbook-sec").click(function(){
        $('html, body').animate({
            scrollTop: $(".section3").offset().top - 40
        }, 800);
    })
  }

  render(){
    return(
      <div>
        <Navbar1 />
        <Section1 />
        <Section2 />
        <Section3 />
        <Footer />
      </div>
    );
  }
}

function Navbar1() {
  return (
    <div className="navbar">
      <nav>
        <div>
          <a id="macbook-sec">Macbook</a>
          <a id="surface-sec">Surface</a>
          <a id="swift-sec">Swift</a>
          <a id="xps-sec">XPS</a>
          <a id="zenbook-sec">ZenBook</a>
        </div>
      </nav>
    </div>
  );
}

function Section1() {
  return(
    <div className="macbookprv">
      <div>New</div>
      <h1>MacBook Pro</h1>
      <div>Prolong in the dark.</div>
      <div id="macbook-info"><a href="#">Learn more</a></div>
      <div>
        <img src={macbook}></img>
      </div>
    </div>
  );
}

function Section2() {
  return(
    <div className="section2">
      <div id="surface-info">
        <h1>Surface Pro X</h1>
        <p>A new generation of Surface.</p>
      </div> 
      <div id="swift-info">
        <h1>Swift 7</h1>
        <p>Light and Powerful.</p>
      </div>
    </div>
  );
}

function Section3() {
  return(
    <div className="section3">
      <div id="xps-info">
        <h1>XPS</h1>
        <p>World of Edge to Edge Display.</p>
      </div>
      <div id="zenbook-info">
        <h1>ZenBook Pro</h1>
        <p>Extend the Imagination.</p>
      </div>
    </div>
  );
}

export default App;
