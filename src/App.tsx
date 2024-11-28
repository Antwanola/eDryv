import Header from "./custom_components/Header/Header"
import Hero from "./custom_components/Hero/Hero"
import PartnerSlide from "./custom_components/Partnerslide"
import Discover from "./custom_components/What we do/Discover"
import Display_CTA from "./custom_components/Product_CTA/Display_CTA"
import StepBackdrop from "./custom_components/Steps/stepBackdrop"

const App = () => {
  return (
    <>
     <Header/>
      <Hero/>
      <PartnerSlide/>
      <Discover/>
      <Display_CTA/>
    <StepBackdrop/>
    </>
  )
}
export default App