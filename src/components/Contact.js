import React from 'react'

function Contact() {
  return (
    <section id='contact-us'>
        <div className="container">
            <div className="contact-wrapper">
                <div className="form-text">
                    <div className="subtitle">Contact Us</div>
                    <h2>GET IN TOUCH.</h2>
                </div>
                <form>
                    <div className="first-column">
                        <div className="input-row">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="user_name" required/>
                        </div>

                        <div className="input-row">
                            <label htmlFor="subject">Subject</label>
                            <input type="text" id="subject" name='subject' required/>
                        </div>
                        
                        <div className="input-row">
                            <label htmlFor="email">Email</label>
                            <input type="text" id="email" name='user_email' required/>
                        </div>
                    </div>
                    <div className="second-column">
                        <div className="input-row">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name='message' required/>
                        </div>
                        
                        <div className="input-row">
                            <button type='submit'>Submit</button>
                        </div>
                    </div>
                </form> 
            </div>
        </div>
    </section>
  )
}

export default Contact
