import React from 'react'
import './Button.css'
import {motion} from 'framer-motion'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import curriculo from '../../assets/pdf/curriculoGustavoBraz.pdf'
function Button({ color, name }) {

    const buttonBorder = { border: `1px solid ${color}` }

    return (
        <>
            {name === 'Github' &&
                <motion.button 
                whileHover={{scale: 1.1, boxShadow: `0 0 5px ${color}`, textShadow: `0 0 2px #fff`}}
                className='button' style={buttonBorder}><a href='https://github.com/GustavoBrazThomaz' target='_blank' rel='noreferrer'><GitHubIcon />{name}</a></motion.button>
            }
            {name === 'Linkedin' &&
                <motion.button 
                whileHover={{scale: 1.1, boxShadow: `0 0 5px ${color}`, textShadow: `0 0 2px #fff`}}
                className='button' style={buttonBorder}><a href='https://www.linkedin.com/in/gustavobrazdev' target='_blank' rel='noreferrer'><LinkedInIcon />{name}</a></motion.button>
            }
            {name === 'Currículo' &&
                <motion.button 
                whileHover={{scale: 1.1, boxShadow: `0 0 5px ${color}`, textShadow: `0 0 2px #fff`}}
                className='button' style={buttonBorder}><a 
                href={curriculo} 
                dowload='curriculoGustavoBraz.pdf' 
                type='application/pdf'
                target="_blank"
                rel="noreferrer"
                ><ArrowDownwardIcon />{name}</a></motion.button>
            }
        </>
    )
}

export default Button