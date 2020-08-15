import React from 'react'
import './HowItWorks.css'
import { FaArrowCircleRight } from 'react-icons/fa'
import img01 from '../img/screenshot-editor.jpg'
import img02 from '../img/screenshot-listing.jpg'

export default () => {
    return (
        <div id="page">
            <p className="note">
                How GitHub Jobs Works
                <br/>
                <br/>
                GitHub Jobs is a great place attract the best technical talent for your company's open software development positions. Here's how:
            </p>
            <ol>
                <li>
                    <img id="img" src={img01} alt="img"/>
                    <h3>Create and preview your listing</h3>
                    <p>
                        See exactly how your listing will look before you publish live. 
                        Before creating a listing, you must login with your GitHub 
                        account and verify your email address.
                    </p>
                </li>
                    <FaArrowCircleRight style={{ fontSize: "50px", marginLeft: "10px", marginBottom: "80px"}}/>
                <li>
                    <p className="value"><strong>$450.000</strong> </p>
                    <h3 className="text-card">Pay with a major credit card</h3>
                    <p>
                        Invoicing available on request for bulk orders. 
                        Email <strong>jobs@github.com</strong> for more info. 
                        Sorry, no recruitment agencies.
                    </p>
                </li>
                    <FaArrowCircleRight style={{ fontSize: "50px", marginRight: "10px", marginBottom: "80px"}}/>
                <li>
                    <img id="img" src={img02} alt="img"/>
                    <h3 >Your listing goes live immediately</h3>
                    <p className="text-listing">
                        Listings are live for 30 days. 
                        We’ll send you a receipt and a link to change the listing.
                        <br/>
                    </p>
                </li>
            </ol>
        </div>
    )
}