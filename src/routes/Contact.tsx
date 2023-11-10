import React from 'react'

const Contact = () => {
  // const form = React.useRef(); 

  // const sendEmail = (e: any) => {
  //   e.preventDefault();

  //   emailjs.sendForm('service_xnfrwrk', 'template_0xsyf29', form.current, '4lX-QqnrMeXaReXGn')
  //     .then((result) => {
  //         console.log(result.text);
  //     }, (error) => {
  //         console.log(error.text);
  //     });
  //     e.target.reset(); 
  // };

  return (
    <section id="contact" className='bg-custom-contact h-[790px] w-full text-center'>
      <div className='lg:ml-[330px] ml-0 -mt-[50px] lg:-mt-0'>
      <div className='p-24 pb-7'>
        <h1 className='text-5xl text-white'>Contact Me</h1>
        <br />
        <p className='text-xl text-white'>If you have any questions, feel free to reach out below!</p>
      </div>
      <div className='max-w-[230px] md:max-w-[500px] flex flex-col mx-auto'>
        <form className='flex flex-col'>
            <label></label>
            <input type="text" placeholder='Name' className='py-[10px] px-[18px] mb-4 text-xl rounded-[10px] ' name='user_name'></input>
            <label></label>
            <input type="email" placeholder='Email' className='py-[10px] px-[18px] mb-4 text-xl rounded-[10px]' name='user_email'></input>
            <label></label>
            <input type="text" placeholder='Subject' className='py-[10px] px-[18px] mb-4 text-xl rounded-[10px]' name='subject'></input>
            <label></label>
            <textarea rows={6}  placeholder='Type your message here' className='py-[10px] px-[18px] mb-4 text-xl rounded-[10px]' name='message'/>
            <button type='submit' className='py-[12px] px-[32px] text-white font-[800] text-lg border border-2-black rounded-[10px] btn'>Submit</button>
        </form>
        </div>
        </div>
    </section>
  )
}

export default Contact