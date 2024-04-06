import { useContext } from 'react';
import { CVContext } from '../contexts/CVContext';
import { Box, Text, Flex, VStack, HStack, Icon } from '@chakra-ui/react';
import {
  MdOutlineMailOutline,
  MdOutlinePhonelinkRing,
  MdOutlineLocationOn,
} from 'react-icons/md';

const CVDisplay = () => {
  const { generalInfo, education, experience } = useContext(CVContext);

  return (
    <Box className='cv-display'>
      {/* General Info Section */}
      <VStack
        className='general-info-section'
        bg={generalInfo.name && 'blue.500'}
        color='white'
        p={3}
        mb={6}
        align='center'>
        <Text className='name' fontSize='2xl' mb={2} as='b'>
          {generalInfo.name}
        </Text>
        <HStack width='100%' justifyContent='space-around'>
          <Text className='email' fontSize='sm'>
            {generalInfo.email && (
              <Icon as={MdOutlineMailOutline} boxSize={4} />
            )}{' '}
            {generalInfo.email}
          </Text>
          <Text className='location' fontSize='sm'>
            {generalInfo.location && (
              <Icon as={MdOutlineLocationOn} boxSize={4} />
            )}{' '}
            {generalInfo.location}
          </Text>
          <Text className='phone' fontSize='sm'>
            {generalInfo.phone && (
              <Icon as={MdOutlinePhonelinkRing} boxSize={4} />
            )}{' '}
            {generalInfo.phone}
          </Text>
        </HStack>
      </VStack>

      {/* Education Section */}
      <Box className='education-section' p={4} borderRadius='md' mb={6}>
        {education && education.length > 0 && education[0]?.schoolName && (
          <Text
            className='section-title'
            bg='gray.300'
            color='black'
            fontSize='xl'
            mb={1}>
            Education
          </Text>
        )}
        {education?.map(edu => (
          <Flex
            key={edu.id}
            className='education-entry'
            mb={4}
            alignItems='center'
            justifyContent='space-between'>
            <VStack alignItems='flex-start' ml={4}>
              <Text className='school-name' fontSize='sm' fontWeight='bold'>
                {edu.schoolName}
              </Text>
              <HStack>
                <Text className='date-from' fontSize='sm'>
                  {edu.dateFrom} {edu.dateFrom && edu.dateTo && ' - '}
                </Text>
                <Text className='date-to' fontSize='sm'>
                  {edu.dateTo}
                </Text>
              </HStack>
            </VStack>
            <Text
              className='major'
              fontSize='sm'
              alignItems='flex-start'
              mr={10}>
              {edu.major && <Text as='b'>Major: </Text>} {edu.major}
            </Text>
          </Flex>
        ))}
      </Box>

      {/* Experience Section */}
      <VStack
        className='experience-section'
        p={4}
        borderRadius='md'
        mb={6}
        align='stretch'>
        {experience && experience.length > 0 && experience[0]?.companyName && (
          <Text
            className='section-title'
            bg='gray.300'
            color='black'
            fontSize='xl'
            mb={1}>
            Experience
          </Text>
        )}
        {experience?.map(exp => (
          <Flex
            key={exp.id}
            className='experience-entry'
            mb={4}
            justify='space-between'
            alignItems='flex-start'>
            <VStack align='flex-start'>
              <Text className='date-from' fontSize='sm'>
                {exp.dateFrom}
              </Text>
              <Text className='date-to' fontSize='sm'>
                {exp.dateTo}
              </Text>
            </VStack>
            <VStack align='flex-end'>
              <Text className='company-name' fontSize='sm' fontWeight='bold'>
                {exp.companyName}
              </Text>
              <Text className='position-title' fontSize='sm' as='i'>
                {exp.positionTitle}
              </Text>
            </VStack>
            <Box flex='1' pl={4}>
              <Text className='responsibilities' fontSize='sm'>
                {exp.responsibilities}
              </Text>
            </Box>
          </Flex>
        ))}
      </VStack>
    </Box>
  );
};

export { CVDisplay };
