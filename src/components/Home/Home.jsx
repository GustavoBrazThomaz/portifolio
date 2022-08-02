import React, { useEffect } from 'react';
import './Home.css';
import Button from '../../templates/Button/Button';
import { useInView } from 'react-intersection-observer'
import { useAnimation, motion } from 'framer-motion'

function Home() {

  const {ref, inView} = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if(inView){
      animation.start({
        opacity: 1
      })
    }if(!inView){
      animation.start({
        opacity: 0
      })
    }
  })

  return (
    <>
      <section ref={ref} className='container'>
        <div className='container-title'>
          <div className='title'>
            <div>
              <motion.span
                initial={{ opacity: 0 }}
                animate={animation}
                transition={{ duration: 1, delay: 1 }}
                className='text-name'>{'Gustavo Braz'}</motion.span><br />
              <motion.span
                initial={{ opacity: 0 }}
                animate={animation}
                transition={{ duration: 1, delay: 2 }}
                className='text-job'>{'<Desenvolvedor Front-end/>'}</motion.span><br />
              <motion.div
                initial={{ opacity: 0 }}
                animate={animation}
                transition={{ duration: 1, delay: 3 }}
              >
                <Button color='#219bff' name='Linkedin' />
                <Button color='#fff' name='Github' />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home