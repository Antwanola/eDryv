import { Button } from "./components/ui/button"
import { HStack } from "@chakra-ui/react"
import PageWrapper from "./custom_components/PageWraper"
import Header from "./custom_components/Header/Header"
import Hero from "./custom_components/Hero/Hero"

const App = () => {
  return (
    <PageWrapper>
      <Header/>
      <Hero/>
    </PageWrapper>
  )
}
export default App