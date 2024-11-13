import { Button } from "./components/ui/button"
import { HStack } from "@chakra-ui/react"
import PageWrapper from "./custom_components/PageWraper"
import Header from "./custom_components/Header/Header"
import Hero from "./custom_components/Hero/Hero"
import PartnerSlide from "./custom_components/Partnerslide"
import Discover from "./custom_components/What we do/Discover"
import Product_Cta from "./custom_components/Product_CTA/Product_Cta"

const App = () => {
  return (
    <>
     <Header/>
      <Hero/>
      <PartnerSlide/>
      <Discover/>
      <Product_Cta/>
    </>
  )
}
export default App