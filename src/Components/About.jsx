import theme_pattern from '../assets/theme2.svg'
import profile_img from '../assets/pp.jpeg'
import html from '../assets/html-5.svg'
import css from '../assets/css3.svg'
import tailwind from '../assets/tailwind-css.svg'
import javascript from '../assets/javascript.svg'
import nodejs from '../assets/nodejs.svg'
import reactjs from '../assets/react.svg'
import nextjs from '../assets/icons8-nextjs.svg'


const About = () => {
  return (
    <div id='about' className='flex flex-col items-center justify-center mb-30 gap-20 my-12.5 mx-5 sm:mx-42.5'>
      <div className="about-title relative">
        <h1 className='px-7.5 text-[50px] font-semibold'>About me</h1>
        <img src={theme_pattern} className='absolute w-50 bottom-0 right-5 -z-1' alt="" />
      </div>
      <div className="about-sections flex gap-10">
        <div className="about-left w-full mt-5 hidden sm:block">
            <img src={profile_img} alt="" className='rounded-md' />
        </div>
        <div className="about-right flex flex-col gap-20">
            <div className="flex flex-col gap-5 text-[20px]">
                <p>I specialize in building modern, scalable web applications using the JavaScript ecosystem. I enjoy working across the entire stack from designing intuitive user interfaces to developing robust backend systems and APIs.</p>
                <p>My focus is on writing clean, maintainable code and building applications that deliver real value to users. I’m always exploring new technologies and improving my skills to create better digital experiences.</p>
            </div> 
            <div className="about-skills flex flex-col gap-5 -mt-15">
                <div className="about-skill flex items-center transition duration-300 transform hover:scale-[1.05]">
                    <p className='min-w-37.5 text-[20px] font-medium flex'>
                        <img src={html} className='w-10' alt="html" /> & <img src={css} className='w-10' alt="css" /> 
                    </p><hr className='w-[30%] sm:w-[50%] outline-none border-none h-2 rounded-[50px] bg-linear-to-r from-[#FFED00] from-[0.37%] to-[#16FF00] to-[102.09%]' />
                </div>
                <div className="about-skill flex items-center transition duration-300 transform hover:scale-[1.05]">
                    <p className='min-w-37.5 text-[20px] font-medium'>
                        <img src={tailwind} className='w-10' alt="tailwind" />
                    </p><hr className='w-[40%] sm:w-[60%] outline-none border-none h-2 rounded-[50px] bg-linear-to-r from-[#FFED00] from-[0.37%] to-[#16FF00] to-[102.09%]' />
                </div>
                <div className="about-skill flex items-center transition duration-300 transform hover:scale-[1.05]">
                    <p className='min-w-37.5 text-[20px] font-medium'>
                        <img src={javascript} className='w-10' alt="javascript" />
                    </p><hr className='w-[40%] sm:w-[60%] outline-none border-none h-2 rounded-[50px] bg-linear-to-r from-[#FFED00] from-[0.37%] to-[#16FF00] to-[102.09%]' />
                </div>
                <div className="about-skill flex items-center transition duration-300 transform hover:scale-[1.05]">
                    <p className='min-w-37.5 text-[20px] font-medium'>
                        <img src={nodejs} className='w-10' alt="nodejs" />
                    </p><hr className='w-[45%] sm:w-[65%] outline-none border-none h-2 rounded-[50px] bg-linear-to-r from-[#FFED00] from-[0.37%] to-[#16FF00] to-[102.09%]' />
                </div>
                <div className="about-skill flex items-center transition duration-300 transform hover:scale-[1.05]">
                    <p className='min-w-37.5 text-[20px] font-medium'>
                        <img src={reactjs} className='w-10' alt="reactjs" />
                    </p><hr className='w-[70%] sm:w-[90%] outline-none border-none h-2 rounded-[50px] bg-linear-to-r from-[#FFED00] from-[0.37%] to-[#16FF00] to-[102.09%]' />
                </div>
                <div className="about-skill flex items-center transition duration-300 transform hover:scale-[1.05]">
                    <p className='min-w-37.5 text-[20px] font-medium'>
                        <img src={nextjs} className='w-10' alt="nextjs" />
                    </p><hr className='w-[70%] sm:w-[90%] outline-none border-none h-2 rounded-[50px] bg-linear-to-r from-[#FFED00] from-[0.37%] to-[#16FF00] to-[102.09%]' />
                </div>
            </div>
        </div>
      </div>
        {/* <div className="about-achievments flex w-full justify-around mb-12.5">
            <div className="about-achievement flex flex-col items-center transition duration-500 transform hover:scale-[1.05]">
                <h1 className='text-[40px] font-bold bg-linear-to-r from-[#DA7C25] from-[0.37%] to-[#B923E1] to-[102.09%] bg-clip-text text-transparent'>6</h1>
                <p className='text-[20px] font-bold'>MONTHS OF EXPERIENCE</p>
            </div>
            <hr className='h-22 border' />
            <div className="about-achievement flex flex-col items-center transition duration-500 transform hover:scale-[1.05]">
                <h1 className='text-[40px] font-bold bg-linear-to-r from-[#DA7C25] from-[0.37%] to-[#B923E1] to-[102.09%] bg-clip-text text-transparent'>2</h1>
                <p className='text-[20px] font-bold'>PROJECTS COMPLETED</p>
            </div>
            <hr className='h-22 border' />
            <div className="about-achievement flex flex-col items-center transition duration-500 transform hover:scale-[1.05]">
                <h1 className='text-[40px] font-bold bg-linear-to-r from-[#DA7C25] from-[0.37%] to-[#B923E1] to-[102.09%] bg-clip-text text-transparent'>2</h1>
                <p className='text-[20px] font-bold'>HAPPY CLIENTS</p>
            </div>
        </div> */}
    </div>
  )
}

export default About
