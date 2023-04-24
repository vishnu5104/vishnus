import React from 'react'

function Testimonial() {
  return (
    <section id='testimonial'>
        <div className="testimonial-wrapper">
            <div className="container">
                <div className="testimonial">
                    <div className="text-wrapper">
                        <div className="subtitle">Learning Tracks</div>
                        <h2>
                            <span>Bockchain</span>
                            <span>React.Js</span>
                            <span>MERN</span>
                        </h2>
                    </div>
                    <div className="testimonial-cards">
                        <div className="card">
                            <div className="content">
                                <img src="https://ethereum.org/icons/icon-512x512.png?v=8b512faa8d4a0b019c123a771b6622aa" alt="" />
                                <div className='name-and-des'>
                                    <h4>Ethereum Blockchain Learner Track</h4>
                                    <p>Tinkerhub Maker-Station</p>  
                                </div>
                                <p>This is a learning track designed specifically for blockchain beginners. If you're interested in exploring the exciting world of blockchain technology but don't know where to start, this resource is the perfect place for you. It has been created with the aim of providing a comprehensive overview of blockchain and helping you gain a better understanding of its fundamentals. By the end of this track, you'll be well-equipped to build your own decentralized applications (dApps) using blockchain technology</p>
                           <div className='th-ms'><a href='https://github.com/tinkerhub/maker-station/blob/main/Blockchain/Blockchain.md'>Explore It 👆</a></div>
                            </div>
                        </div>
                     
                    </div>
                </div>
            </div>
        </div>
      
    </section>
  )
}

export default Testimonial
