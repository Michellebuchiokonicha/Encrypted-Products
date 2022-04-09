import React, { useState } from 'react'
import './man.css'
import vector3 from './Assets/Vector3.png'
import List from './Assets/List.png'


import { Flex, Box,Image,Text, Button, Link, UnorderedList, ListItem} from '@chakra-ui/react'
// import { string } from 'yargs'


// const options = ["Template1", "Template2", "Template3"];

function Nav() {

 

// function penny(pen: any):any {
  
//   return pen
// }
const [isOpener, setIsOpener] = useState(false);
const toggle = () => setIsOpener(!isOpener);

  const [isOpen, setIsOpen] = useState(false);

  const toggling = () => setIsOpen(!isOpen);

  const [selectedOption, 
    // setSelectedOption
  ] = useState(null);


const [open, setOpen] = useState(false);

// const onOptionClicked = (value:any) => () => {
//   setSelectedOption(value);
//   setIsOpen(false);
//   console.log(selectedOption);
// };

  return (

      <div className='div'>
      <Flex alignContent='center' overflowX='hidden' margin='auto' whiteSpace='nowrap' fontFamily={'Manrope'} flexDir='row' gap={5} px={['20px','20px', '85px']} py='30px' >
          <Flex justifyContent='space-between' flex={['1']} flexDir='row' fontSize={['15px','20px']} fontWeight=
          '700' cursor='pointer'><Link>AR SHAKIR</Link></Flex>
        <Flex  display={['none', 'none', 'flex']} fontSize='14px' lineHeight='19.12px' fontWeight='400' flex='1.3' gap={[10, 7]} flexDir='row'>

          <Box display='flex' flexDir='column'>
          <Box onMouseOver={toggle} justifyContent='space-between' display='flex'>
            <Text transition='0.3s' _hover={{opacity: '1', color: '#3734A9'}} fontSize={['1.8rem','14px']} lineHeight='19.12px' fontWeight='400' cursor='pointer'><Link>Product</Link></Text>
            <Box><Box h='3.89px' ml='5px' mt='10px' w ='7px'>
              <Image src={vector3} alt='vector' lineHeight='10px' color='#000000' /></Box>
          </Box>
          </Box>

          {isOpener && (
            <Box border='1px solid #3734A9' bgColor='#FFFFFF' boxShadow='3 3 3 #5A5858'>
              <Box pt='10px' pb='10px' borderBottom='1px solid #3734A9'>Crypto</Box>
              <Box pb='10px' borderBottom='1px solid #3734A9'>NFT</Box>
              <Box pb='10px' borderBottom='1px solid #3734A9'>Token</Box>
          </Box>
           )}
           </Box>

          <Box display='flex' flexDir='column'>
          <Box onMouseOver={toggling} justifyContent='space-between' display='flex'>

          {selectedOption || <Box justifyContent='space-between' display='flex'><Text transition='0.3s' _hover={{opacity: '1', color: '#3734A9'}} color='#000000' cursor='pointer'><Link>Template</Link></Text>
            <Box h='3.89px' ml='5px' mt='10px' w ='7px'>
              <Image src={vector3} alt='vector' lineHeight='10px' color='#000000' />
            </Box>
            </Box>}

            
            
          </Box>

          {isOpen && (
            <Box gap={10} border='1px solid #3734A9' bgColor='#FFFFFF' boxShadow='6 3 18 #747070'>
              <Box pt='10px' pb='10px' borderBottom='1px solid #3734A9'>Template1</Box>
              <Box pb='10px' borderBottom='1px solid #3734A9'>Template2</Box>
              <Box pb='10px' borderBottom='1px solid #3734A9'>Template3</Box>
          </Box>
        )}
          </Box>
          
          
          
          <Box transition='0.3s' _hover={{opacity: '1', color: '#3734A9'}} cursor='pointer'><Link>Blog</Link></Box>
          <Box transition='0.3s' _hover={{opacity: '1', color: '#3734A9'}} cursor='pointer'><Link>Pricing</Link></Box>
        </Flex>
        
        <Flex display={['none', 'none', 'flex']} fontSize='14px' lineHeight='19.12px' fontWeight='400' gap={5} flexDir='row'>
          <Box transition='0.3s' _hover={{opacity: '1', color: '#3734A9'}} borderRadius='7px' cursor='pointer'><Link>Sign in</Link></Box>
          <Box transition='0.3s' _hover={{opacity: '1', color: '#3734A9'}} mt='-14px'>
            <Button  h='52px' boxShadow='0 2.8px 2.2px rgba(0, 0, 0, 0.034),
  0 0.0px 0.0px rgba(0, 0, 0, 0.008),
  0 0.5px 0px rgba(0, 0, 0, 0.0),
  0 0.3px 7.9px rgba(0, 0, 0, 0.002),
  0 51.8px 53.4px rgba(0, 0, 0, 0.046),
  0 150px 0px rgba(0, 0, 0, 0)' 
  w='137px' fontSize='14px' lineHeight='19.12px' fontWeight='400' color='#ffffff' bgColor='#3734A9'  cursor='pointer'>Start Free</Button>
          </Box>
        </Flex>
        <Flex pr='40px' maxW='fit-content' flexDir='column'><Box onClick={() => setOpen(!open)} cursor='pointer' display={['block', 'block', 'none']}>
          <Image src={List} alt='list'></Image>
          {open ?
      <UnorderedList maxW='fit-content' border='1px solid #3734A9 ' id='list' listStyleType='none'>
      <Link href='#' onClick={() => setOpen(false)}>
      <ListItem  _hover={{
    background: "white",
    color: "teal.500",
  }} bgColor='#3734A9' borderBottom='1px solid #ADADAD' color='#ffffff' p='10px'>Product</ListItem></Link>
     <ListItem  _hover={{
    bgColor: "red",
    color: "teal.500",
  }} bgColor='#3734A9' color='#ffffff' borderBottom='1px solid #ADADAD' p='10px'><Link href='#' onClick={() => setOpen(false)}>Template</Link></ListItem>
    <ListItem _hover={{
    bgColor: "white",
    color: "teal.500",
  }} bgColor='#3734A9' borderBottom='1px solid #ADADAD' color='#ffffff' p='10px'><Link href='#' onClick={() => setOpen(false)}>Blog</Link></ListItem>
      <ListItem _hover={{
    bgColor: "orange",
    color: "teal.500",
  }} bgColor='#3734A9' borderBottom='1px solid #ADADAD' color='#ffffff' p='10px'><Link href='#' onClick={() => setOpen(false)}>Pricing</Link></ListItem>
      <ListItem _hover={{
    bgColor: "green",
    color: "teal.500",
  }} bgColor='#3734A9' borderBottom='1px solid #ADADAD' color='#ffffff' p='10px'><Link href='#' onClick={() => setOpen(false)}>Sign in</Link></ListItem>
      <ListItem _hover={{
    bgColor: "purple",
    color: "teal.500",
  }} borderBottom='1px solid #ADADAD' bgColor='#3734A9' color='#ffffff' p='10px'><Link href='#' onClick={() => setOpen(false)}>Start For Free</Link></ListItem>
     </UnorderedList>  : ' '}
        </Box></Flex>
       
      </Flex>


      </div>
    
  )
}

export default Nav


