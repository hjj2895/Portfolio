import './Form.css';
import React, { useRef } from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import emailjs from '@emailjs/browser'; 

const Form = () => {

  const form = useRef(); 

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xnfrwrk', 'template_0xsyf29', form.current, '4lX-QqnrMeXaReXGn')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset(); 
  };

  return (
    <>
    <div className='form-container'>
      <div className='second-container'>
    <div className='heading-container'>
    <div className='heading'>
      <h1>Contact Me</h1>
      <p>If you have any questions, feel free to reach out below!</p>
    </div>
    </div>
    <div className='form'>
        <form ref={form} onSubmit={sendEmail}>
            <label></label>
            <input type="text" placeholder='Name' className='name' name='user_name'></input>
            <label></label>
            <input type="email" placeholder='Email' name='user_email'></input>
            <label></label>
            <input type="text" placeholder='Subject' name='subject'></input>
            <label></label>
            <textarea rows="6" placeholder='Type your message here' name='message'/>
            <button type='submit' className='btn2'>Submit</button>
        </form>
        <div className='social-link'>
              <a href="https://www.linkedin.com/in/peter-ji/">
              <FontAwesomeIcon icon={faLinkedin} className='linkedin'></FontAwesomeIcon>
             </a>
             <a href="https://github.com/hjj2895">
              <FontAwesomeIcon icon={faGithub} className='github'></FontAwesomeIcon>
              </a>
            </div>
            </div>
     </div>
    </div>
    </>
  )
}

export default Form