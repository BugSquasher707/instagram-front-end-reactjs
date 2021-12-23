import React, {useState} from 'react'
import './loginPage.css'
import {Container, Row, Col} from 'react-bootstrap'
import SignIn from '../signIn/signIn'
import SignUp from '../signUp/signUp'

function LoginPage({getNamePass,isLogin,changeLogin,sendRegData,getAuthCredentials,authCredentials}) {

    return (
        <>

            <Container fluid={true} className='p-0'> 

                <Row className='p-0'>

                    <Col lg={12} md={12} sm={12} xs={12} className='p-0 mainDiv'>

                        <div className="loginContent">

                            <img src="./images/9364675fb26a.svg" alt="" className='phoneImg d-lg-block d-md-block d-none' />

                            <div>

                                <div className="loginRightSide">

                                    <img src="./images/logoinsta.png" alt="" className='loginPageLogo' />

                                    {isLogin ? <SignIn getAuthCredentials={getAuthCredentials} authCredentials={authCredentials} /> : <SignUp getNamePass={getNamePass} sendRegData={sendRegData} />}

                                    <div className="orContainer">
                                        
                                        <div className="orHr"></div>
                                        <div className="orContent">OR</div>
                                        <div className="orHr"></div>

                                    </div>

                                    <div className="loginFbImg">

                                        <img src="./images/fb.png" alt="" width='15px' style={{ marginRight: "5px", marginTop:'-1.5px' }}/>
                                        
                                        <p className='fbPara'>Log in with Facebook</p>

                                    </div>

                                    <div className="loginForgot">

                                        Forgot password?

                                    </div>

                                    </div>

                                    <div className="signUpOption">

                                    {
                                        isLogin ? 
                                        
                                        <div className='loginSignIn'>
                                            
                                            Don't have an account? <span onClick={changeLogin} className='signInUpOpt'>Sign up</span>

                                        </div>  :

                                        <div className='loginSignUp'>
                                            
                                            Have an account? <span onClick={changeLogin} className='signInUpOpt'>Sign in</span>

                                        </div>
                                    }

                                    </div>

                                    <div className="downloadContainer">

                                        <div>
                                            Get the app.
                                        </div>

                                        <div className="downloadOption">

                                            <img src="./images/app.png" alt="" className='downloadOptionImg'/>

                                            <img src="./images/play.png" alt="" className='downloadOptionImg'/>

                                        </div>

                                    </div>

                            </div>

                        </div>

                    </Col>

                </Row>

            </Container>

        </>
    )
}

export default LoginPage
