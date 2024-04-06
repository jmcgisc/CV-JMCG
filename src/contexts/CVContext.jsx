import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

const CVContext = createContext();

const CVProvider = ({ children }) => {
  const [generalInfo, setGeneralInfo] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
  });
  const [education, setEducation] = useState([
    { id: uuidv4(), schoolName: '', major: '', dateFrom: '', dateTo: '' },
  ]);
  const [experience, setExperience] = useState([
    {
      id: uuidv4(),
      companyName: '',
      positionTitle: '',
      responsibilities: '',
      dateFrom: '',
      dateTo: '',
    },
  ]);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleGeneralInfoChange = updatedInfo => {
    setGeneralInfo(updatedInfo);
  };

  const loadDefaultState = () => {
    setGeneralInfo({
      name: 'Carmen Sandiego',
      email: 'cs@beachlife.email',
      phone: '858 555 1234',
      location: 'San Diego, CA',
    });
    setEducation([
      {
        id: uuidv4(),
        schoolName: 'University of Birmingham',
        major: 'Botany',
        dateFrom: '2011-09-01',
        dateTo: '2015-06-30',
      },
    ]);
    setExperience([
      {
        id: uuidv4(),
        companyName: `Myrtle's Plants`,
        positionTitle: 'Chief Botanist',
        responsibilities:
          'Botanical Specialist with over 6 years experience inspecting and classifying plant specimens. Skills include operating microscopes, identifying rare blooms, measuring soil pH, and meticulously recording data. Known for staying upbeat and humming showtunes while performing routine pruning and maintenance. Seeking new role leveraging botanical expertise and positive attitude.',
        dateFrom: '2015-07-01',
        dateTo: '2023-06-30',
      },
    ]);
  };

  const handleClear = () => {
    setGeneralInfo({
      name: '',
      email: '',
      phone: '',
      location: '',
    });
    setEducation([
      { id: uuidv4(), schoolName: '', major: '', dateFrom: '', dateTo: '' },
    ]);
    setExperience([
      {
        id: uuidv4(),
        companyName: '',
        positionTitle: '',
        responsibilities: '',
        dateFrom: '',
        dateTo: '',
      },
    ]);
  };

  const handleAddEducation = () => {
    setEducation([
      ...education,
      { id: uuidv4(), schoolName: '', major: '', dateFrom: '', dateTo: '' },
    ]);
  };

  const handleEducationChange = (updatedEducation, index) => {
    setEducation(prevEducation =>
      prevEducation.map((education, idx) =>
        idx === index ? updatedEducation : education
      )
    );
  };

  const handleDeleteEducation = id => {
    setEducation(education.filter(education => education.id !== id));
  };

  const handleAddExperience = () => {
    setExperience([
      ...experience,
      {
        id: uuidv4(),
        companyName: '',
        positionTitle: '',
        responsibilities: '',
        dateFrom: '',
        dateTo: '',
      },
    ]);
  };

  const handleExperienceChange = (updatedExperience, index) => {
    setExperience(prevEducation =>
      prevEducation.map((experience, idx) =>
        idx === index ? updatedExperience : experience
      )
    );
  };

  const handleDeleteExperience = id => {
    setExperience(experience.filter(experience => experience.id !== id));
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const handleEdit = () => {
    setIsSubmitted(false);
  };

  const value = {
    generalInfo,
    setGeneralInfo,
    loadDefaultState,
    handleClear,
    education,
    setEducation,
    experience,
    setExperience,
    isSubmitted,
    setIsSubmitted,
    handleGeneralInfoChange,
    handleAddEducation,
    handleEducationChange,
    handleDeleteEducation,
    handleAddExperience,
    handleExperienceChange,
    handleDeleteExperience,
    handleSubmit,
    handleEdit,
  };

  return <CVContext.Provider value={value}>{children}</CVContext.Provider>;
};

CVProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { CVContext, CVProvider };
