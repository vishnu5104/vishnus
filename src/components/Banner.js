import React from 'react'
import {AiFillGithub,AiFillInstagram,AiFillLinkedin,AiOutlineTwitter} from "react-icons/ai"
function Banner() {
  return (
    <header>
        <img src="https://images.pexels.com/photos/16105561/pexels-photo-16105561.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="banner" />
        <div className="overlay"></div>
        <div className="container">
            <div className="inner-content">
                <img src="https://i.ibb.co/McK9Tcy/mypic.jpg" alt="profile" />
                <div className="personal-info">
                    <h1>Vishnu S</h1>
                    <p>Full Stack Blockchain Developer</p>
                    <div className="bio">
                        <div className="row">
                            <div className="info">Age</div>
                            <div className="detail">22Yr</div>
                            <div className="info">Phone</div>
                            <div className="detail">+918606534744</div>
                            <div className="info">Email</div>
                            <div className="detail">vishnusdec29@gmail.com</div>
                        </div>
                    </div>
                    <div className="social">
                        <div className="links">
                            <a href="https://github.com/vishnu5104">
                                <AiFillGithub />
                            </a>
                        </div>
                        <div className="links">
                        <a href="https://www.linkedin.com/in/vishnu-s-034521191">
                            
                            <AiFillLinkedin/>
                        </a>
                        </div>
                        <div className="links">
                        <a href="https://twitter.com/VishnuS67941643">
                            <AiOutlineTwitter />
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Banner
