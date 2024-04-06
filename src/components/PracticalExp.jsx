import PropTypes from 'prop-types';
import {
  Box,
  Textarea,
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
import { MdWorkOutline } from 'react-icons/md';
import { AiFillDelete } from 'react-icons/ai';

function PracticalExp({
  experience,
  index,
  onChange,
  handleDeleteExperience,
  isSubmitted,
}) {
  const handleInputChange = e => {
    const { name, value } = e.target;
    onChange({ ...experience, [name]: value }, index);
  };

  const isError =
    experience.companyName === '' || experience.positionTitle === '';

  return (
    <div className='form-group'>
      <Accordion key={index} defaultIndex={[0]} allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as='span' flex='1' textAlign='left' fontSize='lg'>
                <Icon as={MdWorkOutline} boxSize={6} color='blue.500' mr={1} />
                Experience ({index + 1})
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} fontSize='sm'>
            <Card>
              <CardBody>
                <FormControl isInvalid={isError}>
                  <FormLabel htmlFor={`companyName${index}`} fontSize='sm'>
                    Company Name
                  </FormLabel>
                  <Input
                    name='companyName'
                    value={experience.companyName}
                    onChange={handleInputChange}
                    placeholder='Myrtle&#39;s Plants'
                    id={`companyName${index}`}
                    fontSize='sm'
                    errorBorderColor='red.200'
                    disabled={isSubmitted}
                  />
                  {!isError ? (
                    <FormHelperText fontSize='sm'>
                      Enter your company name.
                    </FormHelperText>
                  ) : (
                    <FormErrorMessage fontSize='sm'>
                      Company name is required.
                    </FormErrorMessage>
                  )}
                </FormControl>
                <FormControl isInvalid={isError}>
                  <FormLabel htmlFor={`positionTitle${index}`} fontSize='sm'>
                    Position Title
                  </FormLabel>
                  <Input
                    name='positionTitle'
                    value={experience.positionTitle}
                    onChange={handleInputChange}
                    placeholder='Chief Botanist'
                    id={`positionTitle${index}`}
                    fontSize='sm'
                    errorBorderColor='red.200'
                    disabled={isSubmitted}
                  />
                  {!isError ? (
                    <FormHelperText fontSize='sm'>
                      Enter your position.
                    </FormHelperText>
                  ) : (
                    <FormErrorMessage fontSize='sm'>
                      Position is required.
                    </FormErrorMessage>
                  )}
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor={`responsibilities${index}`} fontSize='sm'>
                    Responsibilities
                  </FormLabel>
                  <Textarea
                    name='responsibilities'
                    value={experience.responsibilities}
                    onChange={handleInputChange}
                    placeholder='Wielding precision tools to choreograph the daily ballet of botanical life...'
                    id={`responsibilities${index}`}
                    fontSize='sm'
                    disabled={isSubmitted}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor={`dateFrom${index}`} fontSize='sm'>
                    From Date
                  </FormLabel>
                  <Input
                    name='dateFrom'
                    type='date'
                    value={experience.dateFrom}
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
                    value={experience.dateTo}
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
                    onClick={() => handleDeleteExperience(experience.id)}>
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

PracticalExp.propTypes = {
  experience: PropTypes.shape({
    id: PropTypes.string.isRequired,
    companyName: PropTypes.string.isRequired,
    positionTitle: PropTypes.string.isRequired,
    responsibilities: PropTypes.string,
    dateFrom: PropTypes.string,
    dateTo: PropTypes.string,
  }),
  onChange: PropTypes.func.isRequired,
  handleDeleteExperience: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  isSubmitted: PropTypes.bool.isRequired,
};

export { PracticalExp };
