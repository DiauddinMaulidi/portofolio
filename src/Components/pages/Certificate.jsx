import React from 'react'
import sertificates from "../../assets/sertificate"

const Certificate = () => {
  return (
    <div className='px-0 sm:px-16 sm:mb-0 mb-16'>
        <div className="text-[40px] font-semibold mb-10">Sertificate</div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {sertificates.map((sertificate, index) => {
                return <img key={index} src={sertificate.s_img} className="box-border hover:transition duration-300 cursor-pointer transform hover:scale-[1.03] hover:border-2 hover:border-[#16FF00] rounded-[10px]" alt="" />
            })}
        </div>
    </div>
  )
}

export default Certificate
