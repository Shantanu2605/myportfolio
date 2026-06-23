import React from 'react'

const Projects = () => {
    return (
        <div className='w-[88%] md:w-[75%] h-[60%] bg-[#161B22] mx-auto relative top-[6%] md:top-[10%] overflow-auto flex flex-col gap-8 font-[Ubuntu]'>
            <div className=' flex flex-col justify-center items-center max-lg:gap-3'>
                <h2 className='font-bold text-white text-2xl font-[Ubuntu]'>FEATURED PROJECTS</h2>
                <div className="featured max-lg:flex-col flex flex-wrap gap-5 w-full h-full px-4 md:px-7 py-2 justify-around"><div className="card hover:bg-[#371144] max-lg:mx-auto w-[85%] md:w-[30%] bg-[#2f0f3a] p-[4px] text-white flex flex-col justify-around gap-4"><img src="./images/spotify.png" className='w-[100%]' /><p> <b>Spotify Clone:</b>  Developed a responsive music streaming application with dynamic playlist management and media playback features.</p>
                <p><b>Technologies Used: </b>HTML, CSS, JS</p> <button><a className='bg-[#02be02] hover:bg-[#007f00] px-2 py-1' href="https://github.com/Shantanu2605/Spotify-Clone">View on Github</a></button></div>
                    <div className="card hover:bg-[#371144] w-[85%] max-lg:mx-auto md:w-[30%]  bg-[#2f0f3a] p-[4px] text-white flex flex-col  justify-around gap-4"><img src="./images/todo.png" className='w-[100%]' /><p> <b>To-Do App:</b>    Built a responsive task management application
                        with CRUD operations and task completion tracking</p> <p><b>Techologies used:</b> ReactJS, Tailwind Css</p><button><a className='bg-[#02be02] hover:bg-[#007f00] px-2 py-1' href="https://github.com/Shantanu2605/todoapp">View on Github</a></button></div>
                    <div className="card hover:bg-[#371144] w-[85%] max-lg:mx-auto md:w-[30%] bg-[#2f0f3a] p-[4px] text-white flex flex-col  justify-around gap-4"><img src="./images/flatheels.png" className='w-[100%]' /><p> <b> E-Commerce App:</b>  Designed a responsive e-commerce platform featuring 40+ products and
                        cart management functionality</p><p><b>Technologies used: </b>HTML, CSS, JS</p> <button><a className='bg-[#02be02] hover:bg-[#007f00] px-2 py-1' href="https://github.com/Shantanu2605/Flatheels">View on Github</a></button></div>
                </div>

            </div>


            <div className='flex justify-around max-lg:flex-col gap-3'>
                <h2 className='text-white text-xl'>MORE PROJECTS</h2>
                <div className="others flex flex-col w-[100%] md:w-[50%] gap-7 md:gap-4"><div className="card max-lg:mx-auto max-lg:flex-col w-[80%] md:w-full hover:bg-[#d9d9d9]  bg-white p-3 flex justify-between items-center gap-2"><img src="https://www.stevenvanbelleghem.com/content/uploads/2023/11/19IcqVZ48A0tQba1-F_yIpg.jpeg" className='w-[100%] md:w-[25%]' alt="" /> <p className='w-full'><b> Voice Assistant:</b> Built a Python-based voice assistant capable of executing voice commands 
and providing automated responses using speech-processing libraries.</p><a className='bg-[#05e405] hover:bg-[#00c400] p-2 rounded-none md:rounded-full w-[22%] md:w-[15%]' href="https://github.com/Shantanu2605/Jarvis.py"><img src="./images/hub.svg" className='h-[100%] md:h-[20%]' alt="" /></a></div>
                    <div className="card max-lg:mx-auto max-lg:flex-col  hover:bg-[#d9d9d9] w-[80%] md:w-full bg-white p-3 flex justify-between items-center gap-2"><img src="./images/improtext.png" className='w-[100%] md:w-[25%]' alt="" /> <p className='w-full'><b>Text Utility Web Application: </b>Developed a responsive text processing application using Django, 
Python, and Bootstrap, providing automated text cleaning and formatting features such as 
uppercase conversion, punctuation filtering, and whitespace normalization</p><a className='bg-[#05e405] hover:bg-[#00c400] p-2 rounded-none md:rounded-full w-[22%] md:w-[15%]' href="https://github.com/Shantanu2605/improtext"><img src="./images/hub.svg" className='h-[100%] md:h-[20%]' alt="" /></a></div>
                    <div className="card max-lg:mx-auto max-lg:flex-col hover:bg-[#d9d9d9]  w-[80%] md:w-full bg-white p-3 flex justify-between items-center gap-2"><img src="https://www.coolmathgames.com/sites/default/files/2022-04/Nostalgic%20Games%20Snake.png" className='w-[100%] md:w-[25%]' alt="" /> <p className='w-full'><b>Snake Game:</b> Developed a classic Snake Game in Python implementing real-time controls, 
collision detection, and score tracking.</p><a className='bg-[#05e405] hover:bg-[#00c400] p-2 rounded-none md:rounded-full w-[22%] md:w-[15%]' href="https://github.com/Shantanu2605/Snake-Game"><img src="./images/hub.svg" className='h-full md:h-[20%]' alt="" /></a></div>
                    <div className="card max-lg:mx-auto max-lg:flex-col hover:bg-[#d9d9d9]  w-[80%] md:w-full bg-white p-3 flex justify-between items-center gap-2"><img src="https://www.wondermind.com/wp-content/uploads/2024/09/20-Feel-Good-Movies-People-Swear-By-For-Your-Next-Bad-Day.jpg" className='w-[100%] md:w-[25%]' alt="" /> <p className='w-full'><b>Movie Recommendation System </b> in Python using Pandas, TF-IDF vectorization and 
content-based filtering to recommend similar movies based on user preferences.</p><a className='bg-[#05e405] hover:bg-[#00c400] p-2 rounded-none md:rounded-full w-[22%] md:w-[15%]' href="https://github.com/Shantanu2605/movie_recommendation"><img src="./images/hub.svg" className='h-[100%] md:h-[20%]' alt="" /></a></div>
                    
                    </div>
                    
            </div>

            <div className='mx-auto text-white p-3 text-center'>
                 Interested in exploring more projects? <br />
                                            
Visit my <a className='text-blue-400 hover:underline' href="https://github.com/Shantanu2605">Github profile</a> for additional repositories and experiments.
            </div>
            
        </div>
    )
}

export default Projects
