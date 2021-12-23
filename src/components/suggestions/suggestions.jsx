import React,{Fragment} from 'react'
import './suggestions.css'

function Suggestions() {
    return (
        <Fragment>
            
            <div className="suggestionsContainer">
               
                <div className="suggestionsHeader">
               
                    <div>Suggestions For You</div>
               
                </div>
               
                <div className="suggestionsBody">
               
                    <div className="suggestionsFriends">
               
                        <img src='./images/pp1.png' className="suggestionsImage"/>
               
                        <div className="suggestionsUsername">user_arslan_1</div>
               
                    </div>
               
                    <div className="suggestionsFriends">
               
                        <img src='./images/pp2.png' className="suggestionsImage"/>
               
                        <div className="suggestionsUsername">user_omer_2</div>
               
                    </div>
               
                    <div className="suggestionsFriends">
               
                        <img src='./images/pp3.jpeg' className="suggestionsImage"/>
               
                        <div className="suggestionsUsername">user_ahsan_3</div>
               
                    </div>
               
                    <div className="suggestionsFriends">
               
                        <img src='./images/pp1.png' className="suggestionsImage"/>
               
                        <div className="suggestionsUsername">user_abdullah_4</div>
               
                    </div>
               
                    <div className="suggestionsFriends">
               
                        <img src='./images/pp2.png' className="suggestionsImage"/>
               
                        <div className="suggestionsUsername">user_ahmad_5</div>
               
                    </div>
               
                    <div className="suggestionsFriends">
               
                        <img src='./images/pp3.jpeg' className="suggestionsImage"/>
               
                        <div className="suggestionsUsername">user_zain_6</div>
               
                    </div>
               
                </div>
            
            </div>

        </Fragment>
    )
}

export default Suggestions
