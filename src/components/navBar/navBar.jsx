import React,{ useRef, useState} from 'react'
import './navBar.css'
import {Container, Row, Col, Overlay, Popover} from 'react-bootstrap'
import { Link } from 'react-router-dom' 

function NavBar({filterUsername,handleLogOut}) {

    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);

    const handleClick = (event) => {
        setShow(!show);
        setTarget(event.target);
    };

    return (
        <>

            <Container fluid={true} className='navBarFixed'>

                <Row className='p-0 navContainer'>

                    <Col lg={2} md={1} className='navCol1'></Col>

                    <Col lg={3} md={3} sm={3} xs={6} className='p-0 navCol'>

                        <img className="navLogo" src='./images/logoinsta1.png' />

                    </Col>

                    <Col lg={3} md={4} sm={5} className='p-0 navCol navCol1'>
                    
                        <input type="text" name="" id="" placeholder='Search' className='searchInp'/>

                        <i className='fas fa-search searchIcon'></i>

                    </Col>

                    <Col lg={3} md={3} sm={4} xs={6} className='p-0 navCol' ref={ref}>
                    
                        <img src="./images/homeC.svg" alt="" className='navIcon'/>
                        <img src="./images/msg.svg" alt="" className='navIcon'/>
                        <img src="./images/explore.svg" alt="" className='navIcon'/>
                        <img src="./images/heart.svg" alt="" className='navIcon'/>
                        <img onClick={handleClick} src='./images/pp1.png' className="navbarUserImg" />

                    </Col>

                    <Col lg={1} md={1} className='navCol1' >
                    
                    </Col>

                </Row>

            </Container>

            <Overlay
            show={show}
            target={target}
            placement="bottom"
            container={ref.current}
            containerPadding={20}
            >
                <Popover id="popover-contained">
            
                <Popover.Title as="h3" style={{textTransform: 'capitalize'}}>Welcome! {filterUsername[0].username}</Popover.Title>
            
                <Popover.Content>
            
                    <div className="container">
                    
                        <h1 className='w-100 d-flex justify-content-center align-items-center'> <i className='far fa-id-badge uploadIcon'></i> <span className='userPhoto'> Change Profile Picture </span> </h1>

                    </div>

                    <Link to='/'>
                    
                        <button className='logoutBtn' onClick={handleLogOut}>Logout</button>
                    
                    </Link>

                </Popover.Content>
            
                </Popover>
            
            </Overlay>

        </>
    )
}

export default NavBar
