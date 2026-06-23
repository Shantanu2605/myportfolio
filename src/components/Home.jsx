import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='flex max-lg:flex-col justify-around max-lg:h-[65%] overflow-auto w-[82%] mt-0 md:w-[50%] items-center rounded-xl gap-3 mx-auto bg-[#161B22] text-white md:mt-10 px-2 py-5 relative top-[5%] md:top-[10%]'>
        <div className='flex gap-4 flex-col justify-center item-center font-[Roboto] text-[20px] text-center'><div><p className='text-[red] text-3xl'>  Shantanu Kumar Singh</p> <p className='text-green-200'>Programmer | Problem Solver</p>
        <p className='text-green-200'>Passionate about Science & Technology  </p></div> <div className='flex flex-col gap-2'><p>Building projects and continuously learning new technologies to solve real-world problems</p>
         <p>Lets connect and learn from each other!</p></div>
         <div className="buttons max-lg:flex-col flex justify-center gap-4"><Link to="/projects" className='bg-[green] hover:bg-[#015c01] px-2 py-1 rounded-md'>View Projects</Link><Link to="../Resume.pdf" reloadDocument download="/" className='bg-[#6d05d1] px-2 py-1 hover:bg-[#4b0291] rounded-md'>Resume</Link><Link to="/contact" className='bg-[red] hover:bg-[#b40000] px-2 py-1 rounded-md'>Contact Me</Link></div></div>
         <img className='h-50 rounded-md' src="./images/me.jpg" alt="" />
      
    </div>
  )
}

export default Home
