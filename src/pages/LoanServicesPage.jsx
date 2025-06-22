import React from 'react'
import HeroImgSection from '../components/HeroImgSection'
import FooterBar from '../components/FooterBar'
import AkhuwatScheme from '../section/AkhuwatScheme'
import LoanInt from '../section/LoanInt'
import OurServices from '../section/OurServices'
import LoanSection from '../section/LoanSection'
import LoanCardSection from '../section/LoanCardSection'
import AkhuwatLoanSection from '../section/AkhuwatLoanSection'
import AkhuwatTrustSection from '../section/AkhuwatTrustSection'
import ApplyLoanSteps from '../section/ApplyLoanSteps'
import LoanSchemeSection from '../section/LoanSchemeSection'

const LoanServicesPage = () => {
  return (
    <>
    <HeroImgSection imageUrl="https://i.postimg.cc/zGZsSdqf/akhuwatfoundationbusinessloan3.jpg"
        text="Akhuwat Loan Services"/>
         <FooterBar/>
        <AkhuwatScheme/>
        <LoanInt/>
        <OurServices/>
        <h1 className='text-3xl font-bold text-center pt-5 text-[#22C55E]'>AKHUWAT LOAN HELPLINE NUMBER 2025</h1>
         {/* <AkhuwatScheme/> */}
         <LoanSection/>
         <LoanCardSection/>
         <AkhuwatLoanSection/>
         <AkhuwatTrustSection/>
         <ApplyLoanSteps/>
         <LoanSchemeSection/>
    </>
  )
}

export default LoanServicesPage