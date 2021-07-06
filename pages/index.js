import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Box,
  Divider,
  Text,
  Tooltip,
  useToast,
  useClipboard
} from "@chakra-ui/react"

import {AddIcon} from '@chakra-ui/icons'


import {useState} from 'react'

const Index = () => {

  const toast = useToast();

  const [redValue, setRedValue] = useState(127);
  const [greenValue, setGreenValue] = useState(127);
  const [blueValue, setBlueValue] = useState(127);
  const [colors, setColors] = useState([]);

  const handleRedChange = (e) => {
   setRedValue(e);
  }

  const handleGreenChange = (e) => {
    setGreenValue(e);
   }

  const handleBlueChange = (e) => {
    setBlueValue(e);
   }



  const addColor = () => {
    const value = `rgb(${redValue},${greenValue},${blueValue})`;
    setColors([...colors, value])
    toast({
        title: "Color added!",
        description: `${value}`,
        status: "success",
        duration: 1500,
        isClosable: false,
    })
  }


  const value = `rgb(${redValue},${greenValue},${blueValue})`;

  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '100vh',padding: '50px 20px', margin: '0 auto', background: `rgb(${redValue},${greenValue},${blueValue})`}}>
      <Box boxShadow='md' w='100%' maxW='400px' mx='auto' background='white' padding="30px 20px" borderRadius='10px'>
        <Text fontSize='14px' fontWeight='300' color='gray.500'>RED</Text>
        <Slider aria-label="slider-red" colorScheme="red" value={redValue} onChange={handleRedChange} min={0} max={255} step={1}>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <Tooltip bg='gray.600' marginBottom='5px' hasArrow closeDelay={500} placement='top' label={redValue} aria-label="A tooltip">
          <SliderThumb />
            </Tooltip>
        </Slider>
        <Text fontSize='14px' fontWeight='300' color='gray.500'>GREEN</Text>
        <Slider aria-label="slider-green" colorScheme="green" value={greenValue} onChange={handleGreenChange} defaultValue={50} min={0} max={255} step={1}>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <Tooltip bg='gray.600' marginBottom='5px' hasArrow closeDelay={500} placement='top' label={greenValue} aria-label="A tooltip">
          <SliderThumb />
            </Tooltip>
        </Slider>
        <Text fontSize='14px' fontWeight='300' color='gray.500'>BLUE</Text>
        <Slider aria-label="slider-blue" colorScheme="blue" value={blueValue} onChange={handleBlueChange} defaultValue={50} min={0} max={255} step={1}>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <Tooltip bg='gray.600' marginBottom='5px' hasArrow closeDelay={500} placement='top' label={blueValue} aria-label="A tooltip">
          <SliderThumb />
            </Tooltip>
        </Slider>
        <Divider marginY='20px'/>
        <Text fontSize='14px' fontWeight='300' color='gray.500' textAlign='center'>rgb({redValue}, {greenValue}, {blueValue})</Text>
        <Divider marginY='20px'/>
        <Box d='flex' alignItems='center' justifyContent='space-between'>
          <Text fontSize='16px' fontWeight='700' color='gray.500' textAlign='center'>COLORS</Text>
          <AddIcon onClick={addColor} _hover={{color: 'gray.600', transform: 'scale(1.1)', transition: '.1s linear'}} color='gray.500' w={4} h={4}/>
        </Box>
        <Box d='flex' marginY='20px' flexWrap='wrap'>
        {colors && (
          colors.map(color=> (
            <>
            <Tooltip bg='gray.600' marginBottom='5px' padding='10px 20px' hasArrow placement='top' label={color} aria-label="A tooltip">
              <Box borderRadius='10px' marginRight='10px' marginBottom='10px' width='20px' height='20px' bg={color}></Box>
            </Tooltip>
            </>
          ))
        )}
        </Box>
      </Box>
    </div>
  )
}

export default Index
