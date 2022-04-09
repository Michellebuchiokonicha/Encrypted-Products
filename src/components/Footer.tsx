import React from 'react'
import './man.css'
import {Flex, Box, Text, UnorderedList, ListItem, CSSReset} from '@chakra-ui/react'

// import theme from './theme'

function Footer() {
  return (
    <div className='div'>
      <CSSReset />
    <Flex overflowX='hidden' marginX='auto' flexDir='column' bgColor='#1B1C31' color='#ffffff'>
      <Flex flexDir={['column', 'column', 'row']} px={['0px','0px','100px']} py='100px' h={['1166px','1166px','446px']}>
        <Box flex='1'>
          <Text textAlign={['justify','justify', 'justify']} lineHeight='27.32px' pb='27px' fontSize='20px' px={['70px','70px' ,'40px', 0]} fontWeight='700'>AR SHAKIR</Text>
        <Text w={['334px','334','440px','520px']}  textAlign={['center','center', 'justify']}  color='#40444A' lineHeight='26px' fontSize='16px' px={['100px', '40px', 0]} fontWeight='500'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts 
              all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.
        </Text>
        </Box>
        <Flex textAlign={['center','center', 'justify']} flexDir={['column', 'column', 'row']} flex='1' justifyContent='space-between'>
          <UnorderedList listStyleType='none' gap={20}> 
            <ListItem fontSize='21px' fontWeight='700' pb='27px'>Company</ListItem>
            <ListItem pb='17px'>About us</ListItem>
            <ListItem pb='17px'>Careers</ListItem>
            <ListItem pb='17px'>Blog</ListItem>
            <ListItem pb='17px'>Pricing</ListItem>
          </UnorderedList>
          <UnorderedList gap={20} listStyleType='none'>
          <ListItem fontSize='21px' fontWeight='700' pb='27px'>Product</ListItem>
            <ListItem pb='17px'>Invoicing Platform</ListItem>
            <ListItem pb='17px'>Accounting Platform</ListItem>
            <ListItem pb='17px'>Create Proposal</ListItem>
            <ListItem pb='17px'>Contracts</ListItem>
          </UnorderedList>
          <UnorderedList listStyleType='none'>
          <ListItem fontSize='21px' fontWeight='700' pb='27px'>Resources</ListItem>
            <ListItem pb='17px'>Proposal Template</ListItem>
            <ListItem pb='17px'>Invoice Template</ListItem>
            <ListItem pb='17px'>Tutorial</ListItem>
            <ListItem pb='17px'>How to write a contract</ListItem>
          </UnorderedList>
        </Flex>
      </Flex>
      <Box fontSize='12px' h={['400px','400px','68px']}>
      <Box borderBottom='1px solid #404444'></Box>
        <Flex flexDir={['column', 'column', 'row']} px={['0px','0px','70px']} gap={10} justifyContent='space-between' py={['100PX','100PX','20px']}>
          <Box rowGap='0px' display='flex' flexDir={['column','column', 'row']} columnGap={10} flex='1.6'>
           <Text textAlign={['center', 'center', 'justify']}>2022 AR Shakir. All rights reserved.</Text>
           <Text textAlign={['center','center', 'justify']}> -- Privacy Policy </Text>
           <Text textAlign={['center','center', 'justify']}>- Terms of Services</Text>
          </Box >
          <Box textAlign={['center','center', 'justify']} flex='0.4'>Supported by Microsoft Startup</Box>
        </Flex>
        </Box>
    </Flex>
    </div>
  )
}

export default Footer


