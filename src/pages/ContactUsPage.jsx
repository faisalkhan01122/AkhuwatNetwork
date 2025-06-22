import React from 'react'
import HeroImgSection from '../components/HeroImgSection'

const ContactUsPage = () => {
  return (
    <>
    <HeroImgSection imageUrl="https://i.postimg.cc/zGZsSdqf/akhuwatfoundationbusinessloan3.jpg"
        text="Contact Us"/>
<section className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 px-4 py-8 justify-center items-center contact-images">
  <img
    src="https://i.postimg.cc/CLqy8yTt/akhuwatfoundationbusinessloan2.jpg"
    alt="Business Loan - Akhuwat Foundation"
    className="w-full md:w-1/2 h-auto rounded-lg shadow-md object-cover"
  />
  <img
    src="https://i.postimg.cc/1tjTgBWs/akhuwatfoundationhomeloan.jpg"
    alt="Home Loan - Akhuwat Foundation"
    className="w-full md:w-1/2 h-auto rounded-lg shadow-md object-cover"
  />
</section>
{/* ---------------------Section2-------------------- */}
<section className="bg-[#004d1a] text-white py-10 px-4 contact-form-container">
  <div className="max-w-4xl mx-auto contact-form">
    <form
      action="https://akhuwat.network/contact-submit"
      method="POST"
      className="flex flex-col"
    >
      <input
        type="hidden"
        name="_token"
        value="cSdACfwvRRbJpn1dO88IcqHwYIIlGWVmzRTlhvGT"
        autoComplete="off"
      />
      <input
        type="text"
        name="name"
        placeholder="Name"
        required
        className="w-full p-4 my-4 rounded border-none text-black"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        className="w-full p-4 my-4 rounded border-none text-black"
      />
      <textarea
        name="message"
        placeholder="Message"
        rows={6}
        required
        className="w-full p-4 my-4 rounded border-none text-black resize-none"
      ></textarea>
      <input
        type="submit"
        value="Send"
        className="bg-[#66cc66] text-white font-bold cursor-pointer w-full p-4 my-4 rounded hover:bg-[#57b957] transition-colors"
      />
    </form>
  </div>
</section>


    </>
  )
}

export default ContactUsPage