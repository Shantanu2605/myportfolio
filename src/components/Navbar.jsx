import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [burger, setburger] = useState(false);

  const handleburger= ()=>{
    setburger(!burger);
  }

  return (
    <div>
        <nav className='flex-col md:flex-row max-lg:text-center flex justify-between bg-[#161B22] text-white items-center px-2.5 py-1'>
            <div className="logo flex flex-col justify-center"><h2 className='font-[Audiowide]'>SHANTANU KUMAR SINGH</h2><p className='text-gray-300 font-[SN Pro]'>CSE Student @DTU</p></div>
            <div className="resume text-xl bg-[#6d05d1] font-[Audiowide] px-1.5 rounded-md hover:bg-[#4b0291] py-1"><Link to="./documents/Resume.pdf" download="/" reloadDocument>Resume ↗</Link></div>
        </nav>

        <nav className='fixed bottom-0 flex justify-between items-center max-lg:h-[13%] text-white w-full px-[7%] md:px-9.5 py-1 bg-[#161B22] '>
            <div className="logo"><img src="./images/logo.png" className={`${burger && "hidden"} md:block h-26`} alt="" /></div>
            <ul className={`${burger?"flex flex-wrap":"hidden"} md:flex-nowrap md:flex items-center gap-5`}>
            <li className={`${burger && "w-[35%]"}`}><Link className='text-xl  font-[Audiowide] hover:text-yellow-400 hover:text-2xl hover:underline' to="/">Home</Link></li>
            <li className={`${burger && "w-[35%]"}`}><Link className='text-xl font-[Audiowide]  hover:text-yellow-400 hover:text-2xl hover:underline' to="/about">About</Link></li>
            <li className={`${burger && "w-[35%]"}`}><Link className='text-xl  font-[Audiowide] hover:text-yellow-400 hover:text-2xl hover:underline' to="/projects">Projects</Link></li>
            <li className={`${burger && "w-[35%]"}`}><Link className='text-xl font-[Audiowide]  hover:text-yellow-400 hover:text-2xl hover:underline' to="/contact">Contact</Link></li>
            </ul>
             {!burger && <div className="burger block md:hidden cursor-pointer" onClick={handleburger}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></div>}
             {burger && <img onClick={handleburger} className='h-[24px] cursor-pointer md:hidden' src="./images/images.png" alt="" />}
        </nav>
      
    </div>
  )
}

export default Navbar
