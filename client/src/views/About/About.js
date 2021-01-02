import React from 'react'
import './About.css'

const About = (props) => {
    return (
        <div className="abt">
            <div className="data">
                <div className="upper">
                    About Us  :
                    </div>
                <div className="middle">
                    We are a Non-profit team who work worldwide to change lives
                    </div>
                <div className="lower">
                    <p> 
                        On our platform, you can donate with an ease. 
                        Our robust due diligence process covers legal, compliance, financial and impact checks for each donation made to any non-profit, including in-person visits to beneficiaries and actual feedback reports.
                    </p>
                    
                    <p>
                        We believe in collaboration as we know this work is bigger than any one organization. 
                        We do all this so that our donors can trust that their giving is indeed doing what it's supposed to do - change lives.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
