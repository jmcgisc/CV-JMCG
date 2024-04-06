import './assets/styles/style.css';
import { CVProvider } from './contexts/CVContext';
import { CVForm } from './components/CVForm';
import { CVDisplay } from './components/CVDisplay';
import { Heading, Box, Flex, Icon } from '@chakra-ui/react';
import { AiOutlineFileWord } from 'react-icons/ai';

function App() {
  return (
    <CVProvider>
      <Box>
        <Heading
          className='header'
          as='h1'
          size='lg'
          textAlign='center'
          mt={4}
          mb={4}
          color='blue.500'
          backdropBlur={4}>
          <Flex align='center' justifyContent='center'>
            <Icon as={AiOutlineFileWord} boxSize={9} mr={2} />
            <Box>React CV Canvas</Box>
          </Flex>
        </Heading>
      </Box>
      <Box
        className='main'
        border='1px'
        borderColor='gray.300'
        display='flex'
        bg='gray.100'>
        <Box
          flex='2'
          boxShadow='lg'
          p={4}
          mr={5}
          bg='gray.50'
          borderRadius={5}
          className='form-container'>
          <CVForm />
        </Box>
        <Box
          flex='4'
          boxShadow='lg'
          p={4}
          bg='white'
          marginLeft={4}
          className='display-container'>
          <CVDisplay />
        </Box>
      </Box>
    </CVProvider>
  );
}

export default App;
