
import { Container, Grid } from '@mui/material'
import React, { useEffect } from 'react'
import Cards from '../../templates/Cards/Cards'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
import './Projects.css'

function Projects() {

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

  const projects = [{
    name: 'Customers',
    description: 'Customers desenvolvida em React JS e utilizando Rest API.',
    link: 'https://react-customers.vercel.app/',
    image: 'https://cdn.discordapp.com/attachments/992088142855274596/1003829905802395778/unknown.png',
    working: false,
    template: true
  }, {
    name: 'Águas da Prata',
    description: 'Águas da Prata foi desenvolvido em HTML e CSS',
    link: 'https://gustavobrazthomaz.github.io/aguas-da-prata/',
    image: 'https://cdn.discordapp.com/attachments/992088142855274596/1037890611849736282/unknown.png',
    working: false,
    template: true
  }, {
    name: 'Fortnite App',
    description: 'App de Fornite desenvolvido em React js utilizando a Fortinite Api e Context API ',
    link: 'https://fortnite-app.vercel.app/',
    image: 'https://cdn.discordapp.com/attachments/992088142855274596/1003829800391151626/unknown.png',
    working: false,
    template: true
  },{
    name: 'PetShop',
    description: 'PetShop é um app desenvolvido em React Js utilizando Redux, TypeScript e Rest API em Node Js com Mongo db ',
    link: 'https://petshop-react-blue.vercel.app/',
    image: 'https://cdn.discordapp.com/attachments/992088142855274596/1037888314604257360/unknown.png',
    working: false,
    template: true
  }]

  return (
    <>
      <div ref={ref} style={{marginTop: '10rem', textAlign: 'center'}}>
        <Container>
        <motion.span
        initial={{opacity: 0}}
        animate={animation}
        transition={{delay: 0.1, duration: 0.4}}
        className='project-title'>Projetos</motion.span>

        <motion.div
        initial={{opacity: 0}}
        animate={animation}
        transition={{delay: 1.5, duration: 1}}
        style={{marginTop: '5rem'}}
        >
        <Grid container spacing={4}>
          {projects.map(resp => (
            <>
              <Grid item lg={6} md={6} xs={12}>
                <Cards
                  name={resp.name}
                  image={resp.image}
                  description={resp.description}
                  link={resp.link}
                  working={resp.working}
                  template={resp.template}
                />
              </Grid>
            </>
          ))}
        </Grid>
        </motion.div>
        </Container>
      </div>
    </>
  )
}

export default Projects