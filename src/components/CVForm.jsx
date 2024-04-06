import { useContext } from 'react';
import { CVContext } from '../contexts/CVContext';
import { GeneralInfo } from './GeneralInfo';
import { EducationalExp } from './EducationalExp';
import { PracticalExp } from './PracticalExp';
import { Box, Button, HStack, Icon } from '@chakra-ui/react';
import { AiOutlineCloudDownload, AiOutlineClear } from 'react-icons/ai';
import { IoAddCircleOutline } from 'react-icons/io5';

function CVForm() {
  const {
    generalInfo,
    education,
    loadDefaultState,
    handleClear,
    experience,
    isSubmitted,
    handleGeneralInfoChange,
    handleAddEducation,
    handleEducationChange,
    handleDeleteEducation,
    handleAddExperience,
    handleExperienceChange,
    handleDeleteExperience,
    handleSubmit,
    handleEdit,
  } = useContext(CVContext);
  return (
    <Box>
      <Box className='btn-container' mt={5} mb={5}>
        {isSubmitted ? null : (
          <HStack justify='space-evenly' mb={4}>
            <Button colorScheme='teal' size='sm' onClick={loadDefaultState}>
              <Icon as={AiOutlineCloudDownload} boxSize={6} mr={1} /> Load
              Default
            </Button>
            <Button colorScheme='red' size='sm' onClick={handleClear}>
              <Icon as={AiOutlineClear} boxSize={6} mr={1} /> Clear Form
            </Button>
          </HStack>
        )}
      </Box>
      <Box className='form-group'>
        <GeneralInfo
          info={generalInfo}
          onChange={handleGeneralInfoChange}
          isSubmitted={isSubmitted}
        />
        <hr />
        {education.map((education, index) => (
          <EducationalExp
            key={education.id}
            education={education}
            index={index}
            onChange={handleEducationChange}
            handleDeleteEducation={handleDeleteEducation}
            isSubmitted={isSubmitted}
          />
        ))}
        {isSubmitted ? null : (
          <Box className='btn-container' mt={5} mb={5}>
            <Button
              colorScheme='twitter'
              size='sm'
              variant='outline'
              onClick={handleAddEducation}>
              <Icon as={IoAddCircleOutline} boxSize={6} mr={1} />
              Add Education
            </Button>
          </Box>
        )}
        <hr />
        {experience.map((experience, index) => (
          <PracticalExp
            key={experience.id}
            experience={experience}
            index={index}
            onChange={handleExperienceChange}
            handleDeleteExperience={handleDeleteExperience}
            isSubmitted={isSubmitted}
          />
        ))}
        {isSubmitted ? null : (
          <Box className='btn-container' mt={5} mb={5}>
            <Button
              colorScheme='linkedin'
              size='sm'
              variant='outline'
              onClick={handleAddExperience}>
              <Icon as={IoAddCircleOutline} boxSize={6} mr={1} />
              Add Experience
            </Button>
          </Box>
        )}
        <Box className='btn-container' mt={5}>
          <Box className='button-container'>
            <Button
              colorScheme={isSubmitted ? 'yellow' : 'messenger'}
              size='md'
              mt={6}
              onClick={isSubmitted ? handleEdit : handleSubmit}>
              {isSubmitted ? 'Edit CV' : 'Create CV'}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export { CVForm };
