
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
    link: 'https://react-customers.herokuapp.com/',
    image: 'https://cdn.discordapp.com/attachments/992088142855274596/1003829905802395778/unknown.png',
    working: false,
    template: true
  }, {
    name: 'Pokedex',
    description: 'Pokédex desenvolvida em React com Typescript utilizando a PokéAPI',
    link: 'https://gus-pokedex.herokuapp.com/',
    image: 'https://cdn.discordapp.com/attachments/992088142855274596/1004100787510706176/unknown.png',
    working: false,
    template: true
  }, {
    name: 'Fortnite App',
    description: 'App de Fornite desenvolvido em React js utilizando a Fortinite Api e Context API ',
    link: 'https://gus-fortnite-app.herokuapp.com/',
    image: 'https://cdn.discordapp.com/attachments/992088142855274596/1003829800391151626/unknown.png',
    working: false,
    template: true
  },{
    name: 'Finances',
    description: 'Finances desenvolvido em React com Typescript utilizando a Rest API e Redux ',
    link: 'link Finances',
    image: 'https://cdn.discordapp.com/attachments/992088142855274596/1004100124064108644/unknown.png',
    working: true,
    template: false
  }]

  return (
    <>
      <div ref={ref} style={{marginTop: '10rem', textAlign: 'center'}}>
        <Container>
        <motion.span
        initial={{opacity: 0}}
        animate={animation}
        transition={{delay: 0.5, duration: 1}}
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