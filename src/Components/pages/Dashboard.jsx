import React, { useRef, useState } from 'react'
import { ArrowLeft } from 'lucide-react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import menu_open from "../../assets/menu_open.svg"
import menu_close from "../../assets/menu_close.svg"

const Dashboard = () => {
    const navigate = useNavigate()
    const [active, setActive] = useState("project")
    const menuRef = useRef();
    
    const openMenu = () => {
      menuRef.current.style.right = "0";
    }
    const closeMenu = () => {
      menuRef.current.style.right = "-350px";
    }

    return (
        <div className='flex flex-col fixed h-full w-full'>
            <div className='h-14 flex items-center px-4 border-b shrink-0'>
                <button className='flex gap-3 cursor-pointer' onClick={() => navigate("/")}>
                    <ArrowLeft className='animate-bounce transition-all duration-300' />
                    <p>Back to home</p>
                </button>
                <img src={menu_open} onClick={openMenu} alt="" className='block sm:hidden fixed right-7.5' />
            </div>
            <div className='flex flex-1 h-full'>
                <div ref={menuRef} className="fixed sm:static top-0 -right-87.5 h-full z-10 sm:right-0 w-48 bg-[#1F0016] sm:bg-transparent sm:border-r-2 py-4 sm:border-neutral-300 transition-all duration-300">
                    <div className='relative w-full'>
                        <img src={menu_close} onClick={closeMenu} alt="" className='block sm:hidden absolute top-2 right-5 w-7.5' />
                    </div>
                    <Link to="/dashboard">
                        <button onClick={() => setActive("project")} className={`w-full text-start p-3 my-3 cursor-pointer ${active === "project" ? "border-l-4 border-[#16FF00] bg-linear-to-r from-[#24581f] from-[0.37%] to-transparent to-[102.09%]" : "bg-transparent"}`}>Project</button>
                    </Link>
                    <Link to="/dashboard/experience">
                        <button onClick={() => setActive("experience")} className={`w-full text-start p-3 my-3 cursor-pointer ${active === "experience" ? "border-l-4 border-[#16FF00] bg-linear-to-r from-[#24581f] from-[0.37%] to-transparent to-[102.09%]" : "bg-transparent"}`}>Experience</button>
                    </Link>
                    <Link to="/dashboard/paper">
                        <button onClick={() => setActive("paper")} className={`w-full text-start p-3 my-3 cursor-pointer ${active === "paper" ? "border-l-4 border-[#16FF00] bg-linear-to-r from-[#24581f] from-[0.37%] to-transparent to-[102.09%]" : "bg-transparent"}`}>Paper</button>
                    </Link>
                    <Link to="/dashboard/certificate">
                        <button onClick={() => setActive("certificate")} className={`w-full text-start p-3 my-3 cursor-pointer ${active === "certificate" ? "border-l-4 border-[#16FF00] bg-linear-to-r from-[#24581f] from-[0.37%] to-transparent to-[102.09%]" : "bg-transparent"}`}>Certificate</button>
                    </Link>
                </div>
                <div className="flex-1 overflow-y-auto p-5">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Dashboard
