import React, { useEffect } from 'react'
import './About.css'
import Button from '../../templates/Button/Button'
import { useInView } from 'react-intersection-observer'
import { useAnimation, motion } from 'framer-motion'

function About() {

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
        <section ref={ref} className='about-container'>
            <div className='info-about-container'>
            <motion.div 
            initial={{opacity: 0}}
            animate={animation}
            transition={{delay: 0.5, duration: 1}}
            className='description-image'>
                <img src="https://media.discordapp.net/attachments/992088142855274596/1017490537244278824/20220908_143652.jpg?width=507&height=676" alt="" srcset="" />
            </motion.div>
            <div className='description-card'>
                <motion.span
                initial={{opacity: 0}}
                animate={animation}
                transition={{delay: 1, duration: 1}}
                className='about-title'>Sobre Mim</motion.span><br/>
                <motion.span
                initial={{opacity: 0}}
                animate={animation}
                transition={{delay: 1, duration: 1}}
                >Desenvolvedor Front-end e estudante de análise e desenvolvimentos de sistemas na faculdade Anhanguera. Em busca sempre de novos conhecimentos e sempre procurando evoluir como pessoa e profissional.</motion.span><br/>
                <motion.div
                initial={{opacity: 0}}
                animate={animation}
                transition={{delay: 1.5, duration: 1}}
                >
                <div className='button-description'>
                <Button color='#4151ab' name='Currículo'/>
                </div>
                </motion.div>
            </div>
            </div>
        </section>
    </>
  )
}

export default About