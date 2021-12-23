import React,{Fragment} from 'react'
import './infoSection.css'

function InfoSection() {
    return (
        <Fragment>

            <div className="infoContainer">
                
                <img src='./images/pp1.png' alt='' className="infoImage"/>
                
                <div className="infoContent">
                
                    <div className="infoUsername">dark_soul_officials</div>
                
                    <div className="infoDescription">Dark Soul</div>
                
                </div>
            
            </div>

        </Fragment>
    )
}

export default InfoSection
