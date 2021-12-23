import React,{Fragment} from 'react'
import NavBar from '../navBar/navBar'
import MainContent from '../mainContent/mainContent'
import './homePage.css'
import { Link } from 'react-router-dom'

function HomePage({filterUsername,handleLogOut,filterStories}) {
    return (
        <Fragment>

            {filterUsername.length === 0 && 
                <div className='sorryDiv'>
                    <h1>Sorry for Inconvinience Please Login First...!!!</h1>
                    <Link to='/'><button onClick={handleLogOut}>Go Back</button></Link>
                </div> 
            }

            {filterUsername.length > 0 && <NavBar filterUsername={filterUsername} handleLogOut={handleLogOut} /> }

            {filterUsername.length > 0 && <MainContent filterUsername={filterUsername} filterStories={filterStories} /> }
            
        </Fragment>
    )
}

export default HomePage
