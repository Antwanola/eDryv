"use client"

import { Image, Link, Stack } from "@chakra-ui/react";
import { Button } from "../../../components/ui/button"
import {
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "../../../components/ui/drawer"
import { useState } from "react"
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "../../../assets/Logo.png";

const MobileMenu = () => {
  const [open, setOpen] = useState(false)

  return (
    <DrawerRoot open={open} onOpenChange={(e) => setOpen(e.open)} placement={'top'} >
      <DrawerBackdrop  />
      <DrawerTrigger asChild>
        <Button size="xs" bg={'transparent'} color={'black'}>
          <RxHamburgerMenu/>
        </Button>
      </DrawerTrigger>
      <DrawerContent px={5} py={5}>
        <DrawerHeader>
          <DrawerTitle>
            <Image src={Logo} alt="Logo" width="10" height="auto"/>
          </DrawerTitle>
        </DrawerHeader>
        <DrawerBody mt={5}>
          <Stack py={2}>
            <Link href={'/'} py={1} border={0} outline={'none'} fontSize={16} _hover={{color: 'green.700'}} transitionDuration={'0.3s'} textDecoration={'none'}>Home</Link>
            <Link href={'/'} py={1} border={0} outline={'none'} fontSize={16} _hover={{color: 'green.700'}} transitionDuration={'0.3s'} textDecoration={'none'}>Features</Link>
            <Link href={'/'} py={1} border={0} outline={'none'} fontSize={16} _hover={{color: 'green.700'}} transitionDuration={'0.3s'} textDecoration={'none'}>How It Works</Link>
            <Link href={'/'} py={1} border={0} outline={'none'} fontSize={16} _hover={{color: 'green.700'}} transitionDuration={'0.3s'} textDecoration={'none'}>Testimonials</Link>
          </Stack>
        </DrawerBody>
        <DrawerCloseTrigger />
      </DrawerContent>
    </DrawerRoot>
  )
}


export default MobileMenu