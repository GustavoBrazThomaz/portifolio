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
                <img src="https://cdn.discordapp.com/attachments/992088142855274596/1003787583635079238/20220801_185715-03.jpeg" alt="" srcset="" />
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
                >Desenvolvedor Front-end e estudante de análise e desenvolvimentos de sistemas na faculdade Anhanguera. Em busca de Novos desafios e de evoluir como Desenvolvedor.</motion.span><br/>
                <motion.div
                initial={{opacity: 0}}
                animate={animation}
                transition={{delay: 1.5, duration: 1}}
                >
                <Button color='#4151ab' name='Currículo'/>
                </motion.div>
            </div>
            </div>
        </section>
    </>
  )
}

export default About