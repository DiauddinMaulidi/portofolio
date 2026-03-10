import { useState } from "react"
import theme_pattern from "../assets/theme2.svg"
import mail_icon from "../assets/mail_icon.svg"
import location_icon from "../assets/location_icon.svg"
import call_icon from "../assets/call_icon.svg"

const Contact = () => {
  const [result, setResult] = useState({
    name: "",
    email: "",
    message: ""
  });
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "cef4f236-2be8-44dd-90b7-3929bfebd318");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if(data.success) {
      alert("success")
    }
    setResult({
      name: "",
      email: "",
      message: ""
    })
  };

  return (
    <div id="contact" className='flex flex-col items-center justify-center gap-20 my-17.5 mx-5 sm:mx-40'>
      <div className="contact-title relative">
        <h1 className="py-0 px-7.5 text-[45px] sm:text-[50px] font-semibold">Get in touch</h1>
        <img src={theme_pattern} alt="" className="absolute w-60 bottom-0 right-5 -z-1" />
      </div>
      <div className="contact-section flex flex-col sm:flex-row gap-35">
        <div className="contact-left flex flex-col gap-7.5">
            <h1 className="text-[60px] font-bold bg-linear-to-r from-[#FFED00] from-[0.37%] to-[#16FF00] to-[102.09%] bg-clip-text text-transparent">Let's talk</h1>
            <p className="max-w-137.5 text-[#D8D8D8] text-[20px] leading-7.5">You can contact me here!. Let's build Indonesia together by advancing its technology.</p>
            <div className="contact-details flex flex-col gap-7.5 text-[#D8D8D8] text-[20px]">
                <div className="contact-detail flex items-center gap-4.5">
                    <img src={mail_icon} alt="" /><p>d14k.010@gmail.com</p>
                </div>
                <div className="contact-detail flex items-center gap-4.5">
                    <img src={call_icon} alt="" /><p>087854273472</p>
                </div>
                <div className="contact-detail flex items-center gap-4.5">
                    <img src={location_icon} alt="" /><p>Lombok, Nusa Tenggara Barat</p>
                </div>
            </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right flex flex-col items-start gap-5">
            <label htmlFor="" className="text-[#D8D8D8] text-[20px] font-medium">Your Name</label>
            <input type="text" value={result.name}  onChange={(e) => setResult(e.target.value)} placeholder="Enter your name" name="name" className="border-none w-full sm:w-107.5 h-13.5 pl-4.5 rounded-sm bg-[#32323c] text-[#A0A0A0] text-[18px]" />
            <label htmlFor="" className="text-[#D8D8D8] text-[20px] font-medium">Your Email</label>
            <input type="email" value={result.email}  onChange={(e) => setResult(e.target.value)} placeholder="Enter your email" name="email" className="border-none w-full sm:w-107.5 h-13.5 pl-4.5 rounded-sm bg-[#32323c] text-[#A0A0A0] text-[18px]" />
            <label htmlFor="" className="text-[#D8D8D8] text-[20px] font-medium">Write your message here</label>
            <textarea name="message" value={result.message}  onChange={(e) => setResult(e.target.value)} rows={8} placeholder="Enter your message" className="border-none w-full sm:w-107.5 p-4.5 rounded-sm bg-[#32323c] text-[#A0A0A0] text-[18px]"></textarea>
            <button type="submit" className="contact-submit border-none text-white rounded-[50px] bg-linear-to-r from-[#FFED00] from-[0.37%] to-[#16FF00] to-[102.09%] text-[20px] py-3 px-12.5 mb-10 cursor-pointer transition duration-300 hover:transform hover:scale-[1.1]">Submit now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
