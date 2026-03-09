import footer_logo from "../assets/footer_logo.svg"
import user_icon from "../assets/user_icon.svg"

const Footer = () => {
  return (
    <div className='footer my-10 mx-5 sm:mx-40 flex flex-col gap-6.25'>
      <div className="footer-top flex sm:flex-row flex-col justify-between">
        <div className="footer-top-left text-[18px] mb-10 sm:mb-0 max-w-75">
            <img src={footer_logo} alt="" />
            <p>thank you for every day. don't forget to be grateful</p>
        </div>
        <div className="footer-top-right flex items-center gap-3 sm:gap-7.5">
            <div className="footer-email-input flex gap-30px py-3.75 px-5 rounded-[50px] bg-[#32323B] pr-20 hover:border-2">
                <img src={user_icon} alt="" />
                <input type="email" placeholder="Enter your email" className="outline-0 border-none bg-transparent text-[#a0a0a0] text-[15px]" />
            </div>
            <div className="footer-subcribe text-[18px] py-3.75 px-7.5 rounded-[40px] bg-linear-to-r from-[#FFED00] from-[0.37%] to-[#16FF00] to-[102.09%] cursor-pointer hover:transition hover:scale-[1.1] duration-300">
                Subscribe
            </div>
        </div>
      </div>
        <hr />
        <div className="footer-bottom flex flex-col sm:flex-row justify-between text-[15px]">
            <p className="footer-bottom-left">© 2026 MOH.DIA'UDDIN MAULIDI. All right reserved</p>
            <div className="footer-bottom-right flex gap-11.25 mb-11.25">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
