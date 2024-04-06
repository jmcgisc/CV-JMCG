import PropTypes from 'prop-types';
import {
  Box,
  Input,
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
import { IoInformationCircleOutline } from 'react-icons/io5';

function GeneralInfo({ info, onChange, isSubmitted }) {
  const handleInputChange = e => {
    const { name, value } = e.target;
    onChange({ ...info, [name]: value });
  };

  const isError = info.name === '';

  return (
    <>
      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
          <h1>
            <AccordionButton>
              <Box as='span' flex='1' textAlign='left' fontSize='lg'>
                <Icon
                  as={IoInformationCircleOutline}
                  boxSize={6}
                  color='blue.500'
                />{' '}
                Personal Information
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h1>
          <AccordionPanel pb={4} fontSize='sm'>
            <Card mb={5}>
              <CardBody>
                <FormControl isInvalid={isError}>
                  <FormLabel htmlFor='name' fontSize='sm'>
                    Name
                  </FormLabel>
                  <Input
                    name='name'
                    value={info.name}
                    onChange={handleInputChange}
                    placeholder='Carmen Sandiego'
                    fontSize='sm'
                    errorBorderColor='red.200'
                    disabled={isSubmitted}
                  />
                  {!isError ? (
                    <FormHelperText fontSize='sm'>
                      Enter your full name.
                    </FormHelperText>
                  ) : (
                    <FormErrorMessage fontSize='sm'>
                      Full name is required.
                    </FormErrorMessage>
                  )}
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor='email' fontSize='sm'>
                    Email
                  </FormLabel>
                  <Input
                    name='email'
                    value={info.email}
                    onChange={handleInputChange}
                    placeholder='cs@beachlife.email'
                    fontSize='sm'
                    disabled={isSubmitted}
                  />
                  <FormHelperText fontSize='sm'>
                    {`We'll never share your email.`}
                  </FormHelperText>
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor='phone' fontSize='sm'>
                    Phone
                  </FormLabel>
                  <Input
                    name='phone'
                    value={info.phone}
                    onChange={handleInputChange}
                    placeholder='858-555-1234'
                    fontSize='sm'
                    disabled={isSubmitted}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor='location' fontSize='sm'>
                    Location
                  </FormLabel>
                  <Input
                    name='location'
                    value={info.location}
                    onChange={handleInputChange}
                    placeholder='San Diego, CA'
                    fontSize='sm'
                    disabled={isSubmitted}
                  />
                </FormControl>
              </CardBody>
            </Card>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
}

GeneralInfo.propTypes = {
  info: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }),
  onChange: PropTypes.func.isRequired,
  isSubmitted: PropTypes.bool.isRequired,
};

export { GeneralInfo };
