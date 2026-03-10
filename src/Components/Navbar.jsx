import { useRef, useState } from 'react'
// import logo from "../assets/logo.svg"
import underline from "../assets/underline2.svg"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from "../assets/menu_open.svg"
import menu_close from "../assets/menu_close.svg"


const Navbar = () => {
  const [menu, setMenu] = useState("home")
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  }
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  }
  

  return (
    <div className='flex items-center justify-center my-4.5 mx-11.25 sm:my-5 sm:mx-42.5'>
        {/* <img src={logo} alt="" /> */}
        <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open block sm:hidden mt-5 fixed right-7.5' />
        <ul ref={menuRef} className='flex items-start justify-start list-none fixed top-0 gap-7.5 w-[55%] h-full z-2 transition-right duration-300 -right-87.5 flex-col bg-[#1F0016] sm:bg-transparent sm:max-w-full sm:static sm:flex-row sm:items-center sm:justify-center sm:gap-15'>
          <div className='relative w-full'>
            <img src={menu_close} onClick={closeMenu} alt="" className='nav-mob-close block sm:hidden absolute top-7.5 right-5 w-7.5' />
          </div>
          <li className='flex flex-row sm:flex-col cursor-pointer pl-15 sm:pl-0'><AnchorLink className='anchor-link no-underline' offset={50} href='#home'><p onClick={() => setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<img className='flex m-auto' src={underline} />:<></>}</li>
          <li className='flex flex-row sm:flex-col cursor-pointer pl-15 sm:pl-0'><AnchorLink className='anchor-link no-underline' offset={50} href='#about'><p onClick={() => setMenu("about")}>AboutMe</p></AnchorLink>{menu==="about"?<img className='flex m-auto' src={underline} />:<></>}</li>
          <li className='flex flex-row sm:flex-col cursor-pointer pl-15 sm:pl-0'><AnchorLink className='anchor-link no-underline' offset={50} href='#services'><p onClick={() => setMenu("services")}>Services</p></AnchorLink>{menu==="services"?<img className='flex m-auto' src={underline} />:<></>}</li>
          <li className='flex flex-row sm:flex-col cursor-pointer pl-15 sm:pl-0'><AnchorLink className='anchor-link no-underline' offset={50} href='#work'><p onClick={() => setMenu("work")}>Portfolio</p></AnchorLink>{menu==="work"?<img className='flex m-auto' src={underline} />:<></>}</li>
          <li className='flex flex-row sm:flex-col cursor-pointer pl-15 sm:pl-0'><AnchorLink className='anchor-link no-underline' offset={50} href='#contact'><p onClick={() => setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"?<img className='flex m-auto' src={underline} />:<></>}</li>
        </ul>
        {/* <div className='py-3 px-8 rounded-[50px] bg-linear-to-r from-[#FFED00] from-[0.37%] to-[#16FF00] to-[102.09%] cursor-pointer transition duration-500 hover:transform hover:scale-[1.05] hidden sm:block'><AnchorLink className='anchor-link no-underline' offset={50} href='#contact'>Connect With Me</AnchorLink></div> */}
    </div>
  )
}

export default Navbar