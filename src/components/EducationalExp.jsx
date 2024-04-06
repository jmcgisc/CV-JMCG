import PropTypes from 'prop-types';
import {
  Box,
  Input,
  Button,
  Card,
  CardBody,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Icon,
} from '@chakra-ui/react';
import { IoSchoolOutline } from 'react-icons/io5';
import { AiFillDelete } from 'react-icons/ai';

function EducationalExp({
  education,
  index,
  onChange,
  handleDeleteEducation,
  isSubmitted,
}) {
  const handleInputChange = e => {
    const { name, value } = e.target;
    onChange({ ...education, [name]: value }, index);
  };

  const isError = education.schoolName === '' || education.major === '';

  return (
    <div className='form-group'>
      <Accordion key={index} defaultIndex={[0]} allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as='span' flex='1' textAlign='left' fontSize='lg'>
                <Icon
                  as={IoSchoolOutline}
                  boxSize={6}
                  color='blue.500'
                  mr={1}
                />
                Education ({index + 1})
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} fontSize='sm'>
            <Card>
              <CardBody>
                <FormControl isInvalid={isError}>
                  <FormLabel htmlFor={`schoolName${index}`} fontSize='sm'>
                    School Name
                  </FormLabel>
                  <Input
                    name='schoolName'
                    value={education.schoolName}
                    onChange={handleInputChange}
                    placeholder='University of Birmingham'
                    id={`schoolName${index}`}
                    fontSize='sm'
                    errorBorderColor='red.200'
                    disabled={isSubmitted}
                  />
                  {!isError ? (
                    <FormHelperText fontSize='sm'>
                      Enter your school name.
                    </FormHelperText>
                  ) : (
                    <FormErrorMessage fontSize='sm'>
                      School name is required.
                    </FormErrorMessage>
                  )}
                </FormControl>
                <FormControl isInvalid={isError}>
                  <FormLabel htmlFor={`major${index}`} fontSize='sm'>
                    Major
                  </FormLabel>
                  <Input
                    name='major'
                    value={education.major}
                    onChange={handleInputChange}
                    placeholder='Botany'
                    id={`major${index}`}
                    fontSize='sm'
                    errorBorderColor='red.200'
                    disabled={isSubmitted}
                  />
                  {!isError ? (
                    <FormHelperText fontSize='sm'>
                      Enter your major.
                    </FormHelperText>
                  ) : (
                    <FormErrorMessage fontSize='sm'>
                      Major is required.
                    </FormErrorMessage>
                  )}
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor={`dateFrom${index}`} fontSize='sm'>
                    From Date
                  </FormLabel>
                  <Input
                    name='dateFrom'
                    type='date'
                    value={education.dateFrom}
                    onChange={handleInputChange}
                    id={`dateFrom${index}`}
                    mb={5}
                    fontSize='sm'
                    disabled={isSubmitted}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor={`dateTo${index}`} fontSize='sm'>
                    To Date
                  </FormLabel>
                  <Input
                    name='dateTo'
                    type='date'
                    value={education.dateTo}
                    onChange={handleInputChange}
                    id={`dateTo${index}`}
                    mb={5}
                    fontSize='sm'
                    disabled={isSubmitted}
                  />
                </FormControl>
                {isSubmitted ? null : (
                  <Button
                    colorScheme='red'
                    size='sm'
                    disabled={isSubmitted}
                    onClick={() => handleDeleteEducation(education.id)}>
                    <Icon as={AiFillDelete} boxSize={5} mr={1} />
                    Delete
                  </Button>
                )}
              </CardBody>
            </Card>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

EducationalExp.propTypes = {
  education: PropTypes.shape({
    id: PropTypes.string.isRequired,
    schoolName: PropTypes.string.isRequired,
    major: PropTypes.string.isRequired,
    dateFrom: PropTypes.string,
    dateTo: PropTypes.string,
  }),
  index: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  handleDeleteEducation: PropTypes.func.isRequired,
  isSubmitted: PropTypes.bool.isRequired,
};
export { EducationalExp };
