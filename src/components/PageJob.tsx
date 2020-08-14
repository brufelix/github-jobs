import React, {Component} from 'react'
import { IoMdArrowRoundBack } from 'react-icons/io'
import './PageJob.css'

class PageJobs extends Component {
    render(){
        return(
            <React.StrictMode>
                <div className="search">
                    <IoMdArrowRoundBack style={{marginRight: "3px", color: "#005194"}}/>
                    <div className="left">
                        <a className="back" href="/positions">See all positions</a>
                    </div>
                </div>
                <div id="page">
                    <div className="inner">
                        <p className="supertitle">Type-location</p>
                        <h1>Javascript Full Stack</h1>
                        <div className="columns gereric">
                            <div className="column main">
                            <p>As a <strong>Java Software Developer</strong>, you will join our agile, cross-functional team to advance the development of our next-generation marketing tools and contribute with your knowledge of software architecture. Together as a team, we are proud to early adopt new features in advertising and always strive for innovations in products and technologies.</p> 
                            <p><strong>Your mission:</strong></p> 
                            <ul> <li>Work closely with our marketing department to shape and design various marketing tools and help us to use the social media budget more efficiently</li> <li>Connect our software with external APIs to create automated marketing and reporting processes</li> <li>Continuously improve our backend services with your knowledge of software craftsmanship and high-quality code</li> <li>Contribute as a productive member of an agile development team in all phases of the development lifecycle</li> 
                            </ul> <p><strong>Your skillset:</strong></p> <ul> 
                            <li>Degree in Computer Sciences, Business Information Systems or similar and several years of professional experience in software development</li> <li>Background in object-oriented programming in Java and the corresponding context, especially Spring, the UNIX command line, SQL, GIT, and Continuous Delivery</li> 
                            <li>Solid experience in using various methods in software design and automated testing to guarantee and improve code quality in compliance with the company standards</li> 
                            <li>Interest in relevant business processes and the product you create</li> 
                            <li>Excellent English language skills</li> </ul> 
                            <p><strong>Your power-ups:</strong></p> 
                            <ul> 
                                <li>Shape the success story of InnoGames with a great team of driven experts in an international culture</li> 
                                <li>Competitive compensation and an atmosphere to empower creative thinking and strong results</li> 
                                <li>Time for your personal and professional development and possibilities to join both internal and external events and conferences to gain expert knowledge in the relevant areas</li> 
                                <li>Exceptional benefits ranging from flawless relocation support to company gym, smartphone or tablet of your own choice for personal use, roof terrace with BBQ and much more</li> 
                                </ul> <p><strong>Our Story:</strong></p> 
                                <p>InnoGames is Germany’s leading developer and publisher of mobile and online games. The company based in Hamburg is best known for Forge of Empires, Elvenar and Tribal Wars. InnoGames’ complete portfolio encompasses seven live games and several mobile titles in production.</p> 
                                <p>Born as a hobby, InnoGames today has a team of 400 employees from more than 30 nations who share the passion of creating unique games that players across the globe enjoy for years. In order to further expand our success and to realize new projects, we are constantly looking for young talents, experienced professionals, and creative thinkers.</p> 
                                <p>Excited to start your journey with InnoGames and join our dynamic team as a <strong>Java Software Developer</strong>? We look forward to receiving your application as well as your salary expectations and earliest possible start date through our 
                                <a href="https://www.innogames.com/career/detail/job/java-software-developer/?s=GitHub">online application form</a>. 
                                <strong>Cristal Ledesma</strong> would be happy to answer any questions you may have.</p> 
                                <p><strong>Apply and #stayhome!</strong> Due to the 
                                <strong>coronavirus outbreak</strong>, we switched our operations company-wide to home office and turned our hiring process into a 
                                <strong>fully virtual one</strong>. When hiring, we are also open for our new team members starting their work remotely at the time being or adjusting contract start dates accordingly. Stay home and safe!</p>
                            </div>
                        </div>
                        <div className="column sidebar">
                            <a className="box-apply" href="/">How to apply</a>
                        </div>
                    </div>
                </div>
            </React.StrictMode>
        )
    }
}

export default PageJobs