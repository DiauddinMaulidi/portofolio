import theme_pattern from "../assets/theme2.svg"
import mywork_data from "../assets/mywork_data"
import arrow_icon from "../assets/arrow_icon.svg"

const MyWork = () => {
  return (
    <div id="work" className='mywork flex flex-col items-center justify-center gap-20 my-17.5 mx-5 sm:mx-40'>
      <div className="mywork-title relative">
        <h1 className="py-0 px-7.5 text-[40px] sm:text-[50px] font-semibold">My Latest Work</h1>
        <img src={theme_pattern} className="absolute w-60 bottom-0 right-5 -z-1" alt="" />
      </div>
      <div className="mywork-container grid grid-cols-1 sm:grid-cols-3 gap-5">
        {mywork_data.map((work, index) => {
          return <img key={index} src={work.w_img} className="box-border hover:transition duration-300 cursor-pointer transform hover:scale-[1.05] hover:border-4 hover:border-[#16FF00] rounded-[10px]" alt="" />
        })}
      </div>
      <div className="mywork-showmore flex gap-3.75 rounded-[50px] py-2 px-6 border-2 border-white text-[20px] font-medium mb-15 cursor-pointer hover:gap-6.25 hover:transition-all duration-500">
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  )
}

export default MyWork
