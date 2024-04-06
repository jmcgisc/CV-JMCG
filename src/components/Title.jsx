import PropTypes from 'prop-types';
import { Heading } from '@chakra-ui/react';

function Title({ title }) {
  return (
    <Heading as='h1' size='2xl' mb={3}>
      {title}
    </Heading>
  );
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export { Title };
