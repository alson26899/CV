import React from 'react';
import { SectionWrapper } from '../hoc';
import {
  frontEndTechnologies,
  backEndTechnologies,
  otherTechnologies,
} from '../constants';
import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion';
import { styles } from '../styles';
import { fadeIn } from '../utils/motion';

const Tech = () => {
  const renderTechnologies = (technologies) => {
    const technologiesToRender = technologies.map((technology, index) => {
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5 * (index + 1),
            delay: 1,
            ease: 'easeInOut',
          }}
          key={technology.name}
          className='flex gap-2 justify-start items-center border-2 rounded-lg border-[#47484f] p-1 bg-black-gradient h-[50px]'
        >
          <img
            src={technology.icon}
            alt={technology.name}
            className='h-8 w-8 object-contain'
          />
          <div>{technology.name}</div>
        </motion.div>
      );
    });
    return (
      <div className='flex flex-wrap gap-5 justify-center'>
        {technologiesToRender}
      </div>
    );
  };

  const renderCard = (technologies, title = 'Others') => {
    return (
      <motion.div
        className='border-2 border-[#915EFF] rounded-2xl w-[100%] max-w-[500px] p-5 bg-[#171721]'
        variants={fadeIn('', '', 0.1, 1)}
      >
        <div className='text-3xl text-gary-400 text-center mb-4'>{title}</div>
        {renderTechnologies(technologies)}
      </motion.div>
    );
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Here are some of my skills on which I have been working on for the
          past 2 years.
        </p>
        <h2 className={`${styles.sectionHeadText} text-center mb-4`}>
          Skills.
        </h2>
      </motion.div>

      <div className='flex flex-row flex-wrap justify-center gap-10 text-[#b1b2b3]'>
        {renderCard(frontEndTechnologies, 'Front End')}
        {renderCard(backEndTechnologies, 'Back End')}
        {renderCard(otherTechnologies)}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, 'skills');
