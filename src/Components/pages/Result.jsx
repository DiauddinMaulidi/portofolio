import { ArrowLeft, Download, Play } from 'lucide-react'
import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import mywork_data from "../../assets/mywork_data"
import ig from "../../assets/ig.png"
import yt from "../../assets/yt.png"
import github from "../../assets/github.png"

const Result = () => {
  const navigate = useNavigate()
  const { slug } = useParams()
  
  const project = mywork_data.find((item) => item.slug === slug);
  return (
    <div className='p-10'>
      <div className='bg-[#0d6605] flex justify-center items-center rounded-full w-12 h-12'>
        <button className='cursor-pointer' onClick={() => navigate("/dashboard")}>
          <ArrowLeft />
        </button>
      </div>
      <div className='bg-white rounded-2xl text-black mx-0 sm:mx-2 md:mx-32'>
        <div className="p-8 flex flex-col md:flex-row gap-2">
          <img src={project.w_img} className='rounded-2xl w-full md:w-[50%]' alt="IMAGE" />
          <div className='flex flex-col justify-center items-center gap-4 w-full'>
            <Link to={project.w_demo} target='_blank' className='border-2 border-[#16FF00] hover:bg-[#e0fddd] hover:shadow-lg shadow-cyan-500/50 transition-all duration-200 w-52 py-2 rounded-full cursor-pointer flex justify-center gap-3'>
              <Play className='w-5' /> live demo
            </Link>
            <Link to={project.w_code} target='_blank' className='border-2 border-[#16FF00] hover:bg-[#e0fddd] hover:shadow-lg shadow-cyan-500/50 transition-all duration-200 w-52 py-2 rounded-full cursor-pointer flex justify-center gap-3'>
              <Download className='w-5' />source code
            </Link>
          </div>
        </div>
        <div className="px-8 whitespace-pre-line">
          <h1 className='font-bold text-[50px]'>{project.w_name}</h1>
          <p className='pb-6'>{project.w_desc}</p>
        </div>
        <div className="flex gap-3 items-center justify-end px-5 pb-3 w-full">
          <Link to="https://www.instagram.com/diaaaakkkkk/" target='_blank' className='border-2 p-1'>
            <img src={ig} alt="ig" className='w-7' />
          </Link>
          <Link to="https://www.youtube.com/@DchannelAI" target='_blank' className='border-2 p-1'>
            <img src={yt} alt="" className='w-7' />
          </Link>
          <Link to="https://github.com/DiauddinMaulidi" target='_blank' className='border-2 p-1'>
            <img src={github} alt="" className='w-7' />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Result
