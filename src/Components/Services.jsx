import theme_pattern from '../assets/theme2.svg'
import Services_data from "../assets/services_data"

const Services = () => {
  return (
    <div id='services' className='services flex flex-col items-center justify-center gap-10 my-16 mx-5 sm:mx-40'>
      <div className="services-title relative">
        <h1 className='py-0 px-7.5 text-[50px] font-semibold'>My Services</h1>
        <img src={theme_pattern} className='absolute w-50 bottom-0 right-5 -z-1' alt="" />
      </div>
      <div className="services-container grid grid-cols-1 sm:grid-cols-3 gap-5 mb-15">
        {Services_data.map((services, index) => {
            return <div key={index} className='services-format flex flex-col justify-center gap-5 p-5 rounded-[10px] border-2 border-white transition duration-[0.4s] cursor-pointer hover:border-2 hover:border-[#16FF00] hover:bg-linear-to-r from-[#F4CE14] from-[0.37%] to-[#379777] to-[102.09%] hover:transform hover:scale-[1.05]'>
                <h3 className='text-[20px] font-semibold'>{services.s_no}</h3>
                <h2 className='text-[30px] font-extrabold bg-linear-to-r from-[#1A4D2E] from-[0.37%] to-[#FF9F29] to-[102.09%] bg-clip-text text-transparent'>{services.s_name}</h2>
                <p className='text-[#d4d4d4] leading-10 max-w-75'>{services.s_desc}</p>
            </div>
        })}
      </div>
    </div>
  )
}

export default Services
