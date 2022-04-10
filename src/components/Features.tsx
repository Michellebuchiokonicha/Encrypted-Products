import React from 'react'
import './man.css'
import peep from './Assets/peep.png'
import polygon from './Assets/Polygon.png'
import group from './Assets/Group.png'
import group1 from './Assets/Group1.png'
import group2 from './Assets/Group2.png'
import group3 from './Assets/Group 3.png'
import group4 from './Assets/Group4.png'
import group5 from './Assets/Group5.png'
import illustrate from './Assets/Illustration.png'
import cards from './Assets/Cards.png'
import six from './Assets/62.png'
import union from './Assets/Union.png'
import union2 from './Assets/Union2.png'
import union3 from './Assets/Union3.png'
import union4 from './Assets/Union4.png'

import { Flex, Box, Text, Image, Button, FormControl, Input, GridItem} from '@chakra-ui/react'

function Features() {
  return (

    <div className='div'>
      <Box position='absolute'  bottom='2992px'>
            <Image src={union} alt='union'/>
          </Box>
          <Box position='absolute'  bottom='2890px'>
            <Image src={union2} alt='union2'/>
          </Box>
          <Box position='absolute'  bottom='2010px'>
            <Image src={union3} alt='union3'/>
          </Box>
          <Box position='absolute'  bottom='1010px'>
            <Image src={union4} alt='union4'/>
          </Box>
      <Flex overflowX='hidden' maxW='fit-content' py={['-100px', '-40px','60px']} px={['20px', '20px','80px']} flexDir='column'>
        <Box>
        <Flex marginX='auto' gap={0} animation={{}} w='fit-content' position='relative' px={['0px','0px','0px']} justifyContent='space-between' flexDir={['column','column' ,'row']}>
          <Box  h='438px'  flex='1' pt='68px'>
            <Text  w={['364px', '364px', '500px','xl']} h={['159', '159px','190px' ,'220px']} fontSize={['32px', '32px','44px' ,'56px']} lineHeight={['44px','44px','55px' ,'67px']} fontWeight={['800','800', '650']}>
             Managing business payments has never been easier
          </Text>
          <Text color='#64607D' pt='2px' pb='30px' fontWeight={['300','320','390']} fontSize={['12px','14px', '19.6px']} lineHeight='30px' w={['370px', '370px', 'lg','446px']} h={['60px','70px','80px']}>
          End-to-end payments and financial management in a single solution. Meet the right platform to help realize.
          </Text>
          <Box display='flex' gap={[30,30,57, 57]} mt='30px'>
            <Box>
            <Button borderRadius={['37.6','37.6px','47px']} w={['129.6px', '129.6px', '144px', '162px']} h={['48px', '48px','54px','60px']} fontSize={['12.8px','12.8px','14px']} lineHeight='19.12px' fontWeight={['700','700','400']} color='#ffffff' bgColor='#3734A9'
            boxShadow='0 2.8px 2.2px rgba(0, 0, 0, 0.034),
            0 0.0px 0.0px rgba(0, 0, 0, 0.008),
            0 0.5px 0px rgba(0, 0, 0, 0.0),
            0 0.3px 7.9px rgba(0, 0, 0, 0.002),
            0 51.8px 53.4px rgba(0, 0, 0, 0.046),
            0 150px 0px rgba(0, 0, 0, 0)'
            >Get Started</Button>
           </Box>
           <Box display='flex' gap={3}>
            <Box>
              <Button h={['48px','48px','54px','60px']} w={['48px', '48px', '55px','60px']} borderRadius={['37.6','37.6px','42px','47px']} lineHeight='19.12px' bgColor='#22D497'
              boxShadow='0 2.8px 2.2px rgba(0, 0, 0, 0.034),
              0 0.0px 0.0px rgba(0, 0, 0, 0.008),
              0 0.5px 0px rgba(0, 0, 0, 0.0),
              0 0.3px 7.9px rgba(0, 0, 0, 0.002),
              0 51.8px 53.4px rgba(0, 0, 0, 0.046),
              0 150px 0px rgba(0, 0, 0, 0)'
              ><Image src={polygon} alt='see how it works' /></Button>
            </Box >
           <Text whiteSpace='nowrap' fontWeight='600' fontSize={['sm','md', 'lg', '17px']} mt='20px' color='#3734A9'>See How It Works</Text>
           </Box>
          </Box>
         </Box>
          <Box  flex='1'>
            <Image maxW={['375.29px', '375.29px', 'lg','1000px']} mt={['30px', '30px', 0]} src={peep} alt='peep' />
          </Box>
        </Flex>
        </Box>

        <Flex marginX='auto' maxW='fit-content' flexDir='column'>
          <Text alignItems='center' px={['0px', '0px', '0px']} textAlign='center' pb='60px' h='30px' w={['424px', '424px', 'lg','container.xl']} lineHeight='30.05px' display='flex' fontSize='22px' fontWeight='400' justifyContent='center'>
          Over 32k+ software  businesses growing with AR Shakir
          </Text>
          <Box px={['45px', '45px', '30px']} display={['grid','grid','flex']} gridTemplateColumns='repeat(2, 3fr)' gap={['30px', '30px', 0]} justifyContent='space-between' flexDir='row'>
            <GridItem><Image h={['70%','70%', '100%']} src={group} alt='companies'/></GridItem>
            <GridItem><Image h={['70%','70%', '100%']} src={group1} alt='companies' /></GridItem>
            <GridItem><Image h={['70%','70%', '100%']} src={group2} alt='companies' /></GridItem>
            <GridItem><Image h={['70%', '70%','100%']} src={group3} alt='companies' /></GridItem>
            <GridItem><Image h={['70%','70%', '100%']} src={group4} alt='companies' /></GridItem>
            <GridItem><Image h={['70%','70%', '100%']} src={group5} alt='companies' /></GridItem>
          </Box>
        </Flex>
        <Flex maxW='fit-content' gap={2} justifyContent='space-between' flexDir={['column-reverse', 'column-reverse', 'row']} pt='100px'>
          <Box flex='1'>
            <Image  maxW={['sm', 'md', 'lg','720px']} src={illustrate} />
          </Box>
          <Box px={['20px','20px', '0px']} flex='1'>
            <Text fontWeight={['800', 'md', 'lg','800']} fontSize={['14px', '14px', '16px','18px']} lineHeight='20.59px' color='#3734A9'>OUR FEATURE</Text>
           <Text py='20px' fontWeight='700' fontSize={['30px','30px','40px','50px']} w={['374px','390px','450px','579px']} lineHeight={['44px','44px','50px','56px']}>
               Receive payments
               quickly from anywhere
            </Text>
            <Text pt='10px' h='72px' color='#757095' fontWeight='395' fontSize='18px' w={['374px', '374px', 'lg','512px']} lineHeight={['26px','26px','22px']}>
            Why kept very ever home mrs. Considered sympathize ten uncommonly occasional 
            assistance sufficient not. Letter of on become he tended active enable to. 
            </Text>
          <Box mt={['70px','70px','40px']}>
            <Button w={['129.6px', '133px', '146px','162px']} h={['48px','48px','54px','60px']} fontSize='14px' lineHeight='19.12px' fontWeight={['700', '700', 'lg','400']} color='#ffffff' bgColor='#3734A9'
            boxShadow='0 2.8px 2.2px rgba(0, 0, 0, 0.034),
            0 0.0px 0.0px rgba(0, 0, 0, 0.008),
            0 0.5px 0px rgba(0, 0, 0, 0.0),
            0 0.3px 7.9px rgba(0, 0, 0, 0.002),
            0 51.8px 53.4px rgba(0, 0, 0, 0.046),
            0 150px 0px rgba(0, 0, 0, 0)'
            >Get Started</Button>
          </Box>
          </Box>
        </Flex>
        <Box>
        <Box right={['18px','72px','156px','138px']} top={['1750px', '1800px','1200px', '1599px']} bottom='10px' position='absolute' zIndex={1}>
            <Image src={six} alt='six' />
          </Box>
        <Flex maxW='fit-content' position='relative' flexDir={['column', 'column', 'row']} py={['30px','30px','50px']} px={['15px','15px','45px','58px']} gap={[8, 8, 20]} marginX='auto' borderRadius='20px' w={['374px', '380px', 'lg','1170px']} h={['607px','607px','426px']} bgColor='#F3F7FA'>
          <Box pt='20px'>
            <Text fontWeight='800' w={['sm', 'md', 'lg','121px']} pb={['6px','10px','15px']} fontSize={['14px', '14px','18px']} color='#3734A9'>OUR FEATURE</Text>
            <Text py={['10px','10px','20px']}  maxW='fit-content' w={['379px','374px','490px','579px']} lineHeight={['35px','40px','56px']} pb={['15px', '20px','40px']} fontSize={['30px','30px','40px','45px']} fontWeight='700'>Receive payments
                  quickly from anywhere</Text>
                    <Text maxW='100%' lineHeight={['23px','24px','26px']} fontSize={['15px','15px','18px']} fontWeight={['400','400','395']} w={['342px', '342px', '460px','512px']} >Why kept very ever home mrs. Considered sympathize ten
                     uncommonly occasional assistance sufficient not.
                     Letter of on become he tended active enable to. </Text>
          </Box>
          <FormControl pt={['0px','0px','20px']} maxW='100%' m='0 auto'>
            <Box maxW='fit-content' color='#3734A9' w={['sm', 'md', 'lg','221px']} fontWeight='690' fontSize='23px' lineHeight={['20px','20px','30px']} pb={['15px','15px','25px']}>Get Started for Free</Box>
            <Input bgColor='#ffffff' h={['48px','48px','60px']} w={['342px', '342px','356px']} mb='20px' id='email' placeholder='Email Address' type='email' />
            <Input bgColor='#ffffff' h={['48px','48px','60px']} w={['342px', '342px','356px']}  mb='20px' id='password' placeholder='Password' type='password' />
            <Button type='submit' display='flex' textAlign='center' fontSize='16px' fontWeight='700' justifyContent='center' mb='20px' bgColor='#ff7f5c' h={['48px','48px','60px']} w={['342px', '342px','356px']} color='#ffffff' id='GetStarted'
            boxShadow='0 2.8px 2.2px rgba(0, 0, 0, 0.034),
            0 6.7px 5.3px rgba(0, 0, 0, 0.048),
            0 12.5px 10px rgba(0, 0, 0, 0.06),
            0 22.3px 17.9px rgba(0, 0, 0, 0.072),
            0 41.8px 33.4px rgba(0, 0, 0, 0.086),
            0 100px 80px #F7E2DD'>GET STARTED</Button>
          </FormControl>
        </Flex>
        </Box>
        <Flex maxW='fit-content' px={['20px','20px','40px']} flexDir={['column', 'column','row']} pt={['100px','120px','100px']}>
          <Box>
            <Text py={['10','10px','20px']}  lineHeight='24.59px' w={['100px','101px','121px']} color='#373489' fontSize={['14px','14px','18px']} fontWeight='800'>
              OUR FEATURE
            </Text>
            <Text py={['15px','15px','20px']} w={['374','374px','549px']} fontWeight='700' fontSize={['30px','30px','50px']} lineHeight={['44px','44px','56px']}>
            All payments are
           linked to your Financy
           account
            </Text>
            <Text w={['374px','374px','512px']} fontWeight={['400','400px','395']} fontSize={['15px','15px','18px']} lineHeight='26px'>
            Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to. 
            </Text>
            <Box mt='40px'>
            <Button w='162px' h='60px' fontSize='14px' lineHeight='19.12px' fontWeight='400' color='#ffffff' bgColor='#3734A9' 
            boxShadow='0 2.8px 2.2px rgba(0, 0, 0, 0.034),
            0 0.0px 0.0px rgba(0, 0, 0, 0.008),
            0 0.5px 0px rgba(0, 0, 0, 0.0),
            0 0.3px 7.9px rgba(0, 0, 0, 0.002),
            0 51.8px 53.4px rgba(0, 0, 0, 0.046),
            0 150px 0px rgba(0, 0, 0, 0)'>Get Started</Button>
          </Box>
          </Box>
          <Box>
            <Image src={cards} alt='cards' />
          </Box>
        </Flex>
        <Flex  flexDir={['column','column', 'row']} marginY={['50px','50px','100px']} mx='auto' py={['10px','10px','35px']} px={['15px','15px','20px']} borderRadius='15px' w={['374px','374px','800px','1173px']} h={['171px','171px','134px']} justifyContent='space-between' border='1px solid #DEE1E6'
         boxShadow='0 2.8px 2.2px rgba(0, 0, 0, 0.034),
         0 0.0px 0.0px rgba(0, 0, 0, 0.008),
         0 0.5px 0px rgba(0, 0, 0, 0.0),
         0 0.3px 7.9px rgba(0, 0, 0, 0.002),
         0 51.8px 53.4px rgba(0, 0, 0, 0.046),
         0 0px 0px rgba(0, 0, 0, 0)'>
          <Text maxW='100%' color='#757095' lineHeight={['23px','23px','32px']} fontWeight='400' fontSize={['14px','14px','22px']} w='795px'>
          And residence for met the estimable disposing. Mean if he they been no hold mr. Is at much do made took held help.
          </Text>
          <Box>
            <Button h={['48px','48px','62px']} fontWeight='700' fontSize={['12.39','12.39px','16px']} bgColor='#FF7F5C' color='#ffffff' borderRadius='47px' w={['342px','342px','214px']}
            boxShadow='0 2.8px 2.2px rgba(0, 0, 0, 0.034),
            0 6.7px 5.3px rgba(0, 0, 0, 0.048),
            0 12.5px 10px rgba(0, 0, 0, 0.06),
            0 22.3px 17.9px rgba(0, 0, 0, 0.072),
            0 41.8px 33.4px rgba(0, 0, 0, 0.086),
            0 100px 80px #E7C0B5'>Get Started</Button>
          </Box>
        </Flex>
      </Flex>
    </div>
  )
}

export default Features

