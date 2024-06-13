import { easeInOut, motion } from 'framer-motion';
import React from 'react';
import { styles } from '../styles';
import { alson,linkedIn,insta } from '../assets';

const Hero = () => {
  const renderInfoText = () => {
    return (
      <div>
        <h1 className={`${styles.heroHeadText} text-white`}>
          Hi, I'm <span className='text-primary'>Alson</span>
        </h1>
        <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          Experienced full-stack web developer specializing in creating dynamic
          and responsive web applications.
        </p>
        <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          Dedicated to delivering seamless user experiences and scalable
          solutions.
        </p>
      </div>
    );
  };

  const renderGradientLine = () => {
    return (
      <div className='flex flex-col justify-center items-center mt-5'>
        <div className='w-5 h-5 rounded-full bg-primary' />
        <motion.div
          className='w-1 primary-gradient'
          initial={{ height: 0 }}
          animate={{ height: 320 }}
          exit={{ height: 0 }}
          transition={{ duration: 1, ease: easeInOut, delay: 0.5 }}
        />
      </div>
    );
  };

  // const renderReferences = (url,href,left) => {
  //   return (
  //     <motion.div>
  //       <motion.a
  //         href={href}
  //         target='_blank'
  //         rel='noopener noreferrer'
  //       >
  //         <img src={url} alt="LinkedIn"/>
  //       </motion.a>
        
  //     </motion.div>
  //   );
  // };

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[200px] max-w-4xl ${styles.paddingX}`}
      >
        <div className='flex flex-row items-start gap-5'>
          {renderGradientLine()}
          {renderInfoText()}
        </div>     
      </div>

      {/* <div className='ref relative flex flex-row gap-5 h-[50px] w-auto bottom-[0px] '>
        {renderReferences(linkedIn,'https://www.linkedin.com/in/alson-a-1b6755185/',100)}
        {renderReferences(insta,'https://www.linkedin.com/in/alson-a-1b6755185/',250)} 
      </div> */}
      <div className='top-0 w-full h-screen opacity-30'>
        <img
          src={alson}
          alt='my pic'
          className='h-full w-full'
        />
      </div>

      <div className='absolute bottom-6 w-full xs:hidden sm:flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
