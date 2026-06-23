import React from 'react'

const About = () => {
        return (
                <div className='about w-[88%] top-[6%] md:w-[50%] h-[60%] bg-[#161B22] mx-auto relative md:top-[10%] overflow-auto px-5 py-2 text-white flex flex-col gap-12 '>
                        <div className="cards max-lg:flex-col gap-2 flex justify-between w-full"><div className="card hover:bg-[#29213a] cursor-default bg-[#1d2734] px-2 py-1 w-full md:w-1/4 flex flex-col justify-center items-center"><img className='h-[40px]' src="./images/computer.png" alt="" /><h2 className='text-xl font-bold'>5+</h2><p className='text-sm color-[#c9c9c9]'>Projects</p></div>
                                <div className="card hover:bg-[#29213a] cursor-default bg-[#1d2734] px-2 py-1 w-full md:w-1/4 flex flex-col justify-center items-center"><img className='h-[40px]' src="./images/increase.png" alt="" /><h2 className='text-xl font-bold'>99.5%ile</h2><p className='text-sm color-[#c9c9c9]'>JEE MAINS 2025</p></div>

                                <div className="card hover:bg-[#29213a] cursor-default bg-[#1d2734] px-2 py-1 w-full md:w-1/4 flex flex-col justify-center items-center"><img className='h-[40px]' src="./images/school.svg" alt="" /><h2 className='text-xl font-bold'>CSE@ DTU</h2><p className='text-sm color-[#c9c9c9]'>2025-2029</p></div>

                                <div className="card hover:bg-[#29213a] cursor-default bg-[#1d2734] px-2 py-1 w-full md:w-1/4 flex flex-col justify-center items-center"><img className='h-[40px]' src="./images/star.svg" alt="" /><h2 className='text-xl font-bold'>Always</h2><p>Learning</p></div>

                        </div>

                        <div className="knowledge w-full max-lg:flex-col flex gap-8 md:gap-2 items-center justify-center">
                                <div className="education gap-2 w-[100%] md:w-[48%] flex flex-col"><h1 className='font-bold text-xl max-lg:text-center'>EDUCATION</h1> <div className='bg-[#1d2734] flex flex-col gap-10 pb-[50px] md:pb-[65%] px-1.5 py-2'><div className=''><h2 className='font-bold'>DELHI TECHNOLOGICAL UNIVERSITY (2025-2029)</h2><p className='font-light'>B.Tech. in Computer Science & Engineering</p><p>Member of Software Department at SR DTU</p></div> <div><h2>Senior Secondary Education (Class XII)</h2><p>Grade: 92.2%</p></div>
                                        <div><h2>Senior Secondary Education (Class X)</h2><p>Grade: 94%</p></div></div></div>
                                <div className="skills w-[100%] md:w-[48%] gap-2 flex flex-col"><h1 className='font-bold text-xl max-lg:text-center'>SKILLS</h1><div className="bg-[#1d2734] flex flex-col gap-3 px-1.5 py-2">
                                        <div className='gap-1 flex flex-col'><h3>Languages</h3><div className='flex gap-3 flex-wrap token'><p>C</p> <p>C++</p> <p>Python</p> <p>Javascript</p><p>Java</p></div></div>
                                            <div className='gap-1 flex flex-col'><h3>Frontend</h3><div className='flex gap-3 flex-wrap token'><p>HTML</p> <p>CSS</p> <p>Tailwind CSS</p> <p>Bootstrap</p> <p>ReactJS</p></div></div>
                                                <div className='gap-1 flex flex-col'><h3>Backend</h3><div className='flex gap-3 flex-wrap token'><p>NodeJS</p> <p>Django</p></div></div>
                                                    <div className='gap-1 flex flex-col'><h3>Database</h3><div className='flex gap-3 flex-wrap token'><p>MongoDB</p> </div></div>
                                                        <div className='gap-1 flex flex-col'><h3>Tools</h3><div className='flex gap-3 flex-wrap token'><p>Git</p> <p>GitHub</p> <p>VS Code</p></div></div>
                                                            <div className='gap-1 flex flex-col'><h3>Areas of Interest</h3><div className='flex token gap-3 flex-wrap'><p>Machine Learning</p> <p>Web Development</p> <p>Software Development</p></div></div>
                             
                             
                             
                             
                             
                                </div></div>
                        </div>

                        

                        <div className='education md:flex-row flex-col max-lg:text-center  flex justify-between items-center'><p className='font-bold text-xl head'>ACHIEVEMENTS</p>
                                <div className='flex flex-col justify-center w-[100%] bg-[#1d2734] px-3 py-2 md:w-[65%]'><p>Secured Top 0.5% in JEE MAINS 2025</p> <p>Secured AIR 6449 in JEE Advanced 2025</p> <p>5 star rating in Python @ Hackerrank</p> <p>150+ problems on Leetcode</p></div></div>




                </div>
        )
}

export default About
