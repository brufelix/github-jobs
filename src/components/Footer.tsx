import React from 'react'
import Img from '../img/github.png'
import './Footer.css'

export default () => {
    return(
        <div id="footer">
            <ul className="github-nav">
                <li><a href="">The GitHub Blog</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">Privacy</a></li>
                <li><a href="">Terms</a></li>
                <li><a href="">API</a></li>
            </ul>
            <img src={Img} alt="GitHub"/>
            <p>© 2020 GitHub Inc. All rights reserved.</p>
        </div>
    )
}