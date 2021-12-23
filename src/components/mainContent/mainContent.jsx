import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import InfoSection from '../infoSection/infoSection'
import MainPage from '../mainPage/mainPage'
import StatusBar from '../statusBar/statusBar'
import Suggestions from '../suggestions/suggestions'
import './mainContent.css'

function MainContent({filterUsername,filterStories}) {
    return (
        <>

            <Container fluid={true}>
                
                <Row>

                    <Col lg={2} md={1} className='p-0 mainCol1'></Col>

                    <Col lg={5} md={6} sm={8} xs={12} className='p-0  containerDiv'>

                        <StatusBar filterUsername={filterUsername} filterStories={filterStories} />

                        <MainPage filterUsername={filterUsername}/>

                    </Col>
                    
                    <Col lg={3} md={4} sm={4} className='p-0  mainCol2'>

                        <InfoSection/>

                        <Suggestions/>

                    </Col>
                    
                    <Col lg={2} md={1} className='p-0 mainCol1'></Col>

                </Row>

            </Container>

        </>
    )
}

export default MainContent
