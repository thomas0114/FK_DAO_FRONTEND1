import './App.scss';
import './App_Mobile.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import { useState, useEffect } from 'react';
import { Box } from '@material-ui/core'
import Carousel from 'nuka-carousel';
import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3'

import Header from './components/layout/header'
import Navbar from './components/layout/navbar'
import Home from './pages/home'
import About from './pages/about'
import Whitepaper from './pages/whitepaper'
import Reserve from './pages/reserve'
import Claim from './pages/claim'

import img1 from './assets/slide/Untitled-1-02.png'
import img2 from './assets/slide/Untitled-1-03.png'
import img3 from './assets/slide/Untitled-1-04.png'
import img4 from './assets/slide/Untitled-1-06.png'
import img5 from './assets/slide/Untitled-1-08.png'
import img6 from './assets/slide/Untitled-1-12.png'
import img7 from './assets/slide/Untitled-1-13.png'
import img8 from './assets/slide/Untitled-1-15.png'
import img9 from './assets/slide/Untitled-1-16.png'
import img10 from './assets/slide/Untitled-1-17.png'
import left_slide1 from './assets/left_slide1.png';

import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

function getLibrary(provider) {
  return new Web3(provider)
}

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}
function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

function App() {
  const { height, width } = useWindowDimensions()
  const [bodyOpen, setBodyOpen] = useState(false)
  const [navModalOpen, setNavModalOpen] = useState(false)
  const [currentTip, setCurrentTip] = useState("")
  const [select1, set_select] = useState(false);
  const mobileMaxWidth = 625;
  let sidewidth = 862 * (height - 72) / 1864
  const bodywidth = width - sidewidth
  
  useEffect(() => {
    // Set side image size //
    document.getElementById("side-image").style.width = sidewidth + "px"
    document.getElementById("side-image").style.height = (height - 72) + "px"

    // Set mobile background size //
    document.getElementById("mobile-back").style.width = width + "px"
    document.getElementById("mobile-back").style.height = (width / 862 * 1864) + "px"

    // Set body container size (desktop&mobile) //
    if (width > mobileMaxWidth) {
      document.getElementById("body-container").style.marginLeft = sidewidth + "px"
    } else {
      document.getElementById("body-container").style.marginLeft = 0
      document.getElementById("body-container").style.width = "100%"
    }
  })

  const onClickBodyToggle = () => {
    if (bodyOpen) {
      document.getElementById("page-toggle-button").style.position = "fixed"
      document.getElementById("page-toggle-button").style.bottom = "0"
      document.getElementById("body-container").style.display = "none"
      setBodyOpen(false)
    } else {
      document.getElementById("page-toggle-button").style.position = "absolute"
      document.getElementById("page-toggle-button").style.bottom = "55%"
      document.getElementById("body-container").style.display = "block"
      setBodyOpen(true)
    }
  }

  const onClickModalToggle = () => {
    if (navModalOpen) {
      document.getElementById("nav-modal").style.display = "none"
      setNavModalOpen(false)
    } else {
      document.getElementById("nav-modal").style.display = "flex"
      setNavModalOpen(true)
    }
  }

  const onHandleTip = (tipType, disp) => {
    if (currentTip !== "") {
      document.getElementById("tip-card-" + currentTip).style.display = "none"
    }
    document.getElementById("tip-card-" + tipType).style.display = disp
    setCurrentTip(tipType)
  }
  // const [index, setIndex] = useState(0);

  // const handleSelect = (selectedIndex, e) => {
  //   setIndex(selectedIndex);
  // }

  const [flag_con_wallet, set_con_wallet] = useState(false);

  return (
    <>
      <Web3ReactProvider getLibrary={getLibrary}>
        <Router>
          <div>
            <Header flag_con_wallet={flag_con_wallet} set_con_wallet={set_con_wallet} />

            <div id="main-container">
              <div id="mobile-back">
                {/* <button id="tip-button-shirt" className="tip-button" onClick={() => onHandleTip("shirt", "block")}><img src="/icon-tip-button.svg" alt="tip button icon" /></button>
            <button id="tip-button-shorts" className="tip-button" onClick={() => onHandleTip("shorts", "block")}><img src="/icon-tip-button.svg" alt="tip butto icon" /></button>
            <button id="tip-button-boots" className="tip-button" onClick={() => onHandleTip("boots", "block")}><img src="/icon-tip-button.svg" alt="tip button icon" /></button> */}
                <Box display="flex" width="100%"  alignItems="center" justifyContent="center">
                  <Carousel renderCenterLeftControls={({ previousSlide }) => (
                    <button onClick={previousSlide} style={{ background: "none", border: 'none' }}>
                      <FaCaretLeft color="7938D2" fontSize="50px"></FaCaretLeft>
                    </button>
                  )}
                    renderCenterRightControls={({ nextSlide }) => (
                      <button onClick={nextSlide} style={{ background: "none", border: 'none' }}>
                        <FaCaretRight color="7938D2" fontSize="50px"></FaCaretRight>
                      </button>
                    )}
                  >
                    <Box display="flex" width="100%" height="100%" position="relative">
                      <img src={img1} width="100%" height="100%"  alt=""></img>
                      <button style={{ left: "55%", top: "35%" }} className="tip-button" onClick={() => onHandleTip("shirt", "block")}><img src="./icon-tip-button.svg" alt="tip button icon" /></button>
                    </Box>
                    <Box display="flex" width="100%" height="100%" position="relative">
                      <img src={img2} width="100%" height="100%" alt=""></img>
                      <button style={{ left: "30%", top: "45%" }} className="tip-button" onClick={() => onHandleTip("shirt", "block")}><img src="./icon-tip-button.svg" alt="tip button icon" /></button>
                    </Box>
                    <Box display="flex" width="100%" height="100%" position="relative">
                      <img src={img3} width="100%" height="100%" alt=""></img>
                      <button style={{ left: "27%", top: "67%" }} className="tip-button" onClick={() => onHandleTip("shirt", "block")}><img src="./icon-tip-button.svg" alt="tip button icon" /></button>
                    </Box>
                    <Box display="flex" width="100%" height="100%" position="relative">
                      <img src={img4} width="100%" height="100%" alt=""></img>
                      <button style={{ left: "55%", top: "40%" }} className="tip-button" onClick={() => onHandleTip("shirt", "block")}><img src="./icon-tip-button.svg" alt="tip button icon" /></button>
                    </Box>
                    <Box display="flex" width="100%" height="100%" position="relative">
                      <img src={img5} width="100%" height="100%" alt=""></img>
                      <button style={{ left: "50%", top: "30%" }} className="tip-button" onClick={() => onHandleTip("shirt", "block")}><img src="./icon-tip-button.svg" alt="tip button icon" /></button>
                    </Box>
                    <Box display="flex" width="100%" height="100%" position="relative">
                      <img src={img6} width="100%" height="100%" alt=""></img>
                      <button style={{ left: "70%", top: "10%" }} className="tip-button" onClick={() => onHandleTip("shirt", "block")}><img src="./icon-tip-button.svg" alt="tip button icon" /></button>
                    </Box>
                    <Box display="flex" width="100%" height="100%" position="relative">
                      <img src={img7} width="100%" height="100%" alt=""></img>
                      <button style={{ left: "40%", top: "50%" }} className="tip-button" onClick={() => onHandleTip("shirt", "block")}><img src="./icon-tip-button.svg" alt="tip button icon" /></button>
                    </Box>
                    <Box display="flex" width="100%" height="100%" position="relative">
                      <img src={img8} width="100%" height="100%" alt=""></img>
                      <button style={{ left: "70%", top: "30%" }} className="tip-button" onClick={() => onHandleTip("shirt", "block")}><img src="./icon-tip-button.svg" alt="tip button icon" /></button>
                    </Box>
                    <Box display="flex" width="100%" height="100%" position="relative">
                      <img src={img9} width="100%" height="100%" alt=""></img>
                      <button style={{ left: "45%", top: "20%" }} className="tip-button" onClick={() => onHandleTip("shirt", "block")}><img src="./icon-tip-button.svg" alt="tip button icon" /></button>
                    </Box>
                    <Box display="flex" width="100%" height="100%" position="relative">
                      <img src={img10} width="100%" height="100%" alt=""></img>
                      <button style={{ left: "25%", top: "50%" }} className="tip-button" onClick={() => onHandleTip("shirt", "block")}><img src="./icon-tip-button.svg" alt="tip button icon" /></button>
                    </Box>

                  </Carousel>
                </Box>
              </div>

              <div id="side-image">
                {!select1 ?
                  <>
                    <Box display="flex" alignItems="center" justifyContent="center" color="white" fontSize="20px" fontWeight="300">
                      GARMENT SHOWCASE
                    </Box>
                    <Box display="flex" width="90%" marginTop="15%">
                      <Carousel renderCenterLeftControls={({ previousSlide }) => (
                        <button onClick={previousSlide} style={{ background: "none", border: 'none' }}>
                          <FaCaretLeft color="7938D2" fontSize="50px"></FaCaretLeft>
                        </button>
                      )}
                        renderCenterRightControls={({ nextSlide }) => (
                          <button onClick={nextSlide} style={{ background: "none", border: 'none' }}>
                            <FaCaretRight color="7938D2" fontSize="50px"></FaCaretRight>
                          </button>
                        )}
                      >
                        <Box display="flex" width="100%" height="100%" position="relative">
                          <img src={img1} style={{ borderRadius: "10px" }} width="100%"  alt=""></img>
                          <button style={{ left: "55%", top: "35%" }} className="tip-button" onClick={() => onHandleTip("shirt", "block")}><img src="./icon-tip-button.svg" alt="tip button icon" /></button>
                        </Box>
                        <Box display="flex" width="100%" height="100%" position="relative">
                          <img src={img2} style={{ borderRadius: "10px" }} width="100%" height="100%" alt=""></img>
                          <button style={{ left: "30%", top: "45%" }} className="tip-button" onClick={() => onHandleTip("shirt", "block")}><img src="./icon-tip-button.svg" alt="tip button icon" /></button>
                        </Box>
                        <Box display="flex" width="100%" height="100%" position="relative">
                          <img src={img3} style={{ borderRadius: "10px" }} width="100%" height="100%" alt=""></img>
                          <button style={{ left: "27%", top: "67%" }} className="tip-button" onClick={() => onHandleTip("shirt", "block")}><img src="./icon-tip-button.svg" alt="tip button icon" /></button>
                        </Box>
                        <Box display="flex" width="100%" height="100%" position="relative">
                          <img src={img4} style={{ borderRadius: "10px" }} width="100%" height="100%" alt=""></img>
                          <button style={{ left: "55%", top: "40%" }} className="tip-button" onClick={() => onHandleTip("shirt", "block")}><img src="./icon-tip-button.svg" alt="tip button icon" /></button>
                        </Box>
                        <Box display="flex" width="100%" height="100%" position="relative">
                          <img src={img5} style={{ borderRadius: "10px" }} width="100%" height="100%" alt=""></img>
                          <button style={{ left: "50%", top: "30%" }} className="tip-button" onClick={() => onHandleTip("shirt", "block")}><img src="./icon-tip-button.svg" alt="tip button icon" /></button>
                        </Box>
                        <Box display="flex" width="100%" height="100%" position="relative">
                          <img src={img6} style={{ borderRadius: "10px" }} width="100%" height="100%" alt=""></img>
                          <button style={{ left: "70%", top: "10%" }} className="tip-button" onClick={() => onHandleTip("shirt", "block")}><img src="./icon-tip-button.svg" alt="tip button icon" /></button>
                        </Box>
                        <Box display="flex" width="100%" height="100%" position="relative">
                          <img src={img7} style={{ borderRadius: "10px" }} width="100%" height="100%" alt=""></img>
                          <button style={{ left: "40%", top: "50%" }} className="tip-button" onClick={() => onHandleTip("shirt", "block")}><img src="./icon-tip-button.svg" alt="tip button icon" /></button>
                        </Box>
                        <Box display="flex" width="100%" height="100%" position="relative">
                          <img src={img8} style={{ borderRadius: "10px" }} width="100%" height="100%" alt=""></img>
                          <button style={{ left: "70%", top: "30%" }} className="tip-button" onClick={() => onHandleTip("shirt", "block")}><img src="./icon-tip-button.svg" alt="tip button icon" /></button>
                        </Box>
                        <Box display="flex" width="100%" height="100%" position="relative">
                          <img src={img9} style={{ borderRadius: "10px" }} width="100%" height="100%" alt=""></img>
                          <button style={{ left: "45%", top: "20%" }} className="tip-button" onClick={() => onHandleTip("shirt", "block")}><img src="./icon-tip-button.svg" alt="tip button icon" /></button>
                        </Box>
                        <Box display="flex" width="100%" height="100%" position="relative">
                          <img src={img10} style={{ borderRadius: "10px" }} width="100%" height="100%" alt=""></img>
                          <button style={{ left: "25%", top: "50%" }} className="tip-button" onClick={() => onHandleTip("shirt", "block")}><img src="./icon-tip-button.svg" alt="tip button icon" /></button>
                        </Box>

                      </Carousel>
                    </Box>
                  </> :
                  <>
                    <Box display="flex" alignItems="center" justifyContent="center" color="white" fontSize="20px" fontWeight="300">
                      FAITH TRIBE
                    </Box>
                    <Box display="flex" width="90%" marginTop="15%">
                      <Box display="flex" width="100%" height="100%" position="relative" borderRadius="10px" bgcolor="white">
                        <img src={left_slide1} style={{ borderRadius: "10px" }} width="100%" height="100%" alt=""></img>
                      </Box>
                    </Box>
                  </>
                }

              </div>
              {/* <div id="side-image">
            <button id="tip-button-shirt" className="tip-button" onClick={() => onHandleTip("shirt", "block")}><img src="/icon-tip-button.svg" alt="tip button icon" /></button>
            <button id="tip-button-shorts" className="tip-button" onClick={() => onHandleTip("shorts", "block")}><img src="/icon-tip-button.svg" alt="tip butto icon" /></button>
            <button id="tip-button-boots" className="tip-button" onClick={() => onHandleTip("boots", "block")}><img src="/icon-tip-button.svg" alt="tip button icon" /></button>
            <div className="social-wrapper" style={{ width: sidewidth }}>
              <div className="img-wrapper">
                <img src="/discord.png" alt="discord" />
              </div>
              <div className="img-wrapper">
                <img src="/telegram.png" alt="discord" />
              </div>
              <div className="img-wrapper">
                <img src="/twitter.png" alt="discord" />
              </div>
              <div className="img-wrapper">
                <img src="/medium.png" alt="discord" />
              </div>
            </div>
          </div>
                */}
              <div id="tip-card-shirt" className="tip-card">
                <div className="tip-title">SHIRT SKIRT</div>
                <div className="tip-category">
                  <div className="tip-category-title">Item Name: </div>
                  <div className="tip-category-text">SHIRT SKIRT</div>
                </div>
                <div className="tip-category">
                  <div className="tip-category-title">Designed by: </div>
                  <div className="tip-category-text">FAITH CONNEXION TRIBE</div>
                </div>
                <div className="tip-category">
                  <div className="tip-category-title">Collection: </div>
                  <div className="tip-category-text">PRE FALL 2015</div>
                </div>
                <div className="tip-category">
                  <div className="tip-category-title">Item Type: </div>
                  <div className="tip-category-text">SKIRT</div>
                </div>
                <div className="tip-category">
                  <div className="tip-category-title">Materials: </div>
                  <div className="tip-category-text">DENIM, COTON, WOOL</div>
                </div>
                <br />
                <div className="tip-content">
                  The Shirt skirt is a pure and original creation
                  from the Faith Connexion tribe !This iconic skirt
                  exists since season one, and has been declined
                  many times: from Scottish wool to bleached
                  fabrics and Japanese lurex cotton, the shirt skirt
                  had also been fringed and embroidered, in both
                  short and long versions; The British singer Rita
                  Ora is a real fan of this item.
                </div>
                <button className="tip-close-button" onClick={() => onHandleTip("shirt", "none")}><img src="/btn-close.svg" alt="close button" /></button>
              </div>
              {/*
          <div id="tip-card-shorts" className="tip-card">
            <div className="tip-title">PAINTER SHORTS</div>
            <div className="tip-category">
              <div className="tip-category-title">Item Name:</div>
              <div className="tip-category-text">PAINTER SHORTS</div>
            </div>
            <div className="tip-category">
              <div className="tip-category-title">Designed by:</div>
              <div className="tip-category-text">FAITH CONNEXION TRIBE</div>
            </div>
            <div className="tip-category">
              <div className="tip-category-title">Collection:</div>
              <div className="tip-category-text">PRE FALL 2021</div>
            </div>
            <div className="tip-category">
              <div className="tip-category-title">Item Type:</div>
              <div className="tip-category-text">SHORTS</div>
            </div>
            <div className="tip-category">
              <div className="tip-category-title">Materials:</div>
              <div className="tip-category-text">DENIM, COTON, WOOL</div>
            </div>
            <br />
            <div className="tip-content">
              The Painter Shorts is pure and original creation
              from the Faith Connexion tribe ! This iconic skirt
              exists since season one, and has been declined
              many times : from Scottish wool to bleached
              fabrics and Japanese lurex cotton, the shirt skirt
              had also been fringed and embroidered, in both
              short and long versions; The British singer Rita
              Ora is a real fan of this item.
            </div>
            <button className="tip-close-button" onClick={() => onHandleTip("shorts", "none")}><img src="/btn-close.svg" alt="close button" /></button>
          </div>
          <div id="tip-card-boots" className="tip-card">
            <div className="tip-title">TRAINING BOOTS</div>
            <div className="tip-category">
              <div className="tip-category-title">Item Name:</div>
              <div className="tip-category-text">TRAINING BOOTS</div>
            </div>
            <div className="tip-category">
              <div className="tip-category-title">Designed by:</div>
              <div className="tip-category-text">FAITH CONNEXION TRIBE</div>
            </div>
            <div className="tip-category">
              <div className="tip-category-title">Collection:</div>
              <div className="tip-category-text">PRE FALL 2021</div>
            </div>
            <div className="tip-category">
              <div className="tip-category-title">Item Type:</div>
              <div className="tip-category-text">SHORTS</div>
            </div>
            <div className="tip-category">
              <div className="tip-category-title">Materials:</div>
              <div className="tip-category-text">DENIM, COTON, WOOL</div>
            </div>
            <br />
            <div className="tip-content">
              The Painter Shorts is pure and original creation
              from the Faith Connexion tribe ! This iconic skirt
              exists since season one, and has been declined
              many times : from Scottish wool to bleached
              fabrics and Japanese lurex cotton, the shirt skirt
              had also been fringed and embroidered, in both
              short and long versions; The British singer Rita
              Ora is a real fan of this item.
            </div>
            <button className="tip-close-button" onClick={() => onHandleTip("boots", "none")}><img src="/btn-close.svg" alt="close button" /></button>
          </div> */}
              <button id="page-toggle-button" onClick={onClickBodyToggle}><img src={bodyOpen ? "/icon-toggle-close.svg" : "/icon-toggle-open.svg"} alt="toggle icon" /></button>
              <div id="body-container" className="body-container" style={{ width: bodywidth }}>
                <Navbar width={bodywidth} select1={select1} set_select={set_select} />
                <Switch>
                  <Route exact path="/">
                    <Home />
                  </Route>
                  <Route exact path="/about">
                    <About />
                  </Route>
                  <Route exact path="/whitepaper">
                    <Whitepaper />
                  </Route>
                  <Route exact path="/reserve">
                    <Reserve flag_con_wallet={flag_con_wallet} />
                  </Route>
                  <Route exact path="/claim">
                    <Claim flag_con_wallet={flag_con_wallet} />
                  </Route>
                </Switch>
                {/* <Footer /> */}
              </div>
              <button id="nav-modal-toggle-button" onClick={onClickModalToggle}><img src={navModalOpen ? "/btn-close.svg" : "/icon-toggle-nav-modal-open.svg"} alt="toggle modal icon" /></button>
              <div id="nav-modal">
                {/* <button className="button-blue-border width-100">CONNECT A WALLET</button> */}
                <div className="nav-text" onClick={() => {
                  setNavModalOpen(false);
                  set_select(false);
                  document.getElementById("nav-modal").style.display = "none"
                  document.getElementById("page-toggle-button").style.position = "absolute"
                  document.getElementById("page-toggle-button").style.bottom = "55%"
                  document.getElementById("body-container").style.display = "block"
                  setBodyOpen(true);
                  

                }}><Link to="/" style={{ textDecoration: 'none', color:'white' }}>HOME</Link></div>
                {/* <div className="nav-text">HOW IT WORKS</div> */}
                <div className="nav-text" onClick={() => {
                  setNavModalOpen(false);
                  document.getElementById("nav-modal").style.display = "none"
                  document.getElementById("page-toggle-button").style.position = "absolute"
                  document.getElementById("page-toggle-button").style.bottom = "55%"
                  document.getElementById("body-container").style.display = "block"
                  setBodyOpen(true);

                }}><Link to="/whitepaper" style={{ textDecoration: 'none', color:'white' }}>WHITEPAPER</Link></div>
                <div className="nav-text" onClick={() => {
                  setNavModalOpen(false);
                  set_select(true);
                  document.getElementById("nav-modal").style.display = "none"
                  document.getElementById("page-toggle-button").style.position = "absolute"
                  document.getElementById("page-toggle-button").style.bottom = "55%"
                  document.getElementById("body-container").style.display = "block"
                  setBodyOpen(true);


                }}><Link to="/reserve" style={{ textDecoration: 'none', color:'white' }}>RESERVATION</Link></div>
                {/* <div className="nav-text">CLAIM</div> */}
                <div className="nav-text" onClick={() => {
                  setNavModalOpen(false);
                  set_select(true);
                  document.getElementById("nav-modal").style.display = "none"
                  document.getElementById("page-toggle-button").style.position = "absolute"
                  document.getElementById("page-toggle-button").style.bottom = "55%"
                  document.getElementById("body-container").style.display = "block"
                  setBodyOpen(true);

                }}><Link to="/claim" style={{ textDecoration: 'none', color:'white' }}>CLAIM</Link></div>
                <div className="showcase-menu-title" onClick={()=>{setNavModalOpen(false);
                
                document.getElementById("nav-modal").style.display = "none"}}><Link to="/art" style={{ textDecoration: 'none', color:'white' }}>ART BASEL SHOWCASE</Link></div>
                <div className="showcase-menu-text" onClick={()=>{setNavModalOpen(false);
                document.getElementById("nav-modal").style.display = "none"}}><Link to="/proposals" style={{ textDecoration: 'none' , color:'white'}}>PROPOSALS</Link></div>
                <div className="showcase-menu-text" onClick={()=>{setNavModalOpen(false);
                document.getElementById("nav-modal").style.display = "none"}}><Link to="/governance" style={{ textDecoration: 'none', color:'white' }}>GOVERNANCE</Link></div>
                <div className="showcase-menu-text" onClick={() => {
                  setNavModalOpen(false);
                  document.getElementById("nav-modal").style.display = "none"

                }}><Link to="/help" style={{ textDecoration: 'none' , color:'white'}}>HELP</Link></div>
              </div>
            </div>
          </div>
        </Router>
      </Web3ReactProvider>
    </>
  );
}

export default App;
