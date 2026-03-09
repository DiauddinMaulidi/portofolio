import profile_img from '../assets/pp1.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero flex items-center flex-col gap-8.75'>
      <img src={profile_img} alt="" className='mt-20 rounded-full w-75' />
      <h1 className='text-center w-[90%] sm:w-[70%] text-[25px] sm:text-[35px] font-semibold'>I'm <span className='bg-linear-to-r from-[#FFED00] from-[0.37%] to-[#16FF00] to-[102.09%] bg-clip-text text-transparent'>MOH.DIA'UDDIN MAULIDI,</span> fullstack javascript based in LOMBOK, NUSA TENGGARA BARAT, INDONESIA.</h1>
      <p className='text-center text-[20px] leading-10 w-[90%] sm:w-[50%]'>Passionate about building impactful digital products with JavaScript, focusing on performance, clean architecture, and great user experience.</p>
      <div className='hero-action flex items-center gap-6.25 text-[20px] font-medium mb-12.5'>
        <div className="hero-connect py-3 px-8 rounded-[50px] bg-linear-to-r from-[#16FF00] from-[0.37%] to-[#FFED00] to-[102.09%] hover:border-2 border-white cursor-pointer text-[15px] sm:text-[20px]"><AnchorLink className='anchor-link no-underline' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
        <div className="hero-resume py-3 px-8 rounded-[50px] border-2 border-white hover:border-[#16FF00] cursor-pointer text-[15px] sm:text-[20px]">My resume</div>
      </div>
    </div>
  )
}

export default Hero
