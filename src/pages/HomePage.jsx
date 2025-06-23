import HeroSection from "../components/HeroSection"
import AkhuwatScheme from "../section/AkhuwatScheme"
import OurServices from "../section/OurServices"
import LoanInt from "../section/LoanInt"
import FooterBar from "../components/FooterBar"
import LoanSection from "../section/LoanSection"
import LoanCardSection from "../section/LoanCardSection"
import AkhuwatLoanSection from "../section/AkhuwatLoanSection"
import AkhuwatTrustSection from "../section/AkhuwatTrustSection"
import ApplyLoanSteps from "../section/ApplyLoanSteps"
import LoanSchemeSection from "../section/LoanSchemeSection"
import FaqSection from "../section/FaqSection"
import AboutSection from "../section/AboutSection"
import ServicesCarousel from "../section/ServicesCarousel"
import TeamSection from "../section/TeamSection"
import FeaturedCausesSection from "../section/FeaturedCausesSection"
import TestimonialsSection from "../section/TestimonialsSection"
import CollaboratingPartnersSection from "../section/CollaboratingPartnersSection"

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <FooterBar />
      <AkhuwatScheme />
      <LoanInt />
      <OurServices />
      <TestimonialsSection />
     
      <AkhuwatScheme />
      <LoanSection />
      <LoanCardSection />
      <AkhuwatLoanSection />
      <FeaturedCausesSection />
      <AkhuwatTrustSection />
      <ApplyLoanSteps />
      <LoanSchemeSection />
      <TeamSection />
      <CollaboratingPartnersSection />
      <FaqSection />
      <AboutSection />
      <ServicesCarousel />
    </div>
  )
}

export default HomePage
