import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect, useState } from 'react';
import logo from '../assets/img/logo.svg'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'

export const NavBar=()=>{
    const [activeLink,setActiveLink]=useState('home');
    const [scrolled,setScrolled]=useState(false);
    useEffect(()=>{
        const onScroll =()=>{
            if (window.scrollY>50){
                setScrolled(true);
            }else{
                setScrolled(false);
            }
        }

        window.addEventListener("scroll",onScroll);

        return ()=>window.removeEventListener("scroll",onScroll);
    },[])
    const onUpdateActiveLink=(value)=>{
        setActiveLink(value);
    }

    return(
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt='Logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={ activeLink==='home'? 'active navbar-link':'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#AI" className={ activeLink==='AI'? 'active navbar-link':'navbar-link'} onClick={()=> onUpdateActiveLink('AI')}>AI</Nav.Link>
            <Nav.Link href="#DevOps" className={ activeLink==='DevOps'? 'active navbar-link':'navbar-link'} onClick={()=> onUpdateActiveLink('DevOps')}>DevOps</Nav.Link>
            <Nav.Link href="#WebDev" className={ activeLink==='WebDev'? 'active navbar-link':'navbar-link'} onClick={()=> onUpdateActiveLink('WebDev')}>Web Development</Nav.Link>
            <Nav.Link href="#QA" className={ activeLink==='QA'? 'active navbar-link':'navbar-link'} onClick={()=> onUpdateActiveLink('QA')}>QA</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
                <a href='#'><img src={navIcon1} /></a>
                <a href='#'><img src={navIcon2} /></a>
                <a href='#'><img src={navIcon3} /></a>
            </div>
            <button className='vvd' onClick={()=>console.log('connect')}><span>Let's Connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}