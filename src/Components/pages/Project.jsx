import mywork_data from "../../assets/mywork_data"
import mobile from "../../assets/mobile"
import fire from "../../assets/fire1.png"
import { useState } from "react"
import { Link } from "react-router-dom"

const Project = () => {
  const [active, setActive] = useState("web")
  const data = active === "web" ? mywork_data : mobile

  return (
    <div className="px-0 sm:px-15">
      <div className="flex gap-2">
        <button onClick={() => setActive("web")} className="cursor-pointer border-2 px-5 py-2 rounded-full flex justify-center items-center gap-2">
          <img src={fire} alt="" className={`transition-all duration-300 ${active === "web" ? "w-5 opacity-100 scale-100" : "w-0 opacity-0 scale-50"}`} />
          <p>Web Dev</p>
        </button>
        <button onClick={() => setActive("mobile")} className="cursor-pointer border-2 px-5 py-2 rounded-full flex justify-center items-center gap-2">
          <img src={fire} alt="" className={`transition-all duration-300 ${active === "mobile" ? "w-5 opacity-100 scale-100" : "w-0 opacity-0 scale-50"}`} />
          <p>Mobile Dev</p>
        </button>
      </div>
      <div className="mt-5">
        <p>Temukan project-project seru lainnya disini. stay tunedd!</p>
      </div>
      <div key={active} className="grid grid-cols-1 sm:grid-cols-3 gap-5 py-8 animate-[fadeUp_0.6s_ease]">
        {data.map((work, index) => (
          <Link key={index} to={`/dashboard/result/${work.w_name}`}>
            <img key={index} src={work.w_img} className="box-border hover:transition duration-300 cursor-pointer transform hover:scale-[1.04] hover:border-2 hover:border-[#16FF00] rounded-[10px]" alt="" />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Project
