import React from 'react'
import HeroSection from '../components/HeroSection'
import AkhuwatScheme from '../section/AkhuwatScheme'
import OurServices from '../section/OurServices'
import LoanInt from '../section/LoanInt'
import FooterBar from '../components/FooterBar'
import LoanSection from '../section/LoanSection'
import LoanCardSection from '../section/LoanCardSection'
import AkhuwatLoanSection from '../section/AkhuwatLoanSection'
import AkhuwatTrustSection from '../section/AkhuwatTrustSection'
import ApplyLoanSteps from '../section/ApplyLoanSteps'
import LoanSchemeSection from '../section/LoanSchemeSection'

const HomePage = () => {
  return (
    <div>
        <HeroSection/>
        <FooterBar/>
        {/* <AkhuwatScheme/> */}
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
    </div>
  )
}

export default HomePage