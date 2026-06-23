import React, {useState} from 'react'

const Contact = () => {
  return (
    
    <div className='contact h-[50%] w-[90%] md:w-[40%] bg-[#161B22] relative top-[10%] mx-auto gap-3 flex flex-col justify-center items-center px-2 py-3'>
        <a className={`flex rounded-3xl py-2 px-3 bg-white gap-0.5  hover:bg-[#a70505] hover:text-white w-[75%] md:w-[40%] justify-around items-center`}  href="mailto:shantanu.kumar.singh26@gmail.com">Gmail <span >↗</span><img className='h-10' src="./images/gmail.webp" alt="" /></a>
        <a className={`flex rounded-3xl py-2 px-3 bg-white gap-0.5 hover:bg-[#000093] hover:text-white w-[75%] md:w-[40%] justify-around items-center`}  href="https://www.linkedin.com/in/shantanu-kumar-singh26">Linkedin <span >↗</span><img className='h-10' src="./images/in.jpg" alt="" /></a>
        <a className={`flex rounded-3xl py-2 px-3 bg-white gap-0.5 hover:bg-[yellow] w-[75%] md:w-[40%] justify-around items-center`}  href="https://github.com/Shantanu2605">Github <span >↗</span><img className='h-10' src="./images/hub.svg" alt="" /></a>
        <a className={`flex rounded-3xl py-2 px-3 bg-white gap-0.5 hover:bg-[#f190a1] w-[75%] md:w-[40%] justify-around items-center`}  href="https://www.instagram.com/shantanu_kumar26/#">Instagram <span >↗</span><img className='h-10' src="./images/gram.png" alt="" /></a>
    </div>
  )
}

export default Contact
