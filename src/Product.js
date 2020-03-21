import React from 'react';
import './Product.css';
import Footer from './Footer';
import macbook from './img/macbook-clipart-png-macbook-pro-png-transparent-free-download-for-macbook-pro-png-1440_695@2x.png';
import surface from './img/Image4@2x.png';
import swift from './img/Image5@2x.png';
import xps from './img/20180216-150622_c-removebg-preview@2x.png';
import zenbook from './img/Image7@2x.png';
import $ from 'jquery';

class Product extends React.Component{
  render(){
    return(
      <div>
        <Navbar2 />
        <Macbook />
        <Surface />
        <Swift />
        <XPS />
        <ZenBook />
      </div>
    );
  }
}

function Navbar2() {
    return (
      <div className="navbar">
        <nav>
          <div>
            <a id="macbook-info">Macbook</a>
            <a id="surface-info">Surface</a>
            <a id="swift-info">Swift</a>
            <a id="xps-info">XPS</a>
            <a id="zenbook-info">ZenBook</a>
          </div>
        </nav>
      </div>
    );
}

function Macbook() {
    return(
        <div className="container">
            <div className="back" id="back">&lt; Back</div>
            <div className="container-fluid">
                <div>
                    <img src={macbook}></img>
                </div>
                <div>
                    <h1>Customize your MacBook Pro</h1>
                    <div>
                        1.4GHz quad‑core 8th‑generation Intel Core i5 processor, Turbo Boost up to 3.9GHz <br />
                        8GB 2133MHz LPDDR3 memory <br />
                        Retina display with True Tone <br />
                        Intel Iris Plus Graphics 645 <br />
                        Two Thunderbolt 3 ports <br />
                        Touch Bar and Touch ID <br />
                        Backlit Keyboard - US English
                    </div>
                    <h1>Storage</h1>
                    <div class="ssd">256GB SSD Storage</div>
                    <div class="ssd">512GB SSD Storage</div>
                    <div class="ssd">1TB SSD Storage</div>
                    <h2>Pricing</h2>
                    <h1>64,900 Baht</h1>
                    <button class="purchase">Purchase</button>
                </div>
            </div>
        </div>
    );
}

function Surface() {
  return(
      <div className="container">
          <div className="back">&lt; Back</div>
          <div className="container-fluid">
              <div>
                  <img src={surface}></img>
              </div>
              <div>
                  <h1>Customize your Surface Pro X</h1>
                  <div>
                    Microsoft® SQ1™ <br />
                    8GB or 16GB LPDDR4x RAM <br />
                    PixelSense™ Display <br />
                    Microsoft® SQ1™ Adreno™ 685 GPU <br />
                    2 x USB-C®<br />
                    1 x Surface Connect port <br />
                    Surface Keyboard connector port <br />
                    1 x nano SIM <br />
                    Compatible with Surface Dial off-screen interaction* <br />
                    Firmware TPM <br />
                    Enterprise-grade protection with Windows Hello face sign-inBacklit
                  </div>
                  <h1>Storage</h1>
                  <div class="ssd">256GB SSD Storage</div>
                  <div class="ssd">512GB SSD Storage</div>
                  <div class="ssd">1TB SSD Storage</div>
                  <h2>Pricing</h2>
                  <h1>64,900 Baht</h1>
                  <button class="purchase">Purchase</button>
              </div>
          </div>
      </div>
  );
}

function Swift() {
  return(
      <div className="container">
          <div className="back">&lt; Back</div>
          <div className="container-fluid">
              <div>
                  <img src={swift}></img>
              </div>
              <div>
                  <h1>Customize your Acer Swift 7</h1>
                  <div>
                    1.5GHz Intel Core i7-8500Y (dual-core, 4MB cache, up to 4.2GHz) <br />
                    8GB LPDDR3 RAM <br />
                    Full HD CineCrystal IPS touch display <br />
                    Microsoft® SQ1™ Adreno™ 685 GPU <br />
                    2 x Thunderbolt 3 (USB-C), headset jack <br />
                    Intel Wireless-AC 9260 802.11ac Wi-Fi, Bluetooth
                  </div>
                  <h1>Storage</h1>
                  <div class="ssd">256GB SSD Storage</div>
                  <div class="ssd">512GB SSD Storage</div>
                  <h2>Pricing</h2>
                  <h1>42,900 Baht</h1>
                  <button class="purchase">Purchase</button>
              </div>
          </div>
      </div>
  );
}

function XPS() {
  return(
      <div className="container">
          <div className="back">&lt; Back</div>
          <div className="container-fluid">
              <div>
                  <img src={xps}></img>
              </div>
              <div>
                  <h1>Customize your XPS 13</h1>
                  <div>
                    1.8GHz Intel Core i7-8565U (quad-core, 8MB cache, up to 4.6GHz) <br />
                    16GB 2133MHz DDR3 memory RAM <br />
                    Intel UHD Graphics 620 <br />
                    Ultra HD UltraSharp InfinityEdge touch display <br />
                    2 x Thunderbolt 3 (USB-C) <br />
                    1 x USB-C 3.1 <br />
                    micro SD card reader <br />
                    headset jack <br />
                    Killer 1435 802.11ac Wi-Fi
                  </div>
                  <h1>Storage</h1>
                  <div class="ssd">256GB SSD Storage</div>
                <div class="ssd">512GB SSD Storage</div>
                <div class="ssd">1TB SSD Storage</div>
                  <h2>Pricing</h2>
                  <h1>69,900 Baht</h1>
                  <button class="purchase">Purchase</button>
              </div>
          </div>
      </div>
  );
}

function ZenBook() {
  return(
      <div className="container">
          <div className="back">&lt; Back</div>
          <div className="container-fluid">
              <div>
                  <img src={zenbook}></img>
              </div>
              <div>
                  <h1>Customize your ZenBook Pro</h1>
                  <div>
                    2.4GHz Intel Core i9-9980HK (octa-core, 16MB cache, up to 5GHz) <br />
                    32GB DDR4 RAM <br />
                    Nvidia GeForce RTX 2060 <br />
                    15.6-inch, OLED Ultra HD, <br />
                    14-inch Ultra HD touch display <br />
                    1 x Thunderbolt 3 <br />
                    2 x USB-C 3.1 <br />
                    HDMI 2.0 <br />
                    headset jack <br />
                    Intel Wi-Fi 6 with Gig+ performance <br />
                    IR webcam with Windows Hello support 
                  </div>
                  <h1>Storage</h1>
                  <div class="ssd">1TB SSD Storage</div>
                  <h2>Pricing</h2>
                  <h1>109,900 Baht</h1>
                  <button class="purchase">Purchase</button>
              </div>
          </div>
      </div>
  );
}

export default Product;
export {Navbar2, Macbook, Surface, Swift, XPS, ZenBook};