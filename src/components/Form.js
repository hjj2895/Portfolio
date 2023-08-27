import './Form.css';
import React from 'react'; 

const Form = () => {
  return (
    <>
    
    <div className='form'>
        <form>
            <label></label>
            <input type="text" placeholder='Name'></input>
            <label></label>
            <input type="email" placeholder='Email'></input>
            <label></label>
            <input type="text" placeholder='Subject'></input>
            <label></label>
            <textarea rows="6" placeholder='Type your message here'/>
            <button className='btn'>Submit</button>
        </form>
     </div>
    
    </>
  )
}

export default Form