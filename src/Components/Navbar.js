// import React, { useState } from 'react';
// import { Link } from 'react-scroll'
import { 
  IcoGrp,
  NavigationStyled,
  ImgWrap
} from './style';

function Navbar() {

  // const [isMobile, setMobile] = useState(false);
  // const showMenu = () => {
  //   setMobile(true);
  // }
  // const closeMenu = () => {
  //   setMobile(false);
  // }
  return (
    <NavigationStyled>
      <ImgWrap>
        <img className='' src="/images/crocs_logo.png" alt="" />
      </ImgWrap>
      <IcoGrp>
        <a href="/"><img className='' src="/images/icons/discord.png" alt="" /></a>
        <a href="/"><img className='' src="/images/icons/twitter.png" alt="" /></a>
      </IcoGrp>
      {/* <ul className='desktop-nav'>
        <div>
          <Link to="HeaderNav" spy={true} smooth={true}>HOME</Link>
        </div>
        <div>
          <Link to="Page2-container" spy={true} smooth={true}>BEYOND</Link>
        </div>
        <div>
          <Link to="Mintmap" spy={true} smooth={true}>MINDMAP</Link>
        </div>
        <div>
          <Link to="Bags" spy={true} smooth={true}>BAGS</Link>
        </div>
        <div>
          <Link to="Team" spy={true} smooth={true}>TEAMS</Link>
        </div>
        <div>
          <Link to="Faq" spy={true} smooth={true}>FAQ</Link>
        </div>
        
      </ul> */}
      {/* <button className='mobile-menu' onClick={showMenu}>&#9776;</button> */}
      {/* {isMobile && <div className="sidepanel">
        <button className="closebtn" onClick={closeMenu}>&times;</button> */}
        {/* <div style={{ marginTop: "70px" }}>
          <Link to="HeaderNav" spy={true} smooth={true}>HOME</Link>
        </div>
        <div>
          <Link to="Page2-container" spy={true} smooth={true}>BEYOND</Link>
        </div>
        <div>
          <Link to="Mintmap" spy={true} smooth={true}>MINDMAP</Link>
        </div>
        <div>
          <Link to="Bags" spy={true} smooth={true}>BAGS</Link>
        </div>
        <div>
          <Link to="Team" spy={true} smooth={true}>TEAMS</Link>
        </div>
        <div>
          <Link to="Faq" spy={true} smooth={true}>FAQ</Link>
        </div>
        <IcoGrp>
          <a href="/"><img className='navico' src="/images/landing/opensea.png" alt="" /></a>
          <a href="/"><img className='navico' src="/images/landing/discord.png" alt="" /></a>
          <a href="/"><img className='navico' src="/images/landing/twitter.png" alt="" /></a>
        </IcoGrp> */}
      {/* </div>} */}
    </NavigationStyled>
  )
}

export default Navbar;
