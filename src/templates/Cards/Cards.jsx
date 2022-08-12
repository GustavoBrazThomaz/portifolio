import { CardActions, CardContent, CardMedia, Card } from '@mui/material'
import React from 'react'
import './Cards.css'
import { motion } from 'framer-motion'

function Cards({ name, description, image, link, working, template }) {

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.05 }}
      >
        <Card
          style={{
            backgroundColor: 'rgb(68, 68, 68)',
            width: '100%',
            maxWidth: '400px',
            minWidth: '250px',
            margin: '0 auto',
            height: '450px',
          }}
        >
          <CardMedia
            component="img"
            alt="green iguana"
            height="250px"
            image={image}
          />
          <CardContent>
            {working === true &&
              <span className='card-title' style={{fontSize: '1.6rem'}}>
                {name} | Em Desenvolvimento
              </span>
            }
            {working === false &&
              <span className='card-title'>
                {name}
              </span>
            }
            <br /><br />
            <span className='card-description'>
              {description}
            </span>
          </CardContent>
          <CardActions style={{ display: 'flex', justifyContent: 'center' }}>
            {template === true &&
              <a href={link} target='_blank' rel="noreferrer">
                <motion.button
                  className='card-button'
                  whileHover={{ scale: 1.1, boxShadow: `0 0 5px rgb(10, 10, 10)`, textShadow: `0 0 2px #fff` }}
                >Ver o Projeto
                </motion.button>
              </a>
            }
            {
              template === false &&
              <>
                  <motion.button
                    className='card-button'
                    style={{cursor: 'default'}}
                  >Em Desenvolvimento
                  </motion.button>
              </>
            }
          </CardActions>
        </Card>
      </motion.div>
    </>
  )
}

export default Cards